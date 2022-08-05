import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom';
function Product({ product }) {
  return (
    <Card className = "mt-3">
        <Link className ="m-3 rounded h-50" to ={`/product/${product._id}`}>
          <Card.Img className = "h-50" variant="top" src={product.image} />
        </Link>
        <Card.Body className ="">
          <Link  className = "productName" to = {`/product/${product._id}`}>
              <Card.Title as ="div">
                  <p>{product.name}</p>
              </Card.Title>
          </Link>
          <Card.Text as ="div">
         
              <Rating value = {product.rating} color ={'green'}/>
              {`${product.numReviews} reviews `}
              <Card.Text className= "text-danger" as ="p">
              Price : ${product.price}
          </Card.Text>

            

          </Card.Text>
             
        </Card.Body>

    </Card>

  )
}

export default Product