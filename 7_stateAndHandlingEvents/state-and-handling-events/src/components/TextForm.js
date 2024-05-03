import React, { useState } from "react";

export default function TextForm(props) {
  /* Hooks */
  let [text, setText] = useState("");
  //   console.log(useState());
  // text = "Arbaz Ansari data."; this is not the way to change value
  // setText("New Text"); //correct way

  const upperCaseBtn = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCaseBtn = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = event => {
    console.log("On Change");
    setText(event.target.value);
  };

  const getLength = () => {
    let strLen = text.length;
    console.log(strLen);
    if (strLen >= 1) {
      document.querySelector(".length").innerHTML = "  " + strLen;
    } else if (strLen === undefined) {
      document.querySelector(".length").innerHTML = "  0";
    }
  };
  const eraseText = () => {
    setText("");
  };
  return (
    <div>
      <div className="mb-3">
        <h1>
          {props.heading}
        </h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
          autoFocus
          value={text}
          onChange={handleOnChange}
          placeholder="Enter your text string here"
        />
        <button className="btn primary-btn" onClick={upperCaseBtn}>
          Convert To UpperCase
        </button>
        <button className="btn primary-btn" onClick={lowerCaseBtn}>
          Convert To LowerCase
        </button>
        <button className="btn primary-btn" onClick={getLength}>
          Get Length:
          <span className="length" />
        </button>
        <br />
        <button
          type="reset"
          value="reset"
          className="btn primary-btn"
          onClick={eraseText}
        >
          Reset
        </button>
      </div>
      <div className="summary summaryHeading">
        <h2 className="m-5 summaryHeading">Text Summary</h2>
        <h5>
          No. of Characters: {text.length}
        </h5>
        <h5>
          No. of Words: {text.split(" ").length}
        </h5>
        <h5>
          Time to Read: {text.split(" ").length * 0.008}
        </h5>

        <div className="preview">
          <h3>Preview:</h3>
          <h6>
            {text}
          </h6>
        </div>
      </div>
    </div>
  );
}
