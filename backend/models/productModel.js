import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {type: 'string', required: true, unique: true},
  image: {type: 'string', required: true},
  brand: {type: 'string'},
  category: {type: 'string'},
  decription: {type: 'string'},
  price: {type: Number, required: true},
  stock: {type: Number, required: true},
  price: {type: Number, required: true},
},{
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;