import React,{useState, useEffect} from 'react'


function UpdateForm(props){

     const [newMovie, setNewMovie] = useState({
          title:'',
          director:'',
          metascore: 0,
          stars: []
     })

     const handleChanges = event => {
          setNewMovie({
               ...newMovie,
               [event.target.name]:event.target.value
          })
     }
     const submitForm = event => {
          event.preventDefault()
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
                         name="metastar"
                         value={newMovie.metascore}
                         onChange={handleChanges}
                         placeholder="Metascore"
                    />
                    <input 
                         type="text"
                         name="stars"
                         value={newMovie.stars}
                         onChange={handleChanges}
                         placeholder="Stars"
                    />
                    <button>Submit new movie</button>
               </form>


          </div>
     )
}

export default UpdateForm