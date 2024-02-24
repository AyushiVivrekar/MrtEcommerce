// import { faCartFlatbedEmpty } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Container, Row, Button, CloseButton } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../../store/sliceCart'


const CartItem = () => {
    const cartData = useSelector(state => state.addCart)
    // const [allCartData, setAllCartData] = useState(cartData.map(item => ({ ...item, count: 1 })));
    const [count, setCount] = useState(1)
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();


       const increaseCount=(index)=>{
        if(index.id !== cartData[0].id){
            setCount(count+1)
        }
       
      
   }
   
   const decreaseCount =(e, index)=>{
    if(count>1){
        setCount(count -1)
      
    }
   }
   

   useEffect(() => {

    const totalPrice = cartData.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(totalPrice);
}, [cartData]);

    return (
        <>
        <Card style={{ background: "rgba(242, 247, 252, 0.842)", border: "none" }} className='pt-5'>
           <CardBody>
                <Container>
                    <Row>
                    {cartData.length>0 ?
                    cartData.map((showDataCart, index)=>(
                            <>
                            <Col md={8} sm={6} xs={12} key={index}>
                                <Card className="mb-3" style={{ border: "none", background: "#fff" }}>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col md={3} sm={6} xs={12}>
                                                <Card.Img variant="top" src={showDataCart.imgUrl} className='mx-auto d-block' />
                                                </Col>
                                                <Col md={7}>
                                                <div >
                                                <Card.Title className='mt-4'><b>{showDataCart.productName}</b></Card.Title>
                                                   <Card.Text style={{lineHeight:"90px"}}>
                                               <span style={{color:"gray"}}>${showDataCart.price} *{count}</span> <span><b>${showDataCart.price * count}</b></span>
                                       </Card.Text>
                                                </div>
                                            
                                                </Col>
                                                <Col md={2} sm={6} xs={12}>
                                                  <div>
                                                  <CloseButton  onClick={()=>dispatch(remove(showDataCart.id))}/>
                                                  </div>
                                                   <div style={{lineHeight:"130px"}}>
                                                   <Button className='btn btn-light me-1' onClick={()=>increaseCount(showDataCart.id)} style={{color:"rgb(24, 24, 72)", border:"1px solid rgb(192, 191, 191)"}}>+</Button>
                                                    <Button className='btn btn-light' onClick={()=>decreaseCount(showDataCart.id)} style={{background:"rgba(239, 242, 245, 0.545)"}}>-</Button>
                                                   </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>

                                </Card>
                            </Col>
                            
                            <Col md={4}>
                            <Card style={{ border: "none", background: "#fff" }}>
                                <Card.Body>
                                    <Card.Title className="text-center">Cart Summary</Card.Title>
                                    <hr style={{ color: "gray" }}></hr>
                                    <Card.Text>
                                        <p>Total Price :</p>
                                        <h5>${totalPrice.toFixed(2)}</h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                           
                     
                            </>
                    ))
                

                        :       
                        <div className='text-center'>
                        <h1 className='pt-4 pb-5'>Cart Is Empty</h1>
                     
                    </div>
                    
                    }
                    </Row>
                    </Container>
                </CardBody>
            </Card>
        </>
    )
}

export default CartItem