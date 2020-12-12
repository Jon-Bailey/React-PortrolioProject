import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';

function Recipe({ title, image, labels, calories }) {



    return(
        <Card className="col-md-3 mx-auto mt-5 p-0">
          <img
            className="card-img-top"
            src={image}
            alt=""
          />
          <CardBody className="card-body">
          <CardTitle><strong>{title}</strong></CardTitle>
            <p className="card-text"><strong>Health Facts:</strong>{labels}</p>
            <p className="card-text"><strong>Calories:</strong>{calories}</p>
          </CardBody>
        </Card>
        
    )

}

export default Recipe;