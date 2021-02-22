import React from "react";
import Slider from "react-slick";
import SubInfoBlock from "../SubInfoBlock";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './style.css'
//блок всех фильмов с слайдере и его настройки
function SubInfo ({data,fields}) {

     const sliderSettings={
         //настройки слайдера
         dots: false,
         infinite: false,
         arrows:false,
         autoPlay: true,
         autoplaySpeed: 1000,
         slidesToShow:2,
         slidesToScroll:1
     };
     return(
         <div className="sub-info-blocks">
             <Slider {...sliderSettings} >
             {data.map((it,index) => <SubInfoBlock data={it} fields={fields} key ={index}/>)}
             </Slider>
         </div>
     );
}
export default SubInfo