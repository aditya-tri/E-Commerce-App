import bcrypt from "bcrypt";

const data = {
  users: [
    {
      name:'Aditya',
      email:'aditya@example.com',
      password: bcrypt.hashSync('aditya', 8),
      isAdmin: true,
    },
    {
      name:'ucok',
      email:'user@example.com',
      password: bcrypt.hashSync('aditya', 8),
      isAdmin: false,
    }
  ],
  products: [
    {
      image: 'https://cf.shopee.co.id/file/a1a9bc0c6e7c53b5e8e0204fb0a426fa',
      name: 'Aneeya Linen Cullote',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 90000
    },
    {
      image: 'https://cf.shopee.co.id/file/a1a9bc0c6e7c53b5e8e0204fb0a426fa',
      name: 'Tshirt Sunday Black',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 74000
    },
    {
      image: 'https://cf.shopee.co.id/file/f4ea844693bad43c08f3f015fbd90abb',
      name: 'Tshirt Mythology Black',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 70000
    },
    {
      image: 'https://cf.shopee.co.id/file/240912ab23f41a15372c74b1468ccbc5',
      name: 'Tshirt Vespa Black',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 120000
    },
    {
      image: 'https://cf.shopee.co.id/file/92873ba523d6d21a93bf92b7fd9cf70a',
      name: 'Tshirt Trapper Black',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 110000
    },
    {
      image: 'https://cf.shopee.co.id/file/5fab5528fb944c3dfc3935f8d353283b',
      name: 'Tshirt Pretty Rider Black',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 98000
    },
    {
      image: 'https://cf.shopee.co.id/file/f057ebd9d3712c9903803a7413873705',
      name: 'Tshirt Hollow Masked Black Tees',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 80000
    },
    {
      image: 'https://cf.shopee.co.id/file/8d3f9e3a5106c5aea69ec490b6fef98c',
      name: 'Tshirt Treat White',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 115000
    },
    {
      image: 'https://cf.shopee.co.id/file/a5d9dd86fbbfc00a063e6bcf281b11a6',
      name: 'Tshirt Dont Look New White',
      brand: '',
      description: '',
      category: '',
      stock: 100,
      stock_real: 80,
      price: 70000
    },
  ]
}
export default data;