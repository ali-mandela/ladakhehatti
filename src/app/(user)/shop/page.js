import Container from '@/components/Layout'
import Products from '@/components/Products'
import ShopHeader from '@/components/ShopHeader'
import React from 'react'

const page = () => {
  return (
    <Container>
      <ShopHeader/>
      <Products/>
    </Container>
  )
}

export default page