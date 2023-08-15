import React, {Component} from  'react';
import HighScore from './highScore';

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
    if(this.state.count> 10 && this.state.count != state.count){
        console.log("Updating over ten");
        this.setState({overTen: true});
    }
}


render(){
    let {count}=this.state;
    return (
        <div>
        <h1> You clicked the button {count} times</h1>
      <HighScore 
        overTen={this.state.overTen}
      />

      
        <span>
            <button onClick={( ) => this.HandleClick()}> Click Me</button>



        </span>

        </div>
    );
}

}
export default Application;
