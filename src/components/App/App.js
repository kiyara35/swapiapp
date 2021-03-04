import React from 'react'
import {Switch, Route} from "react-router-dom";

import Header from "../Header";
import Planets from "../Planets";
import Peoples from "../Peoples/Peoples";
import Species from "../Species";
import axios from "axios";

import './style.css'

//ф-ия,где собирается все приложение
function App() {
//ф-я для получения данных
    const getData =(url)=>{
        return axios.get(url.replace('http:', 'https:'))
    }


    return (
        <div className="App">
            <Header/>

            <Switch>
                <Route  path = '/planets'>
                    <Planets getData={getData}/>
                </Route>
                 <Route  path = '/peoples'>
                    <Peoples getData={getData}/>
                </Route>
                <Route  path = '/species'>
                    <Species getData={getData}/>
                </Route>

            </Switch>
        </div>
    )
}

export default App
