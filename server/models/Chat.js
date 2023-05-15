import mongoose from "mongoose";

const chatSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    description: String,
    picturePath: String,
    userPicturePath: String,
   
  },
  { timestamps: true }
);

const Chat = mongoose.model("Chat", chatSchema);

export default Chat;