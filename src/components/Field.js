import React from "react";
import LanguageContext from "../context/LanguageContext";

class Field extends React.Component {
  //static contextType = LanguageContext; // required if need this.context to get data
  render() {
    //const text = this.context === "english" ? "Name" : "नाम"; //requires contextType
    return (
      <div className="ui field">
      <LanguageContext.Consumer > 
          {(value) => value === "english" ? "Name" : "नाम"}
      </LanguageContext.Consumer>
        <input />
      </div>
    );
  }
}

export default Field;
