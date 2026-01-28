import mongoose, { Schema } from "mongoose";

const ProjectSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    link: { type: String }, 
    isHidden: {
      type: Boolean,
      default: false, 
    },
  },
  { timestamps: true }
);

export default mongoose.models.Project ||
  mongoose.model("Project", ProjectSchema);
