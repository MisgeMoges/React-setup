import React, {Component} from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from "reactstrap";



const DishDetail = ({dish,comments})=>{
  
    const RenderComments =({comments,dishId}) =>{
    
        if (comments!=null)
        {
            const com = comments.map(commen=>{
                    
                    return(
                   <div>
                     <li>{commen.comment}</li><br />
                     <li>-- {commen.author}, {commen.date}</li><br />
                   </div>
                   
                )
                    
                }
                );
            return(
                <ul className="list-unstyled">
                {com}
                </ul>
                
            )
        }
        else{
            return(<div></div>)
        }
    }
    
    const RenderDish=({dish,comments})=>
    {
        if (dish!=null)
        {
            return(
            <div className="container">
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </div>
            <div className="col-12 col-md-5 m-1" >
            <h4>Comments</h4>
            
            <RenderComments comments={comments}
            dishId={dish.id}/>    
            </div>
            </div>
            </div >
            )
        }
        else{
            return(<div></div>)
        }
    }
    
    }
    
    
export default DishDetail;