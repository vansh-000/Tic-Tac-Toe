import React, { useRef, useState } from "react";

import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setcount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  const toggles = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src = '${cross_icon}' >`;
      data[num] = "x";
      setcount(count + 1);
    } else {
      e.target.innerHTML = `<img src = '${circle_icon}'>`;
      data[num] = "o";
      setcount(count + 1);
    }
    checkWin();
  };
  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[7]);
    } else if (data[6] === data[0] && data[0] === data[3] && data[6] !== "") {
      won(data[0]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[1]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[2]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[4]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[3]);
    } else if (data[6] === data[4] && data[4] === data[2] && data[6] !== "") {
      won(data[6]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x")
      titleRef.current.innerHTML = `<img src="${cross_icon}" style="width: 10vh; height: 10vh; margin-top:-10px;"> Wons !!`;
    else
      titleRef.current.innerHTML = `<img src="${circle_icon}" style="width: 10vh; height: 10vh; margin-top:-10px;"> Wons !!`;
  };
  const reset = () => {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe";
    box_array.map((e) => {
      e.current.innerHTML = "";
    });
  };
  return (
    <>
      <div className="container">
        <h1
          ref={titleRef}
          className="title flex justify-center text-white text-4xl mt-10 mb-10">
          Tic Tac Toe
        </h1>
        <div className="game flex justify-center items-center">
          <div className="board">
            <div className="row1 flex">
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box1}
                onClick={(e) => {
                  toggles(e, 0);
                }}></div>
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box2}
                onClick={(e) => {
                  toggles(e, 1);
                }}></div>
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box3}
                onClick={(e) => {
                  toggles(e, 2);
                }}></div>
            </div>
            <div className="row2 flex">
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box4}
                onClick={(e) => {
                  toggles(e, 3);
                }}></div>
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box5}
                onClick={(e) => {
                  toggles(e, 4);
                }}></div>
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box6}
                onClick={(e) => {
                  toggles(e, 5);
                }}></div>
            </div>
            <div className="row3 flex">
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box7}
                onClick={(e) => {
                  toggles(e, 6);
                }}></div>
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box8}
                onClick={(e) => {
                  toggles(e, 7);
                }}></div>
              <div
                className="boxes h-24 w-24 bg-[#1f3540] border-4 border-[#0f1b21] rounded-lg cursor-pointer"
                ref={box9}
                onClick={(e) => {
                  toggles(e, 8);
                }}></div>
            </div>
            <div className="button flex justify-center mt-5 items-center">
              <button
                className="reset w-24 h-10 border-none outline-none cursor-pointer rounded-full bg-[#1f3540] text-cyan-400 text-2xl"
                onClick={() => {
                  reset();
                }}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicTacToe;
