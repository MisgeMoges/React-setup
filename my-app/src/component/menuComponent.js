import React,{Component} from "react";
import DishDetail from "./dishDetailComponent";
class Menu extends Component{
    constructor(props){
        super(props)

        this.state = {
            dishes: this.state.dishes,
            comments: this.state.comments,
        };
    }



 render(){
    return(
      
        <DishDetail dish={this.props.dishes.dishes}
        comments ={this.props.comments.comments}/>
        );
    }
 

}



export default Menu;