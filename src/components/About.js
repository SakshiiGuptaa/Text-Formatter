// import React, { useState } from "react";

export default function About(props) {
  // const [myStyle,setMyStyle] = useState({
  //     color : 'black',
  //     backgroundColor : 'white'
  // })

  // const [btntext,setBtntext] = useState("Enable Dark mode")

  //  const toggleStyle =()=>{
  //     if(myStyle.color === 'black')
  //     {
  //         setMyStyle({
  //             color : 'white',
  //             backgroundColor : 'black' ,
  //             border : '1px solid white'
  //         })
  //         setBtntext("Enable Light mode")
  //     }
  //     else
  //     {
  //         setMyStyle({
  //             color : 'black',
  //             backgroundColor : 'white'
  //         })
  //         setBtntext("Enable Dark mode")
  //     }
  // }

  let myStyle ={
    color: props.mode ==='dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark' ?'rgb(36 74 104)':'white',
  }

  return (
    <div className="container" >
      <h1 className="my-3" style={{ color: props.mode ==='dark'?'white':'#042743'}}>About Us</h1>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            TextUtils gives you a way to analyze your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            TextUtils is a free character counter tool that provides instant character count 
            & word count statistics for a given text.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatibale</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
            This word count works in any web browsers such as Chrome , Firefox
            , Internet Explorer, Safari, Opera,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
