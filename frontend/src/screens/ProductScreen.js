import React, { useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Button, Card ,Form} from 'react-bootstrap'
import  {listProductDetails}  from '../actions/productActions'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'

function ProductScreen({match,history}) {
    const[qty ,setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails


    useEffect(()=>{ 
        dispatch(listProductDetails(match.params.id))
      } ,[dispatch, match])
    

      const addToCartHandler =()=>{

        history.push(`/cart/${match.params.id}? qty =${qty}`)
        console.log("add to cart",qty)
      }

  return (
    <div>
    
         <Link to = "/" className ="btn btn-light my-3">Go Back</Link>
         {loading
         ? <Loader />
         :error
         ? <Message variant ='danger'>{error}</Message>
         :(
            <Row >
                <Col  sm ={12} md={7} lg={6} xl={7} >
                    <Image src = {product.image} alt ={product.name} fluid rounded />              
                    
                </Col>
                <Col sm ={12} md={5}  lg={6} xl={5}>
                    <ListGroup variant ="flush">
                        <ListGroup.Item>
                            <h3 className = "productName">{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value ={product.rating} text = {`${product.numReviews} reviews`} color ={'#f8e825'} />
                        </ListGroup.Item>

                        <ListGroup.Item className = "text-danger b">
                           Price : ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description : {product.description}
                        </ListGroup.Item>


                    </ListGroup>
                    <Row>
                        <Col md={12} sm ={12}>
                            <Card>
                                <ListGroup variant = "flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price :</Col>
                                            <Col>
                                                <strong>${product.price}</strong>
                                            
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>


                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status :</Col>
                                            <Col>
                                                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                                            
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                        <Row>
                                            <Col>Qty :</Col>
                                            <Col>
                                                <select
                                                className = "w-50  rounded"
                                                value ={qty}
                                                onChange = {(e) => setQty(e.target.value)}
                                                >
                                                    {
                                                        [...Array(product.countInStock).keys()].map((x) => (
                                                            <option key = {x+1} value ={x+1}>
                                                                {x+1}
                                                            </option>
                                                        ))
                                                    }
                                                </select>                
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>

                                    )}

                                    <ListGroup.Item>
                                        <Button 
                                        onClick={addToCartHandler}
                                        className = "btn btn-gray w-100" 
                                        disabled = {product.countInStock === 0} 
                                        type ="button"
                                        >
                                            Add to Cart
                                        </Button>
                                    </ListGroup.Item>

                                </ListGroup>
                            </Card>

                        </Col>
                    </Row>
                </Col>


            </Row>

         )}

         
    
    </div>
  )
}

export default ProductScreen