const MenuList=require("../models/menuListModel")

exports.getAllMenuItems = async (req, res) => {
    try {
      const menuItems = await MenuList.find();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };