import { useState } from "react"


const Slide = ({countrie,handleNext})=>{

    const [res, setRes] = useState("");

    const handleSubmit = (event)=>{
        event.preventDefault()
        if (res.trim().length > 0){
            if (res.toLowerCase() === countrie.name.common.toLowerCase()){
                handleNext(true)
            }
            else{
                handleNext(false)
            }
            setRes("")
        }
    }

    return (
        <div className="slide">
            <form onSubmit={handleSubmit}>
                <img src={countrie ? countrie.flags.png : ""} alt="flag"/>
                <input type="text"  value={res} onChange={(event)=>{
                    setRes(event.target.value)}}/>
                <button>Valider</button>
            </form>
        </div>
    )
}

export default Slide
