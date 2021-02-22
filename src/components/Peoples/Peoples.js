import React, {useState, useEffect} from 'react';
import Error from "../Error";
import Select from "../Select/Select";
import Preloader from "../Preloader/Preloader";
import MainInfo from "../MainInfo";
import Form from "../Form";
import './style.css'

function Peoples({getData}) {
    // url для получения аватара персонажа
    const url = `https://swapi.dev/api/people/`

    //Объект получаемого персонажа
    const [people, setPeople] = useState({});
    //id персонажа выбранного из select
    const [peopleId, setPeopleId] = useState(1);
    //Состояние ошибки
    const [error, setErrorStatus] = useState();
    //Массив названий персонажей полученный при загрузке
    const [selectData, setSelectData] = useState([])
    // Состояние preloader  для отображения загрузки,когда мы получаем данные
    const [preloader, setPreloader]= useState(true)
    //Объект со всеми персонажами
    const [allTypeData, setAllTypeData] = useState([])

    //Получить имена персонажей при первом рендере страницы
    useEffect(() => {
        getData(url).then(({data}) => {
            setAllTypeData(data)
        })
    }, []);

    //проврерка alltypedata и ее ключей
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

    // useEffect(() => {
    //     getData(url).then(({data}) => {
    //         setSelectData(data.results.map(it => it.name))
    //         setPreloader(false)
    //     })
    // }, [])

    const updatePeopleId = (e) => {
        if(Number(e.target.value )>= 17){
            setPeopleId(Number(e.target.value)+1)
        }else{
            setPeopleId(Number(e.target.value))
        }

    };

//ф-я для получения персонажей и их данных
    const getPeoples = (e) => {
        e.preventDefault();
        if (peopleId > 0 && peopleId <= 84 ) {
            getData(`${url} ${peopleId}`).then((response) => {
                setPeople(response.data);
                setErrorStatus(false)
            })


        } else {
            setErrorStatus(true)

        }


    };


    return (
        <div className="peoples">
            {preloader ? <Preloader/> :
                <Form formName={"People"} sendData={getPeoples}  selectData={selectData} updateId={updatePeopleId} />}



            {error ? <Error/> : error === undefined ? null : <MainInfo data={people} maxCount={8}/>}
            {error === undefined ? '' : null}
        </div>
    )

}

export default Peoples


