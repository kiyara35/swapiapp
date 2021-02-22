import React, {useState, useEffect, useRef} from 'react'

import MainInfo from "../MainInfo";
import Error from "../Error";
import Select from "../Select/Select";
import Preloader from "../Preloader/Preloader";
import SubInfoBlock from "../SubInfoBlock";
import SubInfo from "../SubInfo";
import Form from "../Form";


import './style.css'

function Planets({getData}) {

    const url = 'https://swapi.dev/api/planets/'
    //Объект получаемой планеты
    const [planet, setPlanet] = useState({});
    //ID персонажа из select
    const [planetId, setPlanetId] = useState(1);
    //Состояние ошибки
    const [error, setErrorStatus] = useState();
    //Массив названий планет полученных при загрузке
    const [selectData, setSelectData] = useState([])
    //состояние preloader
    const [preloader, setPreloader] = useState(true)
    //Объект фильмов в слайдере
    const [films, setFilms] = useState([])
    //Объект со всеми планетами
    const [allTypeData, setAllTypeData] = useState([])

    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            getPlanetFilms()
        }
    }, [planet]);

    // useEffect(() => {
    //     getData(url).then(({data}) => {
    //         setSelectData(data.results.map(it => it.name))
    //         setPreloader(false)
    //     })
    // }, []);

//Получить имена планет при первом рендере страницы
    useEffect(() => {
        getData(url).then(({data}) => {
            setAllTypeData(data)
        })
    }, []);

    //Проверка alltypedata и ее ключей
    useEffect(() => {
        if (Object.keys(allTypeData).length !== 0) {
            setSelectData((selectData) => [...selectData, ...allTypeData.results.map(it => it.name)])
            if (allTypeData.next !== null) {
                getData(allTypeData.next).then(({data}) => (
                    setAllTypeData(data)
                ))
            } else {
                setPreloader(false)
            }
        }
    }, [allTypeData]);
        //[alltypedata]-чтобы запускать фун-ю каждый раз пока next не равен null


    const updatePlanetsId = (e) => {
        setPlanetId(e.target.value)
    };
//-ф-я для полчуения планеты т.е. ее даных
    const getPlanets = (e) => {
        setFilms([])
        e.preventDefault();
        if (planetId > 0 && planetId <= 60) {
            getData(`${url} ${planetId}`).then((response) => {
                setPlanet(response.data);
                setErrorStatus(false)
            })
        } else {
            setErrorStatus(true)

        }

    };
    //ф-я для получения фильмов к планетам
    const getPlanetFilms = () => {
        planet.films.map((it) => getData(it).then(({data}) => {
            setFilms((prev) => [...prev, data])
        }))
    };

    return (
        <div className="planets">

            {preloader ? <Preloader/> :
                <Form formName={"Planets"} sendData={getPlanets} selectData={selectData} updateId={updatePlanetsId}/>}
            {error ? <Error/> : error === undefined ? null : <MainInfo data={planet} maxCount={8}/>}
            {error === undefined ? '' : null}
            {films.length !== 0 ?
                <SubInfo data={films} fields={['title']}/> : null
            }
        </div>

    )


}


export default Planets
