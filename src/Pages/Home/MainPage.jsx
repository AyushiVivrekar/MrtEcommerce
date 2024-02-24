import React, { useEffect, useState } from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { SliderData } from '../../JsonData/productsData';

function MainPage() {
    const [sliderData, setSliderData] = useState(SliderData)

    // useEffect(()=>{
    //    setSliderData();
    // },[])
    return (
        <>
            <div className='card mainPageCard'>
                <div className='card-body mainPageCardBody'>
                    <Carousel>
                        {
                            sliderData.map((sliderData, index) => (
                                <Carousel.Item key={index}>
                                    <Container>
                                        <Row className="align-items-center">
                                            <>
                                                <Col md={5}>
                                                    <h2><b>{sliderData.title}</b></h2>
                                                    <p>{sliderData.desc}</p>
                                                    <button className='visitBtn'>Visit Collections</button>
                                                </Col>
                                                <Col md={7} className="ms-auto">
                                                    <img
                                                        className="d-block carouselImg"
                                                        src={sliderData.cover}
                                                        alt="First slide"
                                                    />
                                                </Col>
                                            </>
                                        </Row>
                                    </Container>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>

                </div>
            </div>
        </>
    )
}

export default MainPage