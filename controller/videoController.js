const Video=require("../models/videoModel");

const getAllVideos = async (req, res) => {
    try {
      const videos = await Video.find();
      
      // Convert Buffer to base64-encoded string
      const videosWithBase64 = videos.map(video => {
        const base64Video = {
          ...video.toObject(), // Convert Mongoose document to plain JavaScript object
          video: video.video.toString('base64'),
        };
        return base64Video;
      });
  
      res.json(videosWithBase64);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  module.exports={
    getAllVideos
  }