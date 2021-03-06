import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  //static contextType = LanguageContext; // required if need this.context to get data
  renderSubmit = (language) => {
    return language === "english" ? "Submit" : "जमा करें"; 
}

  render() {
    // const text = this.context === "english" ? "Submit" : "जमा करें"; //requires contextType

    return (
        <ColorContext.Consumer>
        {(color) => 
            <button className={`ui button ${color} `}>
            <LanguageContext.Consumer >
                {({language }) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        }
       
        </ColorContext.Consumer>
    )
  }
}

export default Button;
