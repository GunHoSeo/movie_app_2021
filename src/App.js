import React from 'react';

class App extends React.Component{
  constructor(prop){
    super(prop);
    console.log('ddddddfasdfasdf');
  }
 
  state = {
  count : 0,
 };

 add = () =>{this.setState(current =>({count:current.count+1,}))};
 minus = () =>{this.setState(current =>({count:current.count-1,}))};

componentDidMount(){
  console.log('component did mount');
}

componentDidUpdate(){
  console.log('component did update');
}

componentDidUpdate(){
  console.log('component did update');
}

 render(){
   console.log('render')
  return (
  <div>
  <h1> number :{this.state.count}</h1> 
  <button onClick = {this.add}>add
  </button>
  <button onClick = {this.minus}>minus
  </button>
  </div>);
 

 }
}

export default App;
