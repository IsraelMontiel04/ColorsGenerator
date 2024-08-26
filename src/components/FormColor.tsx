import { useState } from "react"
import Values from "values.js"

interface props{
  setList:(value:Values[])=>void
}

function FormColor({setList}:props) {

    const[color, setColor]= useState("blue")
    const [error, setError]=useState(false);

    const handleGenerator =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      try {
        const colors = new Values(color).all(10);
        setList(colors);
        setError(false)
      } catch (error) {
        console.log(error);
        setError(true)
      }
      /* console.log(color); */
      
    }

  return (
    <div className="form-color">
      <h1>Color Palete Generator</h1>
      <form onSubmit={handleGenerator}>
        <input type="text" placeholder="#fff" onChange={e => setColor(e.target.value)}/>
        <input type="submit" value="Generar" />
      </form>
      {error ? <p className="error">No existe este color...</p> : null}
    </div>
  )
}

export default FormColor
