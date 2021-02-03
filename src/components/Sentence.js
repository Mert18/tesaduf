import React, { useState } from 'react';
import '../index.css'



let data = require('./kitaplar.json')

let movieData = require('./imdb-top-100.json')

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
                <h2>Could you recommend a good <span className="mobspan" onClick={handleClick}>{mob}</span> for me?</h2>
                <button className="launch" onClick={handleLaunch}>Launch</button>
            </div>
            <div className="recommended">
                {mob === "book" ? (
                    <div className="recBook">
                        <h2>{rec.title}</h2>
                        <h3>{rec.author}</h3>
                    </div>
                ) : (
                    <div className="recMovie">
                        <h2>{rec.title}</h2>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Sentence