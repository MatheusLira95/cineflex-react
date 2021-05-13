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
    const [seats, setSeats] = React.useState()
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
                        <Session filmId={filmId} films={films} filmSessions={filmSessions} seats={seats} setSeats={setSeats}/>
                    </Route>
                    <Route exact path="/sucesso">
                        <Success />
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    );
}