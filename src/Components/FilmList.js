import filme from "../images/film2067.png"; 


export default function FilmList(){
    return (
        <div className="container">
            <div className="title">Selecione o filme</div>
            <ul className="films-list">
                <li className="film-item"><img src={filme} alt="Film 2067"/></li>
                <li className="film-item"><img src={filme} alt="Film 2067"/></li>
                <li className="film-item"><img src={filme} alt="Film 2067"/></li>
                <li className="film-item"><img src={filme} alt="Film 2067"/></li>
            </ul>
        </div>
    );
}