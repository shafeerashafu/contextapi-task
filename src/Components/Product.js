
 /* eslint-disable */ 
 import React from 'react';
import { Link } from 'react-router-dom';
import {Card,Row,Col,Button} from 'react-bootstrap';
import { ProductConsumer } from '../contextAPI';

const Product = ({product}) => {
    const {id,title,description,price,images,inCart}=product;
  return (
    <div className='col-9 mx-auto col-md col-lg-3'>
        <ProductConsumer>
            {(value)=>(
                <Card sx={{ maxWidth: 345 }}  className='card-container' style={{width:'18rem',height:'18rem'}}>
                    <Link to='/details'>
                        <Card.Img variant='top' src={images} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        {/* <Card.Text>{brand}</Card.Text>
                        <Card.Text>{rating}</Card.Text>
                        <Card.Text>{category}</Card.Text> */}
                    </Card.Body>
                    <Card.Footer>
                        <Row>
                            <Col>
                            <Button size="sm" disabled={inCart} onClick={()=>{value.addToCart(id)}} variant='secondary'>
                                {inCart === true ? (<span>In Cart</span>) : (<span>Add to Cart</span>)}
                            </Button>
                            </Col>
                            <Col>
                            <small className='text-muted text-right'>INR {price}</small>
                            </Col>
                        </Row>
                    </Card.Footer>
                </Card>
            )}
        </ProductConsumer>
    </div>
  )
}

export default Product;