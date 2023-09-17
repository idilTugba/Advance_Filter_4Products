import { Box, Slider, Typography } from '@mui/material';
import React from 'react';

function priceText(value: number) {
  return `$ ${value}`;
}

const PriceFilterSearch = ({
  onHandleChange,
}: {
  onHandleChange: (updateRange: Array<number>) => void;
}) => {
  const [price, setPrice] = React.useState<number[]>([20, 37]);

  const handleChange = (event: Event, newPrice: number | number[]) => {
    setPrice(newPrice as number[]);
  };

  const handleOnDrag = () => {
    onHandleChange(price as Array<number>);
  };

  return (
    <Box
      sx={{
        width: 300,
        marginTop: '20px',
        display: 'inline-block',
        marginBottom: '20px',
      }}
    >
      <Typography sx={{ textAlign: 'right' }} variant="h6">
        PRICE
      </Typography>

      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={price}
        min={0}
        step={100}
        max={1000}
        onChange={handleChange}
        valueLabelDisplay="on"
        getAriaValueText={priceText}
        onChangeCommitted={handleOnDrag}
      />
    </Box>
  );
};

export default PriceFilterSearch;
