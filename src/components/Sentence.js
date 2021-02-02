import { maxHeaderSize } from 'http';
import React, { useState } from 'react';
import '../index.css'

const Movies = [
    "The Butterfly Effect",
    "Bir Başkadır"
];
const Books = [
    "The Joy of Life",
    "Thus Spoke Zarathustra"
]


const Sentence = () => {

    const [mob, setMob] = useState("book");
    const [rec, setRec] = useState("");

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
            const y = Math.trunc(Math.random() * Books.length)
            setRec(Books[y]);
        }
        if (mob === "movie") {
            const x = Math.trunc(Math.random() * Movies.length)
            setRec(Movies[x])
        }
    }
    return (
        <div className="mob-wrapper">
            <div className="mob">
                <h2>Could you recommend a good <span className="mob" onClick={handleClick}>{mob}</span> for me?</h2>
                <button className="launch" onClick={handleLaunch}>Launch</button>
            </div>
            <div className="recommended">
                {rec}
            </div>
        </div>
    )
}

export default Sentence