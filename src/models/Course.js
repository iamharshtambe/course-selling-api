import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: true,
         trim: true,
         maxlength: 100,
      },
      description: {
         type: String,
         required: true,
         trim: true,
         maxlength: 1000,
      },
      price: {
         type: Number,
         required: true,
         min: 0,
      },
      imageUrl: {
         type: String,
         required: true,
      },
      creatorId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
      },
   },
   { timestamps: true }
);

export const Course = mongoose.model('Course', courseSchema);
