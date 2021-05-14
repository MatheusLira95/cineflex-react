import React from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Subtitles from "./Subtitles";
import { useEffect } from "react";

export default function Session({ filmId, films, setSeats, seats, selected, setSelected, name, cpf, setName, setCpf }){
    const { idSessao } = useParams();
    
    

    useEffect(() => {
        const requestSessao = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`)
        requestSessao.then((resp) => {
            setSeats(resp.data)
        })
    },[])

    if(!seats){
        setSeats(seats);
        return(
            <>
                <TopBar />
                <div className="loading">CARREGANDO!!!</div> 
            </>    
        )
    }
    function reserveSeat(i, seat){
        if(!selected.find(id => id === seat.id) && seat.isAvailable){
            setSelected([...selected, seat.id]);            
        }else if(selected.find(id => id === seat.id)){
            selected.splice(selected.indexOf(seat.id), 1)
            setSelected([...selected])
        }
    }

    function checkOut(){
        const data = {ids: selected, name: name, cpf: cpf};
        console.log(data)
        const requestCheckOut = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many', data)
        requestCheckOut.then(() => alert("Success"))
    }
    
    
    
    return(
        <>
            <TopBar/>
            <div className="container">
                <div className="title">Selecione o(s) assento(s)</div>
                <div className="grid-container">
                    {seats.seats.map((seat, i) => {
                        return(
                            <div className={`grid-item ${seat.isAvailable ? "avaible" : "unavaible"} ${selected.find(x => x === seat.id) === undefined ? "" : "selected"} `} onClick={() => reserveSeat(i, seat)}>{seat.name}</div>
                        );
                    })}                    
                </div>
                <Subtitles />
                <div className="buyer-datas">
                    <span>Nome do comprador:</span>
                    <input type="text" placeholder="Digite seu nome..." value={name} onChange={(e) => setName(e.target.value)}></input>
                    <span>CPF do comprador</span>
                    <input type="text" placeholder="Digite seu CPF..." value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
                </div>
                <Link to="/sucesso">
                    <button className="end-page" onClick={() => checkOut()}>Reservar assentos</button>
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