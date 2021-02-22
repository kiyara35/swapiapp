import React from 'react'
import './style.css'
import preloader from  "../../Images/SWPreloader.svg"
function Preloader() {
return(
    <div className="preloader-block">
        <img src={preloader} alt="/"/>

    </div>
)
}
export default Preloader