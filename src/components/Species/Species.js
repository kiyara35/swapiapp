import React, {useState, useEffect, useRef} from 'react'
import Error from "../Error";
import Select from "../Select/Select";
import Preloader from "../Preloader/Preloader";
import Form from "../Form";
import MainInfo from "../MainInfo";


import './style.css'


function Species({getData}) {
    const url = 'https://swapi.dev/api/species/'
    //получение объекта разновидности
    const [specie, setSpecie] = useState({});
    // ID разновидности
    const [specieId, setSpecieId] = useState(1);
    //состояние ошибки
    const [error, setErrorStatus] = useState();
    //Массив названий разновидностей полученных при загрузке
    const [selectData, setSelectData] = useState([])
    // состояние preloader
    const [preloader, setPreloader] = useState(true)
    //массив для получения всех разновидностей
    const [allTypeData, setAllTypeData] = useState([])



    // const isInitialMount = useRef(true);
    //
    // useEffect(() => {
    //     if (isInitialMount.current) {
    //         isInitialMount.current = false;
    //     } else {
    //         getSpecieHuman()
    //     }
    // }, [specie]);

    //Получить названия разновидностей при первом рендере страницы
    useEffect(() => {
        getData(url).then(({data}) => {
            setAllTypeData(data)
        })
    }, []);


    // useEffect(() => {
    //     getData(url).then(({data}) => {
    //         setSelectData(data.results.map(it => it.name))
    //         setPreloader(false)
    //     })
    // }, []);

//обновить id типа
    const updateSpeciesId = (e) => {
        setSpecieId(e.target.value)
    };

    //ф-я для получения разновидностей
    const getSpecies  = (e) => {
        // setHuman([])
        e.preventDefault();
        if (specieId > 0 && specieId <= 60) {
            getData(`${url} ${specieId}`).then((response) => {
                setSpecie(response.data);
                setErrorStatus(false)
            })
        } else {
            setErrorStatus(true)

        }

    };

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



    return(
        <div className="species">

            {preloader ? <Preloader/> :
                <Form formName={"Species"} sendData={getSpecies}  selectData={selectData} updateId={updateSpeciesId} />}


            {error ? <Error/> : error === undefined ? null : <MainInfo data={specie} maxCount={8}/>}
            {error === undefined ? '' : null}




        </div>

    )
}
export default Species
