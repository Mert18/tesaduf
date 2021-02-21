import React, { useState } from 'react';
import "../styles/main.scss"



let data = require('../data/bookData.json');

let movieData = require('../data/movieData.json');

const Sentence = () => {


    const [mob, setMob] = useState("book");
    const [rec, setRec] = useState([]);

    const handleClick = () => {
        if (mob === "movie") {
            setMob("book");
        }
        else if (mob === "book") {
            setMob("movie");
        }
    }
    const handleLaunch = () => {
        if (mob === "book") {
            const y = Math.trunc(Math.random() * data.length)
            setRec(data[y]);
        }
        if (mob === "movie") {
            const x = Math.trunc(Math.random() * movieData.length)
            setRec(movieData[x])
        }
    }
    return (
        <div className="mob-wrapper">
            <div className="mob">
                <h2>Bana bir <span className="mobspan" onClick={handleClick}>{mob === "book" ? <span>kitap</span> : <span>film</span>}</span> önerir misin?</h2>
                <button className="launch" onClick={handleLaunch}>Göster</button>
            </div>
            <div className="recommended">
                {mob === "book" ? (
                    <div className="recBook">
                        <h2>{rec.title}</h2>
                        <h3>{rec.author}</h3>
                    </div>
                ) : (
                    <div className="recMovie">
                        <h2>{rec.Movie_Title}</h2>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Sentence