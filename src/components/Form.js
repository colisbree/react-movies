import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Form = () => {
   const [moviesData, setMoviesData] = useState([]);


   useEffect(() => {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=5b40bab157cf097dda63cb65316f627e&query=avenger&language=fr-FR')
         .then((res) => { setMoviesData(res.data.results); })
   }, [])

   return (
      <div className="form-component">
         <div className="form-container">
            <form>
               <input type="text" placeholder="Entrez le titre d'un film" id="search-input" />
               <input type="submit" value="Rechercher" />
            </form>
            <div className="btn-sort-container">
               <div className="btn-sort" id="goodToBad">Top<span>&#8594;</span></div>
            </div>
            <div className="btn-sort-container">
               <div className="btn-sort" id="badToGood">Flop<span>&#8594;</span></div>
            </div>
         </div>
         <div className="result">
            {moviesData.slice(0, 12).map((movie) => (
               <Card key={movie.id} movie={movie} />
            ))}
         </div>
      </div>
   );
};

export default Form;