import mongoose from 'mongoose';
import validator from 'validator';

const adminSchema = new mongoose.Schema(
   {
      firstName: {
         type: String,
         required: true,
         minLength: 1,
         maxLength: 20,
         index: true,
      },
      lastName: {
         type: String,
         required: true,
         minLength: 1,
         maxLength: 20,
         index: true,
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true,
         trim: true,
         validate: {
            validator: validator.isEmail,
            message: 'Invalid email',
         },
      },
      password: {
         type: String,
         required: true,
         validate: {
            validator: validator.isStrongPassword,
            message: 'Password must be strong',
         },
      },
   },
   { timestamps: true }
);

export const Admin = mongoose.model('Admin', adminSchema);
