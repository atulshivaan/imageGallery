import Photo from "../models/uploadModel.js"; 

export const userUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const photo = req.file.filename;
    const saved = await Photo.create({ photo });

    res.status(201).json(saved);
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


export const getUpload = async (req, res) => {
  try {
    const allPhotos = await Photo.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Fetched all images",
      data: allPhotos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};