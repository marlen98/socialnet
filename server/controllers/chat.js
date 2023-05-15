import Chat from "../models/Chat.js";
import User from "../models/User.js";


export const createChat = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;
    const user = await User.findById(userId);
    const newChat = new Chat({
      userId,
      description,
      userPicturePath: user.picturePath,
      picturePath
    });
    await newChat.save();

    const chat = await Chat.find();
    res.status(201).json(chat);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getFeedChats = async (req, res) => {
  try {
    const chat = await Chat.find();
    res.status(200).json(chat);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserChats = async (req, res) => {
  try {
    const { userId } = req.params;
    const chat = await Chat.find({ userId });
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


