import { Box, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import {
  updateCategories,
  updateSearch,
  updatePriceRange,
  clearFilters,
} from '@/redux/filterSlice';
import Category from './../category';
import Search from './../search';
import Price from './../price';

const Filter: React.FC = () => {
  let products = useSelector((state: RootState) => state.products.products);

  const dispatch = useDispatch();

  const updateCategoriesHandler = (categories: Array<string>) => {
    dispatch(updateCategories(categories));
  };

  const updateSearchHandler = (text: string) => {
    dispatch(updateSearch(text));
  };

  const updatePriceRangeHandler = (price: Array<number>) => {
    dispatch(updatePriceRange(price));
  };

  const clearAll = () => {
    dispatch(clearFilters());
  };

  let categoriesName: string[] = Array.from(
    new Set(products.map((product) => product.category)),
  );

  return (
    <Box style={{ marginTop: '20px', textAlign: 'center' }}>
      <Search searchUpdate={updateSearchHandler} />
      <Category
        onHandleChange={updateCategoriesHandler}
        categoryList={categoriesName}
      />
      <Price onHandleChange={updatePriceRangeHandler} />
      <Button onClick={clearAll}>Clear All</Button>
    </Box>
  );
};

export default Filter;
