import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Button from "./Button";
import { useEffect } from "react";

export default function Session({ filmId, films, filmSessions, setSeats, seats }){
    const { idSessao } = useParams();
    // const exactSession = filmSessions.find(session => session.id)

    useEffect(() => {
        const requestSessao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        requestSessao.then((resp) => {
            setSeats(resp.data)
        })
    },[])

    if(!seats){
        setSeats(seats);
        return(
            <div>CARREGANDO!!!</div>
        )
    }
    return(
        <>
            <TopBar/>
            <div className="container">
                <div className="title">Selecione o(s) assento(s)</div>
                <div className="grid-container">
                    {seats.seats.map(seat => {
                        return(
                            <div className={`grid-item ${seat.isAvailable ? "avaible" : "unavaible"}`}>{seat.name}</div>
                        );
                    })}                    
                </div>
                <div className="subtitles">
                    <div className="subtitle">
                        <div className="grid-item selected"></div>
                        <span>Selecionado</span>
                    </div>
                    <div className="subtitle">
                        <div className="grid-item avaible"></div>
                        <span>Disponível</span>
                    </div>
                    <div className="subtitle">
                        <div className="grid-item unavaible"></div>
                        <span>Indisponível</span>
                    </div>
                </div>
                <div className="buyer-datas">
                    <span>Nome do comprador:</span>
                    <input type="text" placeholder="Digite seu nome..."></input>
                    <span>CPF do comprador</span>
                    <input type="text" placeholder="Digite seu CPF..."></input>
                </div>
                <Link to="/sucesso">
                    <Button>Reservar assentos</Button>
                </Link>
                <div className="bottom-bar">
                    <div className="selected-film"><img src={films[filmId-1].posterURL} alt="Filme 2067" /></div>
                    <div>
                        <span>{films[filmId-1].title}</span>
                        <span>{seats.day.weekday} - {seats.name} </span>
                    </div>
                </div>
            </div>
        </>
    );
}