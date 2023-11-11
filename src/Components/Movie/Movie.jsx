import React, { useState } from "react";
import * as D from './Movie.style';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function Movie({title, poster_path, vote_average, overview}){
    
    const [trfs, setTrfs] = useState(false);

    const mouseout = () => {
        setTrfs(false);
    };

    const mouseover = () => {
        setTrfs(true);
    };

    return(
        <div>
            <D.MvContainer onMouseOver={mouseover} onMouseOut={mouseout}>
                <D.Incontent active= {trfs} >
                            <h4>{title}</h4>
                            <span>{overview}</span>
                </D.Incontent>
                <D.Img>
                    <img src={IMG_BASE_URL + poster_path} alt={title}/>
                </D.Img>
                <D.MvInfo >
                    <h4>{title}</h4>
                    <span>{vote_average}</span>
                </D.MvInfo>
            </D.MvContainer>
        </div>
    )
}

export default Movie;