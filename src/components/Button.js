import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  //static contextType = LanguageContext; // required if need this.context to get data
  renderSubmit = (value) => {
    return value === "english" ? "Submit" : "जमा करें"; 
}

  render() {
    // const text = this.context === "english" ? "Submit" : "जमा करें"; //requires contextType

    return (
        <ColorContext.Consumer>
        {(color) => 
            <button className={`ui button ${color} `}>
            <LanguageContext.Consumer >
                {value => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        }
       
        </ColorContext.Consumer>
    )
  }
}

export default Button;
