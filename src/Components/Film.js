import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";
import filme from "../images/film2067.png"; 
import { useEffect } from "react";

export default function Film({ filmSessions, setFilmSessions, films, setFilmId }){
    
    const { idFilme } = useParams();
    setFilmId(idFilme)
    useEffect(() => {
        const requestDays = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/movies/${idFilme}/showtimes`)
        requestDays.then((resp) => {
        setFilmSessions([...resp.data.days]);  
    })
    }, [])
     
    return (
        <>   
            <TopBar/>
            <div className="container">
                <div className="title">Selecione a sessão</div>
                <ul className="session-days">
                    {filmSessions.map(filmSession => {
                        return(
                        <li className="session-day">
                            <span>{filmSession.weekday} - {filmSession.date}</span>
                            <ul className="session-hours">
                                {filmSession.showtimes.map(showtime =>{
                                    return(
                                        <Link to={`/assentos/${showtime.id}`} style={{ textDecoration: 'none' }}>
                                            <li className="session-hour">{showtime.name}</li>
                                        </Link>
                                    );
                                })}                      
                            </ul>
                        </li>)
                        
                    })}                                  
                </ul>
                <div className="bottom-bar">  
                    <div className="selected-film"><img src={films[idFilme-1].posterURL} alt="Filme 2067" /></div>         
                    <span>{films[idFilme-1].title}</span>
                </div>  
            </div>
        </>
    );
}