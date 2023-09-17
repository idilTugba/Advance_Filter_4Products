import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  brand: string;
  image: string;
    price : number;
}

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchedProducts = createAsyncThunk<Product[], void>('products/getProducts', async () => {
    try {
        const res = await axios('https://fakestoreapi.com/products');
        const data: Product[] = res.data;
        return data
      } catch (error) {
        throw error;
      }
})


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchedProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchedProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchedProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'API error occurred';
      });
  },
});

export default productSlice.reducer;