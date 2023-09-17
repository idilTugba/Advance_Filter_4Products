import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchedProducts } from '@/redux/productSlice';
import { RootState, AppDispatch } from '@/redux/store';
import { selectFilteredProducts } from '@/redux/selector';

const Product = () => {
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);
  let filteredProducts = useSelector(selectFilteredProducts);

  useEffect(() => {
    dispatch(fetchedProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((item) => (
          <Grid key={item.id} item md={3} xs={6} sx={{ overflow: 'hidden' }}>
            <Box
              sx={{ width: '100%', height: 200, overflow: 'hidden' }}
              component="img"
              src={item.image}
              style={{ objectFit: 'cover' }}
            />
            <Typography variant="h6">{item.title}</Typography>
            <Typography sx={{ color: 'red' }} variant="h5">
              $ {item.price}
            </Typography>
            <Typography variant="body2" sx={{ textOverflow: 'ellipsis' }}>
              {item.description.length > 100
                ? item.description.slice(0, 100) + '...'
                : item.description}
            </Typography>
            <Button
              sx={{
                border: 1,
                borderRadius: '5px',
                borderColor: '#1976d2',
                mt: '5px',
              }}
            >
              Buy
            </Button>
          </Grid>
        ))
      ) : (
        <p>No products found with given filters.</p>
      )}
    </>
  );
};

export default Product;
