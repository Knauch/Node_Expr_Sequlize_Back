import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const ProductDetail = () => {

  const { id } = useParams()

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    const getSingleProductData = async () => {
      const { data } = await axios.get(`/api/products/${id}`)

      setTitle(data.title)
      setPrice(data.price)
      setDescription(data.description)

    }
    getSingleProductData()
  }, [id])

  const handleDelete = async (id) => {

    await axios.delete(`/api/products/${id}`)

    navigate('/products')
  }

  return (
    <>
      <h1 className='text-center mt-5'>Product Details</h1>
      <hr />

      <Card className='shadow-lg m-5 p-3 rounded' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Product Name:  {title}</Card.Title>
          <Card.Title> Price $: {price}</Card.Title>
          <Card.Text>
            Description: {description}
          </Card.Text>
        </Card.Body>
        <div className="d-flex flex-column ">
          <Link to={`/ product / edit / ${ id }`}>
            <Button className='mb-3 w-50'>Edit</Button>
          </Link>
          <Link to={`/ product / ${ id }`}>
            <Button 
            className='w-50 ' 
            variant="danger" 
            onClick={() => handleDelete(id)}
            >Delete</Button>
          </Link>

        </div>
      </Card>
    </>
  )
}

export default ProductDetail