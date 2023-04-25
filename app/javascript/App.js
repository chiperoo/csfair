import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

import "./style.css";
const colors = ["#62B5ED", "#DD5350", "#2D3D6C", "#D0D048", "#4CA83B"]; // Justworks Colors

// Here is how to change the confetti shapes,
// Change the values and play around

// const drawShapes = (ctx) => {
//   ctx.beginPath();
//   for (let i = 0; i < 22; i++) {
//     const angle = 0.15 * i;
//     const x = (0.2 + 1.5 * angle) * Math.cos(angle);
//     const y = (0.2 + 1.5 * angle) * Math.sin(angle);
//     ctx.lineTo(x, y);
//   }
//   ctx.stroke();
//   ctx.closePath();
// };


const drawCircle = (ctx) => {
    ctx.beginPath();
    ctx.arc(100, 75, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
};

const MyConfetti = ({ hidden = true }) => {
    return (
        <div role="presentation" aria-hidden={true}>
            <ReactConfetti
                numberOfPieces={2000} // level 1: change the pieces of confetti
                initialVelocityX={{ min: -1, max: 1 }}
                initialVelocityY={{ min: -10, max: 10 }}
                recycle={false}
                // drawShape={drawShapes} // level 2: change the shapes
                drawShape={drawCircle}
                colors={colors}
                run={!hidden}
                onConfettiComplete={() =>
                    console.log("Remember to sweep up the confetti!")
                }
            />
        </div>
    );
};


export default function App() {
    const [hidden, setHidden] = useState(true);
    const [img, setImg] = useState("");
    const [submissionValue, setSubmissionValue] = useState("");

    const onSubmit = async() => {
        setHidden(false);

        await fetch("profession/submit", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                    profession: submissionValue
                }),
        });

        const wordCloudResponse = await fetch("profession/word_cloud", {
            method: "GET",
        });

        const imageBlob = await wordCloudResponse.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImg(imageObjectURL);
        window.open(imageObjectURL, '_blank', "height=500,width=500"); // if we choose to open it in a new tab
        setTimeout(function(){
            window.location.reload();
        }, 4500);
    };

    return (
        <div className="App">
            <h1>When I grow up, I want to be a/an</h1>
            <input onChange={event => setSubmissionValue(event.target.value)} type="text"></input>
            <button onClick={onSubmit}>submit</button>
            <MyConfetti hidden={hidden} />
            {/* <img alt="" src={img}></img> ---- if we want to show the word cloud here*/}
        </div>
    );
}