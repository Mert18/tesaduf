import React, { useState } from 'react';
import "../styles/main.scss"



let data = require('./kitaplar.json')

let movieData = require('./imdb-top-100.json')

const Sentence = () => {


    const [mob, setMob] = useState("book");
    const [rec, setRec] = useState([]);
    const [lang, setLang] = useState("English");

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

    const handleEn = (e) => {
        e.preventDefault();
        setLang("Turkish")
    }
    const handleTr = (e) => {
        e.preventDefault();
        setLang("English")
    }
    return (
        <div className="mob-wrapper">
            <div className="mob">
                <div className="langButtons">
                    <button onClick={handleEn}>Türkçe</button>
                    <button onClick={handleTr}>English</button>
                </div>
                {lang === "English" ? <h2>Could you recommend a good <span className="mobspan" onClick={handleClick}>{mob}</span> for me?</h2> : <h2>Bana bir <span className="mobspan" onClick={handleClick}>{mob === "book" ? <span>kitap</span> : <span>film</span>}</span> önerir misin?</h2>}
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