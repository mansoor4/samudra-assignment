import express, { json } from "express";
import dns from "dns";
import cors from "cors";
import path from "path";
import imageDownload from "image-downloader";
import sharp from "sharp";
import patch from "fast-json-patch";
import DBConnection from "./db/index.js";
import errorHandler from "./utils/errorHandler.js";

/* Routes Export */
import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import isAuthenticated from "./middleware/isAuthenticated.js";

/* Express App */
const app = express();

/* Middleware */
app.use(express.json());
app.use(cors());

/* Check internet connectivity */
app.use(async (req, res, next) => {
  try {
    await dns.promises.lookup("google.com");
    return next();
  } catch (err) {
    return next(err);
  }
});

/* Routes */
app.use("/auth", authRouter);

app.use("/user", userRouter);

app.get("/thumbnailRequest", isAuthenticated, async (req, res, next) => {
  const { imageUrl, imageExt } = req.query;
  const imagePath = path.resolve("assets", `thumbnail.${imageExt}`);
  const imagePathResize = path.resolve("assets", `thumbnailResize.${imageExt}`);
  try {
    await imageDownload.image({
      url: imageUrl,
      dest: imagePath,
    });

    await sharp(imagePath)
      .resize({ height: 50, width: 50 })
      .toFile(imagePathResize);
    return res.sendFile(imagePathResize);
  } catch (err) {
    return next(err);
  }
});

app.patch("/convertJson", isAuthenticated, (req, res, next) => {
  const { json, jsonPatch } = req.body;
  try {
    if (!json || !jsonPatch) throw errorHandler("Invalid request", 400);
    const updatedJson = patch.applyPatch(json, jsonPatch).newDocument;
    return res.json(updatedJson);
  } catch (err) {
    return next(err);
  }
});

app.use("/", (req, res, next) => next(errorHandler("Invalid route", 400)));

/* Error Handler */
app.use((err, req, res, next) =>
  res.status(err.status || 500).json({
    message: err.message,
  })
);

DBConnection(() => {
  app.listen(3000, () => {
    console.log("Server started at port 3000");
  });
});
