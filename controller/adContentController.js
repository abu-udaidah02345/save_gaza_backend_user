const AdContent=require("../models/adContentModel");


exports.getAllContent = async (req, res) => {
    try {
      // Retrieve all ad content from the database
      const allAdContent = await AdContent.find();
      res.json(allAdContent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };