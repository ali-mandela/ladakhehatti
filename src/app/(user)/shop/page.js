import Container from '@/components/Layout'
import Products from '@/components/Products'
import ShopHeader from '@/components/ShopHeader'
import { ProductItems2 } from '@/shared/itemsSlider';
import React from 'react';


const page = () => {
  return (
    <Container>
      <ShopHeader/>
      <Products title="" data={ProductItems2}/>
    </Container>
  )
}

export default page