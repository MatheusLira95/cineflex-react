import React from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar"


export default function Success({setFilms, setFilmSessions, setFilmId, setSeats, setSelected, setNumsSeat, setName, setCpf, name, cpf, seats, films, filmId, numsSeat}){
    
    function clearStates(){
        setFilmSessions([]);
        setFilmId();
        setSeats();
        setSelected([]);
        setName([""]);
        setCpf([""]);
        setNumsSeat([]);
    };

    return(
        <>
            <TopBar />
            <div className="container">
                <div className="title success">Pedido feito com sucesso!</div>
                <div className="success-sections">
                    <div className="section">
                        <span className="section-title">Filme e sessão</span>
                        <div className="section-data">  
                            <span>{films[filmId-1].title}</span>
                            <span>{seats.day.date} - {seats.name}</span>
                        </div>
                    </div>
                    <div className="section">
                        <span className="section-title">Ingressos</span>
                        <div className="section-data">
                            {numsSeat.map(numSeat => {
                                return(
                                    <span>Assento {numSeat}</span>
                                    );
                            }
                            )}
                            
                        </div>
                    </div>
                    <div className="section">
                        <span className="section-title">Comprador</span>
                        <div className="section-data">  
                            <span>Nome: {name}</span>
                            <span>CPF: {cpf}</span>
                        </div>
                    </div> 
                </div>
                <Link to="/">
                <button className="end-page" onClick={() => clearStates()} >Voltar para Home</button>
                </Link>
                                   
            </div>
        </>
    );
}