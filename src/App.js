import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import "./App.css";
import { gsap } from "gsap";

let data = require("./data/bookData.json");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const App = () => {
  const boxRef = useRef();
  const [bgColor, setBgColor] = useState("");
  const [bubbleColor, setBubbleColor] = useState("");
  const [left, setLeft] = useState(
    Array.from({ length: 20 }, () => Math.floor(Math.random() * 100))
  );
  const [bottom, setBottom] = useState(
    Array.from({ length: 20 }, () => Math.floor(Math.random() * 50))
  );
  const [rec, setRec] = useState({});

  const handleLaunch = () => {
    setBgColor(getRandomColor);
    setBubbleColor(getRandomColor);
    const y = Math.trunc(Math.random() * data.length);
    setRec(data[y]);
    setLeft(Array.from({ length: 20 }, () => Math.floor(Math.random() * 100)));
    setBottom(Array.from({ length: 20 }, () => Math.floor(Math.random() * 60)));
  };

  useEffect(() => {
    gsap.from(boxRef.current, {
      duration: 1,
      y: "100",
      opacity: "0",
    });
  }, []);

  return (
    <div className="container" style={{ background: `${bgColor}` }}>
      <Header />
      <div className="mob-wrapper">
        <div className="mob">
          <p onClick={handleLaunch} className="mobspan">
            Bana bir kitap önerir misin ?
          </p>
        </div>
        <div className="recommended">
          <div className="recBook" ref={boxRef}>
            <p>{rec.title}</p>
            <p>{rec.author}</p>
          </div>
        </div>
      </div>
      <div
        className="bubble"
        style={{
          left: `${left[0]}%`,
          bottom: `${bottom[1]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[1]}%`,
          bottom: `${bottom[2]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[2]}%`,
          bottom: `${bottom[3]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[3]}%`,
          bottom: `${bottom[4]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[4]}%`,
          bottom: `${bottom[5]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[5]}%`,
          bottom: `${bottom[6]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[6]}%`,
          bottom: `${bottom[7]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[7]}%`,
          bottom: `${bottom[8]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[8]}%`,
          bottom: `${bottom[9]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[9]}%`,
          bottom: `${bottom[10]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[10]}%`,
          bottom: `${bottom[11]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[11]}%`,
          bottom: `${bottom[12]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[12]}%`,
          bottom: `${bottom[13]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[13]}%`,
          bottom: `${bottom[14]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[14]}%`,
          bottom: `${bottom[15]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[15]}%`,
          bottom: `${bottom[16]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[16]}%`,
          bottom: `${bottom[17]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[17]}%`,
          bottom: `${bottom[18]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[18]}%`,
          bottom: `${bottom[19]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
      <div
        className="bubble"
        style={{
          left: `${left[19]}%`,
          bottom: `${bottom[0]}%`,
          background: `${bubbleColor}`,
        }}
      ></div>
    </div>
  );
};

export default App;
