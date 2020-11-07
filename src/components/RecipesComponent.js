import React, { Component } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';


class Recipes extends Component {
  
  render() {
  return (
    <div className="container-fluid py-5" id="cardsSection">
      <div className="row">
        <div className="col text-center">
          <h1 className="text-align-center">Breakfast</h1>
        </div>
      </div>
      <div className="row row-content">
        <Card card className=" mx-auto mt-5">
          <CardTitle className="text-white position-absolute pl-3 pt-3">{}</CardTitle>
          <img
            className="card-img-top"
            src="../images/meal1.png"
            alt="Card cap 1 "
          />
          <CardBody className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              earum.
            </p>
          </CardBody>
        </Card>
        <Card card className=" mx-auto mt-5">
          <CardTitle className="text-white position-absolute pl-3 pt-3">{}</CardTitle>
          <img
            className="card-img-top"
            src="../images/meal1.png"
            alt="Card cap 1 "
          />
          <CardBody className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              earum.
            </p>
          </CardBody>
        </Card>
        <Card card className=" mx-auto mt-5">
          <CardTitle className="text-white position-absolute pl-3 pt-3">{}</CardTitle>
          <img
            className="card-img-top"
            src="../images/meal1.png"
            alt="Card cap 1 "
          />
          <CardBody className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
              earum.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
    );
}
}

export default Recipes;