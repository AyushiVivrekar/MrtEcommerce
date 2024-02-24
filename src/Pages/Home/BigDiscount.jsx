import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardBody, Col, Container, Row } from 'react-bootstrap';
import { discoutProducts } from '../../JsonData/productsData';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../store/sliceCart';

function BigDiscount() {
  const [bigDiscountData, setBigDiscountData] = useState(discoutProducts)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handlePassData = (productId) => {
    navigate(`/detailpage/${productId}`);
    return { handlePassData };
  }
  return (
    <>
      <div className='bigDicBackground '>
        <Container className="mt-5 pb-5">

          <h4 className="text-center mb-5 pt-5"><b>Big Discount</b></h4>
          <Row>
            {bigDiscountData.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4} className="mb-3">
                <Card className="big-discount-card">
                  <Button className="bigDisDiscountBtn">{product.discount}% Off</Button>
                  <Card.Img variant="top" src={product.imgUrl} className="big-discount-img" onClick={() => handlePassData(product.id)} />
                  <CardBody>
                    <Card.Title className="text-dark">{product.productName}</Card.Title>
                    <div className="rating">
                      {Array.from({ length: product.reviews[0].rating }, (_, i) => (
                        <span key={i} className="text-warning">&#9733;</span>
                      ))}
                    </div>
                    <div className="price-btn-container mt-3 d-flex justify-content-between align-items-center">
                      <span className="price-bigDis"><h5><strong>${product.price}</strong></h5></span>
                      <Button variant="light" className="add-to-cart-btn" onClick={() => dispatch(add(product))}>
                        &#43;
                      </Button>
                    </div>
                  </CardBody>

                </Card>
              </Col>
            ))}
          </Row>

        </Container>
      </div>
    </>
  )
}

export default BigDiscount