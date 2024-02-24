import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, CardBody } from 'react-bootstrap';
import { serviceData } from '../../JsonData/productsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCreditCard, faHeadphones, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const ServiceDataCards = () => {
  const [service, setService] = useState(serviceData);
  const icons = [faCar, faCreditCard, faShieldHalved, faHeadphones];

  return (
    <Card style={{ border: "none" }}>
      <CardBody>
        <Container className="text-center mt-5 mb-5">
          <Row className="justify-content-center mt-4">
            {service.map((serData, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                <Card className="text-black cardService" style={{ backgroundColor: serData.bg }}>
                  <Card.Body>
                    <FontAwesomeIcon icon={icons[index]} className='serviceIcons' />
                    <Card.Title class="line-spacing"><b>{serData.title}</b></Card.Title>
                    <Card.Text class="line-spacing">{serData.subtitle}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};

export default ServiceDataCards;
