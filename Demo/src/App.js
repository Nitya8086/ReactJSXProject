import React,{useState,useEffect,useCallback} from 'react';
import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies,setMovies] = useState([]);
  const [isLoading ,setIsLoading] = useState(false);
  const [error ,setError] = useState(null);

 const  fetchMoviesHnadeler = useCallback(async () =>{
  setIsLoading(true);
  setError(null);
  try{
    const response = await fetch('https://react-http-88c6a-default-rtdb.firebaseio.com/movie.json')
     if(!response.ok){
    throw new Error('Something went wrong');
  }
  const data = await response.json();
  const loadedMovies = [];

   for(const key in data){
    loadedMovies.push({
      id:key,
      title :data[key].title,
      openingText : data[key].openingText,
      releaseDate : data[key].releaseDate
    })
   }
 
   setMovies(loadedMovies);
   

  }
  catch(error){
    setError(error.message);
  }
   setIsLoading(false);
  
  },[]);

  useEffect(() =>{
    fetchMoviesHnadeler();
  },[fetchMoviesHnadeler]);

   const addMovieHandeler = async (movie) =>{
   const response =  await fetch('https://react-http-88c6a-default-rtdb.firebaseio.com/movie.json',{
    method:'POST',
    body : JSON.stringify(movie),
    header:{
      'Content-type' :'application/json'
    }
   });
  
const data = await response.json();
console.log(data);
  }

  let content = <p>Found No Movie</p>;
   
  if(movies.length > 0){
    content = <MoviesList movies={movies} />
  }
  
  if(error){
  content = <p>{error}</p>
}

  if(isLoading){
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie = {addMovieHandeler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHnadeler}>Fetch Movies</button>
      </section>
      <section>
       {content}
      </section>
    </React.Fragment>
  );
}

export default App;
