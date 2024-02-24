import React, { useState, useEffect } from 'react'
import tableImg from "../../assests/table.jpg"
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { products } from '../../JsonData/productsData'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function ShoppingPage() {
  const [shoppingData, setShoppingData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('sofa');
  const [searchResult, setSearchResult] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredItems = products.filter((item) => item.category === selectedCategory);
    setShoppingData(filteredItems);
  }, [selectedCategory]);

  const handleDataClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (value) => {
    value = value.toLowerCase().trim();
    if (value) {
      const filterValue = products.filter((v) => (
        v.productName.toLowerCase().trim().includes(value) || v.category.toLowerCase().trim().includes(value)
      ));
      setShoppingData(filterValue);
      setSearchResult(filterValue.length > 0);
    } else {
      setShoppingData(products);
      setSearchResult(true);
    }
  };

  const handlePassData = (productId) => {
    navigate(`/detailpage/${productId}`);
  };

  return (
    <>
      <div className="container-fuild allBackground">
        <div className='image-container'>
          <img src={tableImg} class="w-100" />
          <div className="row">
            <div className="col-md-12">
              <div className="overlay-text">
                <h3 className='text-light'>Products</h3>
              </div>
            </div>
          </div>
        </div>
        <div >
          <Card style={{ border: "none", padding: "0px" }}>
            <CardBody>
              <Container>
                <Row className='d-flex justify-content-between align-items-center'>
                  <Col md={4} sm={6}>
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic" className='dropdownBackground'>
                      Filter By Catagory | {selectedCategory ? selectedCategory : "Filter By Catagory |All"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item href="" active value="sofa" onClick={(e) => handleDataClick("sofa")}>Sofa</Dropdown.Item>
                        <Dropdown.Item href="" value="chair" onClick={(e) => handleDataClick("chair")}>Chair</Dropdown.Item>
                        <Dropdown.Item href="#" value="watch" onClick={(e) => handleDataClick("watch")}>Watch</Dropdown.Item>
                        <Dropdown.Item href="" value="mobile" onClick={(e) => handleDataClick("mobile")}>Mobile</Dropdown.Item>
                        <Dropdown.Item href="" value="wireless" onClick={(e) => handleDataClick("wireless")}>Wireless</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                  <Col md={8} sm={6}>
                    <form >
                    <span className='d-flex justify-content-between align-items-center'>
                      <input type='text' className='form-control shoopingPageSearch' placeholder='Search' onChange={(e) => handleSearch(e.target.value)}
                      />
                     <FontAwesomeIcon icon={faSearch}  className="search-icon"/></span>
                    </form>
                  </Col>
                </Row>
                <Container className='mt-5 pe-5 ps-5'>
                  <Row>
                    {
                      searchResult ?
                        shoppingData.map((shopData, index) => (
                          <Col md={4} sm={6} xs={12} className="mb-4" key={index}>
                            <Card className='shopPageCard' onClick={() => handlePassData(shopData.id)}>
                              <Card.Img variant="top" src={shopData.imgUrl} className='shopPageImg mx-auto d-block' />
                              <Card.Body className='mt-5'>
                                <Card.Title><strong>{shopData.productName}</strong></Card.Title>
                                <Card.Text>{Array.from({ length: shopData.reviews[0].rating }, (_, i) => (
                                  <span key={i} className="text-warning" style={{ fontSize: "20px" }}>&#9733;</span>
                                ))}</Card.Text>
                                <span>
                                  <span style={{ fontSize: "20px" }}>
                                    <b>${shopData.price}</b>
                                  </span>

                                  <span style={{ float: "right" }}>
                                    <Button variant="light" className='shopPageAddBtn'>&#43;</Button>
                                  </span>
                                </span>
                              </Card.Body>
                            </Card>
                          </Col>
                        )) : <h2 className='text-center'>Product Not Found!!</h2>
                    }
                  </Row>
                </Container>
              </Container>
            </CardBody>
          </Card>
        </div>

      </div>
    </>
  )
}

export default ShoppingPage