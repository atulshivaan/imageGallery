import mongoose from "mongoose";

const photoSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create the model
const Photo = mongoose.model("Photo", photoSchema);

export default Photo;
