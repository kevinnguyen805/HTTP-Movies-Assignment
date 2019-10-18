import React,{useState, useEffect} from 'react'
import axios from 'axios'

function UpdateForm(props){


     const [newMovie, setNewMovie] = useState({
          title: '',
          director: '',
          metascore: '',
          stars: []
     })

     useEffect(() => {
          const movieSearch = props.movieList.find(item => {
               return `${item.id}` === props.match.params.id
          })


          if(movieSearch){
               setNewMovie(movieSearch)
          }

     }, [props.movieList, props.match.params.id])




     const handleChanges = event => {
          event.persist()
          setNewMovie({
               ...newMovie,
               [event.target.name]:event.target.value
          })
     }

     const starHandleChanges = event => {
          event.persist()
          setNewMovie({
               ...newMovie,
               stars: [...newMovie.stars, event.target.value]
          })
     }

    
     const submitForm = event => {
          event.preventDefault()
          axios.put(`http://localhost:5000/api/movies/${newMovie.id}`, newMovie)
          .then(response => {
               console.log(response);
               props.fetchMovies(response.data);
               props.history.push('/')
          })
     }
     

     return(
          <div>
               <form onSubmit={submitForm}>
                    <input 
                         type="text"
                         name="title"
                         value={newMovie.title}
                         onChange={handleChanges}
                         placeholder="Title"
                    />
                    <input 
                         type="text"
                         name="director"
                         value={newMovie.director}
                         onChange={handleChanges}
                         placeholder="Director"
                    />
                    <input 
                         type="text"
                         name="metascore"
                         value={newMovie.metascore}
                         onChange={handleChanges}
                         placeholder="Metascore"
                    />
                    <input 
                         type="text"
                         name="stars"
                         value={newMovie.stars}
                         onChange={starHandleChanges}
                         placeholder="Stars"
                    />
                    <button>Submit new movie</button>
               </form>


          </div>
     )
}

export default UpdateForm