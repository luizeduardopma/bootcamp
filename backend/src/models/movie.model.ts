import { Document, Schema, model } from "mongoose";

interface MovieDocument {
  name: string;
  category: string;
  description: string;
  poster: string;
  midia_type: string;
  backdrop?: string;
}

const MovieSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    media_type: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    backdrop: {
      type: String,
    },
  },
  { timestamps: true }
);

const Movie = model<MovieDocument>("Movie", MovieSchema);

export { Movie };
