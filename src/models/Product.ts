import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
  name: string;
  price: number;
  description?: string;
  quantity: number;
  category: string;
}

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  quantity: { type: Number, required: true },
  category: { type: String, required: true },
},
  { timestamps: true }
);

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
