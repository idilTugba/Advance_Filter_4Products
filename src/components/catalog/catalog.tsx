import { Grid } from '@mui/material'
import React from 'react'
import Product from './product'

const Catalog = () => {
  return (
    <div className='w-full p-4'>
      <Grid container direction="row" spacing={2} >
        <Product />
      </Grid>
    </div>
  )
}

export default Catalog
