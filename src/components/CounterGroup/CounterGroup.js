import React from 'react';
import Counter from '../Counter/Counter'
import './CounterGroup.css'

class CounterGroup extends React.Component{
constructor(props){
    super(props);
    this.state = {
        count : this.props.defaultCount,
        inputValue : this.props.defaultCount,
        sum : 0
    };
}
    renderCounter = () =>{
        let counters = []
        for(let num = 0; num < this.state.count; num++){
            counters.push(
                <Counter
                key={num}
                onCounterValueChange = {this.counterUpdateCallback}
                />
            );
       }
       return counters;
    } 
    regenerateCounter = () =>{
        this.setState({count : this.state.inputValue});
    }
    handleChange = (event) =>{
        this.setState({inputValue : event.target.value});
    }
    counterUpdateCallback = (changeNum)=>{
        this.setState({sum : this.state.sum+changeNum})
    }
    render(){
        let counters = this.renderCounter();
        return(
            <div className='counter-group'>
                <div className='regenerate'>
                    <input type='text' value = {this.state.inputValue} onChange={this.handleChange}/>
                    <button onClick={this.regenerateCounter}>Regenerate Counter</button>
                    <span>Sum : {this.state.sum}</span>
                    {counters}
                </div>
            </div>
        );
    }
}

export default CounterGroup