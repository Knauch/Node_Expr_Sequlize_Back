import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const ShowProducts = () => {

  const [products, setProducts] = useState([])

  //call API only 1 time we need to use useEffect
  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get('/api/products/allProducts')
      console.log(data)
      setProducts(data)
    }
    getProductsData()
  }, [])


  return (
    <>
      <Container className='justify-content-center m-5'>
        <h1 className='text-center'>Show All Products</h1>
        <hr />
        <Row>
          {
            products.map((product) => {
              return (
                <Col md={8} lg={12} sm={12} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              )
            })
          }
        </Row>

      </Container>


    </>
  )
}

export default ShowProducts