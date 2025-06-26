import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema(
   {
      userId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
      },
      courseId: {
         type: mongoose.Schema.Types.ObjectId,
         required: true,
      },
   },
   { timestamps: true }
);

export const Purchase = mongoose.model('Purchase', purchaseSchema);
