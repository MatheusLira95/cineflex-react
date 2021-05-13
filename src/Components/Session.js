import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Button from "./Button";

export default function Session(){
    return(
        <>
            <TopBar/>
            <div className="container">
                <div className="title">Selecione o(s) assento(s)</div>
                <div className="grid-container">
                    <div className="grid-item avaible">1</div>
                    <div className="grid-item avaible">2</div>
                    <div className="grid-item avaible">3</div>
                    <div className="grid-item avaible">4</div>
                    <div className="grid-item avaible">5</div>
                    <div className="grid-item avaible">6</div>
                    <div className="grid-item avaible">7</div>
                    <div className="grid-item avaible">8</div>
                    <div className="grid-item avaible">9</div>
                    <div className="grid-item avaible">10</div>
                    <div className="grid-item avaible">11</div>
                    <div className="grid-item avaible">12</div>
                    <div className="grid-item avaible">13</div>
                    <div className="grid-item avaible">14</div>
                    <div className="grid-item avaible">15</div>
                    <div className="grid-item avaible">16</div>
                    <div className="grid-item avaible">17</div>
                    <div className="grid-item avaible">18</div>
                    <div className="grid-item avaible">19</div>
                    <div className="grid-item avaible">20</div>
                    <div className="grid-item avaible">21</div>
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
            </div>
        </>
    );
}