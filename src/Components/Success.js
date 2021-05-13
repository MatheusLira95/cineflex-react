import { Link } from "react-router-dom";
import TopBar from "./TopBar"
import Button from "./Button";

export default function Success(){
    return(
        <>
            <TopBar />
            <div className="container">
                <div className="title success">Pedido feito com sucesso!</div>
                <div className="success-sections">
                    <div className="section">
                        <span className="section-title">Filme e sessão</span>
                        <div className="section-data">  
                            <span>NOME DO FILME</span>
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
                            <span>Nome: NOME DA PESSOA</span>
                            <span>CPF: 123.456.789-10</span>
                        </div>
                    </div> 
                </div>
                <Link to="/">
                    <Button>Voltar para Home</Button>
                </Link>
                                   
            </div>
        </>
    );
}