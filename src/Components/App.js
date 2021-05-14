import { BrowserRouter, Switch, Route } from "react-router-dom";
import React, { useEffect } from "react";
import FilmList from "./FilmList";
import Film from "./Film";
import Session from "./Session";
import Success from "./Success";
import axios from "axios";
export default function App(){
    const [films, setFilms] = React.useState([]);
    const [filmSessions, setFilmSessions] = React.useState([])
    const [filmId, setFilmId] = React.useState();
    const [seats, setSeats] = React.useState();
    const [selected, setSelected] = React.useState([]);
    const [name, setName] = React.useState([""]);
    const [cpf, setCpf] = React.useState([""]);
    const [numsSeat, setNumsSeat] = React.useState([]);
    
    useEffect(() => {
        const requestFilms = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies")
        requestFilms.then(({ data }) => {
            setFilms([...data])
        });
    }, [])
    
    return(
        <>
            <BrowserRouter>
                <Switch>                    
                    <Route exact path="/" >
                        <FilmList films={films}/>
                    </Route>
                    <Route exact path="/sessoes/:idFilme">
                        <Film filmSessions={filmSessions} setFilmSessions={setFilmSessions} films={films} setFilmId={setFilmId} />
                    </Route>
                    <Route exact path="/assentos/:idSessao">
                        <Session filmId={filmId} films={films} filmSessions={filmSessions} seats={seats} setSeats={setSeats} selected={selected} setSelected={setSelected} name={name} setName={setName} cpf={cpf} setCpf={setCpf} setNumsSeat={setNumsSeat} numsSeat={numsSeat}/>
                    </Route>
                    <Route exact path="/sucesso">
                        <Success name={name} cpf={cpf} selected={selected} seats={seats} films={films} filmSessions={filmSessions} filmId={filmId} numsSeat={numsSeat}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}