import React from 'react';
import { Button, Divider, Box, Drawer, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Filter from './filter';
import { styled, useTheme } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const SideBar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ position: 'relative', margin: '20px' }}>
        <input
          disabled
          onClick={handleDrawerOpen}
          aria-label="open drawer"
          placeholder="SEARCH AND FILTER PRODUCTS"
          className="w-[400px] pl-[50px] py-4"
          type="text"
        />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            position: 'absolute',
            left: '20px',
            top: '10px',
            mr: 2,
            ...(open && { display: 'none' }),
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 350,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Filter />
      </Drawer>
    </>
  );
};

export default SideBar;
