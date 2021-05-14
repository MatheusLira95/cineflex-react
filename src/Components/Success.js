import { Link } from "react-router-dom";
import TopBar from "./TopBar"


export default function Success({name, cpf, selected, films, filmSessions, filmId}){
    function testarPagina(){
        console.log(filmSessions)
    }

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
                            <span>DATA E HORA</span>
                        </div>
                    </div>
                    <div className="section">
                        <span className="section-title">Ingressos</span>
                        <div className="section-data">
                            <span>Assento</span>
                            <span>Assento</span>
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
                {/* <Link to="/"> */}
                <button className="end-page" onClick={() => testarPagina()}>Voltar para Home</button>
                {/* </Link> */}
                                   
            </div>
        </>
    );
}