import React, {Component} from  'react';


class Application extends Component {

    constructor(props){
        super(props);

       this.state = {
        count: 0,
        overTen: false
       }
    }
handleClick = () => {
    this.setState({count: this.state.count + 1});
}
componentDidUpdate(props, state){
    if(this.state.count> 10){
        this.setState({overTen: true});
    }
}


render(){
    let {count}=this.state;
    return (
        <div>
        <h1>You clicked the buutton {count} times</h1>
        <span>
            <button onClick={( ) => this.HandleClick()}> Click Me</button>



        </span>

        </div>
    );
}

}
export default Application;
