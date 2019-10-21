import React from 'react';
import './Counter.css';

class Counter extends React.Component{
constructor(props){
    super(props);
    this.state = {number : 0};
}
    render(){
        return(
            <div className='Counter'>
                <button 
                onClick={()=>{
                    this.setState({number : this.state.number-=1}); 
                    this.props.onCounterValueChange(-1);
                    }
                    }>-</button>
                <span>{this.state.number}</span>
                <button onClick={()=>{
                    this.setState({number : this.state.number+=1});
                    this.props.onCounterValueChange(1);
                }
                }>+</button>
            </div>
        );
    }
}
export default Counter