import TopBar from "./TopBar";
import filme from "../images/film2067.png"; 

export default function Film(){
    return (
        <>    
            <div className="container">
                <div className="title">Selecione a sessão</div>
                <ul className="session-days">
                    <li className="session-day">
                        <span>Alguma-feira - xx/xx/xxxx</span>
                        <ul className="session-hours">
                            <li className="session-hour">17:00</li>
                            <li className="session-hour">19:00</li>
                            <li className="session-hour">21:00</li>                        
                        </ul>
                    </li>
                    <li className="session-day">
                        <span>Alguma-feira - xx/xx/xxxx</span>
                        <ul className="session-hours">
                            <li className="session-hour">17:00</li>
                            <li className="session-hour">19:00</li>
                            <li className="session-hour">21:00</li>                        
                        </ul>
                    </li>
                    <li className="session-day">
                        <span>Alguma-feira - xx/xx/xxxx</span>
                        <ul className="session-hours">
                            <li className="session-hour">17:00</li>
                            <li className="session-hour">19:00</li>
                            <li className="session-hour">21:00</li>                        
                        </ul>
                    </li>                
                </ul>
                <div className="bottom-bar">  
                    <div className="selected-film"><img src={filme} alt="Filme 2067" /></div>         
                    <span>NOME DO FILME</span>
                </div>  
            </div>
        </>
    );
}