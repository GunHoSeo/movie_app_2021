import React from 'react';


function Food({name,picture}){
  return (<div>
    <h1> i like {name}</h1>
    <img src = {picture}></img>
    </div>);

}
const foodLike = [
{
  name : 'kimchi',
  image : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.QKNL3H-b8pGMgfg77Ig8BAHaE8%26pid%3DApi&f=1'
}

]

function App() {
  return (
  <div> {foodLike.map(dish =>(<Food name={dish.name} picture ={dish.image}/>))}
  </div>
    )
}

export default App;
