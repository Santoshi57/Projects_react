import React, {Component} from  'react';


class Application extends Component {

    constructor(props){
        super(props);
    }
    componentWillMount(props, state){

    }
    componentDidMount(props,state){
        console.log("Mounted with",props, state);
    }
    ComponentWillReceiveProps(props){

    }
    componentWillUpdate(props, state){
        if(this.props.name!== props.name){
            //do something
        }
    }
    componentDidUpdate(props, state){
        
    }





render(){
    let name="Santoshi";
    return (
        <div>
        <h1>Hello, World!!!</h1>
        <span>This</span>

        </div>
    );
}

}
export default Application;
