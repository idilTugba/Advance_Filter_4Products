import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

export const selectFilteredProducts = createSelector(
  (state: RootState) => state.filter,
  (state: RootState) => state.products.products,
  (filters, products) => {
    let filteredProducts = products;

    // Kategori filtrelemesi
    if (filters.categories.length) {
      filteredProducts = filteredProducts.filter((product) =>
        filters.categories.includes(product.category),
      );
    }

    // Fiyat filtrelemesi
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= filters.price[0] && product.price <= filters.price[1],
    );

    // Arama metni filtrelemesi
    if (filters.searchText) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(filters.searchText.toLowerCase()),
      );
    }

    return filteredProducts;
  },
);
