import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Recipe({ title, image, labels, calories }) {



    return(
        <Card className="col-md-5 mx-auto mt-5 p-0">
          <CardTitle className="text-white position-absolute pl-3 pt-3">{title}</CardTitle>
          <img
            className="card-img-top"
            src={image}
            alt=""
          />
          <CardBody className="card-body">
            <p className="card-text"><strong>Health Facts:</strong>{labels}</p>
            <p className="card-text"><strong>Calories:</strong>{calories}</p>
          </CardBody>
        </Card>
    )

}

export default Recipe;