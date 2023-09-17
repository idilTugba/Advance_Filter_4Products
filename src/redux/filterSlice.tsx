import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFilterData {
  categories: Array<string>;
  searchText: string;
  price: Array<number>;
}

const initialState: IFilterData = {
  categories: [],
  searchText: '',
  price: [0, 1000],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateCategories: (state, action: PayloadAction<Array<string>>) => {
      state.categories = action.payload;
    },
    updateSearch: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    updatePriceRange: (state, action: PayloadAction<Array<number>>) => {
      state.price = action.payload;
    },
    clearFilters: (state) => {
      state.categories = [];
      state.searchText = '';
      state.price = [0, 1000];
    },
  },
});

export const {
  updateCategories,
  updateSearch,
  updatePriceRange,
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
