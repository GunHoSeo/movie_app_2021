import React from 'react';

class App extends React.Component{
  
  state = {
    isLoading : true,
    movies:[],
  }
 //axios , fetch , jquery 다 가능함 
  getMovies = async ()=>{
    const movies = await fetch('https://yts.mx/api/v2/list_movies.json',).then((response) =>{
      console.log('response',response);
      console.log(movies);
    }).catch((error) => {
      console.log('error',error)
    })
  }

  componentDidMount(){
   this.getMovies();
  }

 render(){
  const { isLoading } = this.state;
  return <div>{isLoading ? 'Loading... ' : 'We are ready'}</div>;
 }
}

export default App;
