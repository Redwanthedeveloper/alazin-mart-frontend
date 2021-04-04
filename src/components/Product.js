import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';

const Product = ({ product, buyHandler }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as='div' className='my-3'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        {/* <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text> */}

        <Row className='d-flex align-items-center'>
          <Col>
            <Card.Text as='h4'>
              <strong>${product.price}</strong>
            </Card.Text>
          </Col>
          <Col>
            <Button
              className='btn btn-primary buy__btn'
              onClick={() => buyHandler(product._id, 1)}
            >
              Buy Now
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Product;
