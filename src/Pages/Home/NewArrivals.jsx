import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import { CardBody, Col, Container, Row } from 'react-bootstrap';
import { products } from '../../JsonData/productsData'
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { add } from '../../store/sliceCart';



function NewArrivals() {
    const [newArrivalData, setNewArrivalData] = useState(products)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const filterNewArrivalData = () => {
      const arrivalsData = newArrivalData
    //   console.log(arrivalsData)
        const arrivalsDataNew = arrivalsData.filter((value)=>(
         value.category ==="mobile" || value.category ==="wireless"

        ))
        setNewArrivalData(arrivalsDataNew)
    }
    useEffect(()=>{
        filterNewArrivalData()
    },[])
    
    const handlePassData=(productId)=>{
        navigate(`/detailpage/${productId}`);
        return { handlePassData };
      }
    return (
        <>
         <Card className='newArrivalBackground'>
            <CardBody>
            <Container>
                <h4 className='text-center  mb-5 mt-5'><b>New Arrivals</b></h4>
                <Row >
                    {
                      newArrivalData.map((newArrivData, index) => (
                            <Col  xs={12} sm={6} md={4} className="mb-4 justify-content-center" key={index} >
                                <Card className='newArrivalCard' 
                               >
                                  <Card onClick={()=>handlePassData(newArrivData.id)} style={{border:"none"}}>
                                  <Card.Img variant="top" src={newArrivData.imgUrl} className='newArrivalImg mx-auto d-block' />
                                    <Card.Body>
                                        <Card.Title><p className='text-dark mt-5'>{newArrivData.productName}</p></Card.Title>
                                        <Card.Text>{Array.from({ length: newArrivData.reviews[0].rating }, (_, i) => (
                                            <span key={i} className="text-warning" style={{fontSize:"20px"}}>&#9733;</span>
                                        ))}</Card.Text>
                                             
                                    </Card.Body>
                                  </Card>
                                    <CardBody>
                                    <span>
                                              <span style={{fontSize:"20px"}}>
                                                   <b>${newArrivData.price}</b>
                                                </span>
                                             
                                                <span style={{float:"right"}}>
                                                <Button variant="light" className='newArrivalAddBtn' onClick={() => dispatch(add(newArrivData))}>&#43;</Button>
                                                </span>
                                                </span>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            </CardBody>
           </Card>
        </>
    )
}

export default NewArrivals