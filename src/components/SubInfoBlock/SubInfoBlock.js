import React from 'react'
import  './style.css'
//блок с дним фильмом и его названием
function SubInfoBlock({data, fields}) {
    //преобразуем ссылку для получения аватара фильма
    //получаем ID фильма
        const dataImgId = data.url.split('/').filter(it => it.length !== 0).splice(-2).join('/').replace('people', 'characters')
    //ссылка на фильм с вставленным ID
        const filmUrl = `https://starwars-visualguide.com/assets/img/${dataImgId}.jpg`

return(
    <div className="sub-info-block ">
        <div className='image-block'>
            <img className='films_img' src={filmUrl} alt=""/>
        </div>
        <div className='sub-info-text-block'>
            {
                //перебираем  переданные из props поля и выводим их
                fields.map((it,index)=>{
                    return(
                        <span key ={index}>{typeof data[it] ==='string' ? data[it] : null}</span>
                    )
                })
            }
        </div>





    </div>
)
}
export default SubInfoBlock