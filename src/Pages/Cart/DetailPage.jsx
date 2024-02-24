import React, { useEffect, useRef, useState } from 'react'
import { products } from '../../JsonData/productsData'
import tableImg from "../../assests/table.jpg"
import Button from 'react-bootstrap/Button';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { add } from '../../store/sliceCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'



function DetailPage() {

  const [displayProduct, setDisplayProduct] = useState(null)
  const [showRelatedPro, setShowRelatedPro] = useState([])
  const cartData = useSelector(state => state.addCart)
  const navigate = useNavigate()
  const { id } = useParams()
  const dispatch = useDispatch()
  const topScroll = useRef(null)

  const scrollToBottom = () => {
    if(topScroll.current){
      topScroll.current.scrollIntoView({ behavior: 'smooth' });
    }
  
  };
  
  useEffect(() => {
    let foundProduct = products.find(product => product.id === id);
    console.log(foundProduct)
    if (foundProduct) {
      setDisplayProduct(foundProduct);
      const relatedProduct = products.filter((relatePro) =>
        (relatePro.category === foundProduct.category && relatePro.id !== foundProduct.id));
      console.log(relatedProduct)
      setShowRelatedPro(relatedProduct);

      scrollToBottom();
    }
  }, [id]);

  if (!displayProduct) {
    return <h5>Loading....</h5>
  }

  const handlePassData = (productId) => {
    navigate(`/detailpage/${productId}`)
  }

  const handleAddToCart=(item)=>{
    let assignQuantityData =[]
    let addQuantity =  cartData.filter((value)=>(
     value.id === item.id

    ))
    if(addQuantity.length>0){

     assignQuantityData=  cartData.map((value)=>{
          if(value.id === item.id){
            value.quantity = value.quantity ? value.quantity+1 : 2
          }
          return value
      })
    }
    dispatch(add(item))
    console.log(assignQuantityData)
  }
  return (
    <>
      <div className="container-fuild allBackground" ref={topScroll}>
        <div className='image-container'>
          <img src={tableImg} class="w-100" />
          <div className="row">
            <div className="col-md-12">
              <div className="overlay-text">
                <h3 className='text-light'>{displayProduct.productName}</h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card style={{ border: "none", padding: "0px" }}>
            <CardBody>
              <Container>
                <Row>
                  <Col md={6}>
                    <img src={displayProduct.imgUrl} width={380} />
                  </Col>
                  <Col md={6}>
                    <h3>{displayProduct.productName}</h3>
                    <div>
                      {displayProduct && displayProduct.reviews && displayProduct.reviews.length > 0 && displayProduct.reviews[0].rating && (
                        Array.from({ length: displayProduct.reviews[0].rating }, (_, i) => (
                          <span key={i} className='text-warning' style={{ fontSize: "20px" }}>&#9733;</span>
                        ))
                      )}
                      {displayProduct && displayProduct.reviews && displayProduct.reviews.length > 0 && displayProduct.reviews[0].rating ?
                        <span className='ms-5'>{displayProduct.reviews[0].rating}</span> : null
                      }
                    </div>
                    <div className='mt-3'>
                      <span style={{ fontSize: "25px" }}><b>${displayProduct.price}</b></span>
                      <span className='ms-5'>category{displayProduct.category}</span>
                    </div>
                    <div className='mt-4 mb-4'>
                      <p>{displayProduct.shortDesc}</p>
                    </div>
                    <div className='mb-3'>
                      <input type='number' className='detailpageInput' />
                    </div>
                    <div>
                      <Link to={'/cart'} style={{ textDecoration: "none", color: "#fff" }}>  <button className='btnAddTocart' onClick={() =>handleAddToCart(displayProduct) }>Add To Cart</button></Link>
                    </div>
                  </Col>

                </Row>
                <div className='' style={{ marginTop: "15%" }}>
                  <span style={{ fontSize: "18px", fontWeight: "600" }}>Description</span>
                  {displayProduct && displayProduct.reviews && displayProduct.reviews.length > 0 && displayProduct.reviews[0].rating ?
                    <span className='ms-2' style={{ fontSize: "14px", color: "gray" }}>Reviews({displayProduct.reviews[0].rating})</span> : null
                  }
                </div>
                <div className='mt-5'>
                  <p>{displayProduct.description}</p>
                </div>
              </Container>
            </CardBody>
          </Card>
          {/* ---------------------------- */}
          <Card style={{ border: "none", padding: "0px" }}>
            <CardBody>
              <div>
                <Container className='detaiPageContainer'>
                  <h4 className='text-left  mb-5 mt-5'><b>You might also like</b></h4>
                  <Row >
                    {showRelatedPro.map((relatedProduct, index) => (
                      <Col md={4} sm={6} xs={12} className="mb-4" key={index} >
                        <Card className='detailPageCard'>
                          <Card  onClick={() => handlePassData(relatedProduct.id)} style={{border:"none"}}>
                          <Card.Img variant="top" src={relatedProduct.imgUrl} className='detailPageImg mx-auto d-block' />
                          <Card.Body className='mt-5'>
                            <Card.Title><strong>{relatedProduct.productName}</strong></Card.Title>
                            {relatedProduct.reviews && relatedProduct.reviews.length > 0 && relatedProduct.reviews[0].rating && (
                              <Card.Text>
                                {Array.from({ length: relatedProduct.reviews[0].rating }, (_, i) => (
                                  <span key={i} className="text-warning" style={{ fontSize: "20px" }}>&#9733;</span>
                                ))}
                              </Card.Text>
                            )}
                           

                          </Card.Body>
                          </Card>
                          <CardBody>
                          <span>
                              <span style={{ fontSize: "20px" }}>
                                <b>${relatedProduct.price}</b>
                              </span>

                              <span style={{ float: "right" }}>
                                <Button variant="light" className='detailPageAddBtn'
                                 onClick={() => dispatch(add(relatedProduct))}>&#43;</Button>
                              </span>
                            </span>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </div>
            </CardBody>
          </Card>
          {/* --------------------- */}
        </div>
      </div>
    </>
  )
}

export default DetailPage