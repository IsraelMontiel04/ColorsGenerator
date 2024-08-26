import Values from "values.js"
import SingleColor from "./SingleColor"
interface props{
    list:(Values[])
}


const DisplayColors=({list}:props) =>{
  return (
    <div className="colors-box">
        {
            list.map((color, index) =>(
                <SingleColor key={index} hexColor = {color.hex} />
            ))
        }
      
    </div>
  )
}

export default DisplayColors
