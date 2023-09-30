import React , {useState} from 'react'
// import React , {useRef} from 'react'

//one hook is useState 
// but now event property is depricated so we can't use useState now
export default function TextForm(props) {

    //I had added the speak functionality in the TextUtilities app and function is:
    const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    }

    //this function converts upper case to lower case and lower case to upper case
  const handleToggleCaseClick = () => {
    let words = text.split(" ");
    let newText = words.map((word) => {
        let newWord = "";
        for (let i = 0; i < word.length; i++) {
          let char = word.charAt(i);
          if (char >= "A" && char <= "Z") {
            char = char.toLowerCase();
          } else if (char >= "a" && char <= "z") {
            char = char.toUpperCase();
          }
          newWord += char;
        }

        return newWord;
      })
      .join(" ");

    setText(newText);
  };

    //GLOBAL DECLARATION OF COUNTING NUMBER OF VOWELS AND CONSONANTS

    // let [count , setCount] = useState(0);
    // let [count1 , setCount1] = useState(0);

    // let countChar = 0;
    // let countCons = 0;

    // Function to count Vowels:

    // const handleVoClick = () => {
    //     for (count = 0; count <= text.length; count++) {
    //     if (text.charAt(count).match(/[aeiouAEIOU]/)) {
    //         countChar++;
    //         setCount(countChar);
    //     }
    //     else if(countChar === 0){
    //             setCount(0);
    //     }
    //     }
    //     // console.log("No. of Vowels are: " + countChar);
    // };

    // // Function to count Consonants:
    // const handleCoClick = () => {
    //     for (count1 = 0; count1 <= text.length; count1++) {
    //     if (text.charAt(count1).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
    //         countCons++;
    //         setCount1(countCons);
    //     }
    //     else if(countCons === 0)
    //             setCount1(0);
    //     }
    // }
    const handleUpClick =()=>{
        // console.log("UpperCase was clicked.."+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!","success");
      }
      
      const handleLoClick =()=>{
        // console.log("UpperCase was clicked.."+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
      }
      
      const handleClearClick =()=>{
        // console.log("UpperCase was clicked.."+text);
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared!","success");
      }
      const handleOnChange =()=>{
        // console.log("On change");
        // const inputValue = inputRef.current.value;
        setText(event.target.value);
      }
      //copy to clipboard
      const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to clipboard!","success");
      }
      
      //remove extra spaces
      const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces","success");
    }
    // const inputRef = useRef('Enter text here');
    const [text, setText] = useState('');
        // text="new Text"; //worng way
        // setText("new Text"); //correct way

  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
        <div class="mb-3">
            {/* one brace for javascripts and another for object */}
            <textarea className="form-control" value={text} style={{backgroundColor : props.mode==='dark'?'rgb(25, 55, 78)':'white',color : props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to LowerCase</button>
        {/* <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleVoClick}>Count Vowels</button> */}
        {/* <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCoClick}>Count Consonants</button> */}
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleToggleCaseClick}>Toggle Case</button>
        <button disabled={text.length===0} type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>

    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read</p>
        {/* <h3>You have entered:</h3> */}
        {/* <p> Vowels -{count} &  Consonants -{count1}</p> */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>

    </div>
    </>
  )
}
