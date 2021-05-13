import { Link } from "react-router-dom";
import TopBar from "./TopBar";



export default function FilmList({ films }){
    
    return (
        <>
            <TopBar />
            <div className="container">
                <div className="title">Selecione o filme</div>
                <ul className="films-list">
                    {films.map(film => {
                        return(
                            <Link to={`/sessoes/${film.id}`}>
                                <li className="film-item" key={film.id}><img src={film.posterURL} alt="Film 2067"/></li>
                            </Link>
                        );
                    })
                    }
                </ul>
            </div>
        </>
    );
}