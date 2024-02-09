import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'


const AddProduct = () => {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()

  const addProductHandler = async (event) => {
    
    event.preventDefault()

    const data = { 
      title: title,
      price: price,
      description: description,
      published: true
    }

    await axios.post('/api/products/addProduct', data)

    navigate('/products')
  }

  return (
    <Container className='justify-content-center mt-5 '>
      <h1 className='text-center'>Add Product</h1>
      <hr />
      <Form onSubmit={addProductHandler}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>
            Title
          </Form.Label>
          <Form.Control
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="price">
          <Form.Label>
            Price($)
          </Form.Label>
          <Form.Control
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            type="number" placeholder="$" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="description">
          <Form.Label>
            Description
          </Form.Label>
          <Form.Control
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            as='textarea' />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  )
}

export default AddProduct