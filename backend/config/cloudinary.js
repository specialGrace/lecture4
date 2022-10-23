import dotenv from "dotenv";
import Cloudinary from "cloudinary";
dotenv.config();

export const cloudinary = Cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUDNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});
