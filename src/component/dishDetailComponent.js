import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const DishDetail = ({ id, image, name, description, comments }) => {
  const RenderComments = ({ comments, dishId }) => {
    if (comments !== null) {
      const com = comments.map((commen) => {
        return (
          <div>
            <li>{commen.comment}</li>
            <br />
            <li>
              --{commen.author}, {commen.date}
            </li>
            <br />
          </div>
        );
      });
      return (
        <ul key={dishId} className="list-unstyled">
          {com}
        </ul>
      );
    } else {
      return <div></div>;
    }
  };

  const RenderDish = ({ id, image, name, description, comments }) => {
    if (id !== null) {
      return (
        <div key={id} className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>
                <CardImg width="100%" src={image} alt={name} />
                <CardBody>
                  <CardTitle>{name}</CardTitle>
                  <CardText>{description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>

              <RenderComments comments={comments} dishId={id} />
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return (
    <>
      <RenderDish
        id={id}
        name={name}
        image={image}
        description={description}
        comments={comments}
      />
    </>
  );
};

export default DishDetail;
