import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardBody, Col, Container, Row } from 'react-bootstrap';
import { products } from '../../JsonData/productsData'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../../store/sliceCart';

function BestSales() {
    const [bestSalesData, setBestSalesData] = useState(products)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const filterBestSales = () => {
        const getDataBestSales = bestSalesData;
        const filterBestSalesData = getDataBestSales.filter((value) => (
            value.category === "sofa"
        ))
        setBestSalesData(filterBestSalesData)
    }

    useEffect(() => {
        filterBestSales()
    }, [])

    const handlePassData = (productId) => {
        navigate(`/detailpage/${productId}`)
    }
    return (
        <>
            <Card className='bestSalesBackground'>
                <CardBody>
                    <div>
                        <Container>
                            <h4 className='text-center  mb-5 mt-5'><b>Best Sales</b></h4>
                            <Row >
                                {
                                    bestSalesData.map((bestsaleData, index) => (
                                        <Col xs={12} sm={6} md={4} lg={4} className="mb-4" key={index} >
                                            <Card className=' bestSalesCard ' >
                                             <Card onClick={() => handlePassData(bestsaleData.id)} style={{border:"none"}}>
                                             <Card.Img variant="top" src={bestsaleData.imgUrl} className='bestSalesImg mx-auto d-block' />
                                                <Card.Body className='mt-5'>
                                                    <Card.Title><strong>{bestsaleData.productName}</strong></Card.Title>
                                                    <Card.Text>{Array.from({ length: bestsaleData.reviews[0].rating }, (_, i) => (
                                                        <span key={i} className="text-warning" style={{ fontSize: "20px" }}>&#9733;</span>
                                                    ))}</Card.Text>
                                                   
                                                </Card.Body>
                                             </Card>
                                                <CardBody>
                                                <span>
                                                        <span style={{ fontSize: "20px" }}>
                                                            <b>${bestsaleData.price}</b>
                                                        </span>
                                                        <span style={{ float: "right" }}>
                                                            <Button variant="light" className='bestSalesAddBtn' onClick={() => dispatch(add(bestsaleData))}>&#43;</Button>
                                                        </span>
                                                    </span>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </div>

                </CardBody>
            </Card>
        </>
    )
}

export default BestSales