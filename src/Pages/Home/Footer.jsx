import React from 'react';
import { Card, CardBody, Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <Card className="blockcode shadow">
      <CardBody>
        <footer className="page-footer pt-4 pb-4">
          <Container>
            <Row>
              <Col md={3} xs={12}>
                <div className='mb-5'>
                  <span href="/#" className="d-flex align-items-center p-0 text-light" style={{ listStyle: "none" }}>
                    <span><i className="fa fa-duotone fa-suitcase mb-4"></i></span>
                    <span className="ms-3 h5 font-weight-bold mb-3">MART</span>
                  </span>
                  <span className=" mt-5" style={{ maxWidth: "250px" }}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex quas veritatis nobis, et eligendi odit harum cumque ea similique, vero eaque, reiciendis cupiditate eum consequuntur. Architecto corrupti earum odio soluta.
                  </span>
                </div>
              </Col>
              <Col md={3} xs={6}>
                <div>
                  <p className="h5 mb-4" style={{ fontWeight: "600" }}>About Us</p>
                  <ul className="p-1 footerList" style={{ listStyle: "none", cursor: "pointer" }}>
                    <li className="my-2">
                      <a className="" href="/">Careers</a>
                    </li>
                    <li className="my-2">
                      <a className="" href="/">Our Stores</a>
                    </li>
                    <li className="my-2">
                      <a className="" href="/">Our Cares</a>
                    </li>
                    <li className="my-2"><a className="" href="/">Terms & Conditions</a></li>
                    <li className="my-2">
                      <a className="" href="/">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={3} xs={6}>
                <div>
                  <p className="h5 mb-4" style={{ fontWeight: "600" }}>Customer Care</p>
                  <ul className="p-1 footerList" style={{ listStyle: "none", cursor: "pointer" }}>
                    <li className="my-2">
                      <a className="" href="/" style={{ textDecoration: "none" }}>Help Center</a>
                    </li>
                    <li className="my-2">
                      <a className="" href="/">How to Buy</a>
                    </li>
                    <li className="my-2">
                      <a className="" href="/">Track Your Order</a>
                    </li>
                    <li className="my-2">
                      <a className="" href="/">Corporate & Bulk Purchasing</a>
                    </li>
                    <li className="my-2">
                      <a className="" href="/">Returns & Refunds</a>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col md={3} xs={12}>
                <div>
                  <p className="h5 mb-4" style={{ fontWeight: "600" }}>Contact Us</p>
                  <ul className="p-1 footerList" style={{ listStyle: "none", cursor: "pointer" }}>
                    <li className="my-2">
                      <a className="" href="/">70 Washington Square South, New York, NY 10012, United States</a>
                    </li>
                    <li className="my-2">
                      <a className="" href="/">Email: ayushi@gmail.com</a>
                    </li>
                    <li className="my-2">
                      <a className="" href="/">Phone: +1 1123 456 780</a>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </CardBody>
    </Card>
  );
}

export default Footer;
