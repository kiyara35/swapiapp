import React from 'react'
import './style.css'

//ф-я возвращает всю информацию для каждого персонажа,планеты,разновидности
function MainInfo({data,maxCount}) {
    //получаем id из поля Url полученного объекта
    const dataImgId= data.url.split('/').filter(it=> it.length !== 0).splice(-2).join('/').replace('people', 'characters')
    //собираем шаблон картинки
    const dataUrl =`https://starwars-visualguide.com/assets/img/${dataImgId}.jpg`
    //ссылка на фото в случае если элемент не имеет аватара
    const dataError = `https://starwars-visualguide.com/assets/img/placeholder.jpg`


    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column">
                <div className="planet-card card">
                    <img className="main-info_img d-flex justify-content-center align-items-center" src={dataUrl} alt=""
                    onError={(event )=>{
                        event.target.onerror = null;
                        event.target.src = dataError;
                    }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{data.name}</h5>
                    </div>

                    <ul className="list-group list-group-flush">
                        {
                            //пербираем входящий объект данных и выводим
                            Object.keys(data).slice(0,maxCount).map((it,index)=>{
                            return(
                                <li className=" main_item list-group-item  justify-content-between" key={index}>
                                    <span className="main_span">{it.replace('_' , '  ')}:</span>
                                    {typeof data[it] === 'string' ? data[it]: null}
                                </li>

                            )
                        })}
                    </ul>

                </div>


        </div>
        </div>
    )
}

export default MainInfo