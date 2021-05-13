export default function Subtitles(){
    return(
        <>
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
        </>
    );
}