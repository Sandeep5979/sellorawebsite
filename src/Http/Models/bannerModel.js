import mongoose from 'mongoose';

const { Schema } = mongoose;  

// Define the category schema
const bannerSchema = new Schema(
  {
    
    title: {
      type: String,
      required: true, // 'name' is a required field
    },
    subtitle: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    url: {
      type: String,
    },
    
    photo: {
      type: String, // 'photo' will hold a string (e.g., URL or file path)
      required: true, // Optional field
    },
    status: {
      type: String,
      enum: ['Active', 'Deactive'], // Only these values are allowed
      default: 'Active', // Default to 'Active' if not specified
    },
    
  
  },
  { timestamps: true } // Automatically adds 'createdAt' and 'updatedAt' fields
);

// Export the model, creating it if it doesn't exist already
export const Banner = mongoose.models.Banner || mongoose.model('Banner', bannerSchema);