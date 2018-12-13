import React from "react";
import LanguageContext from "../context/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext; // required if need this.context to get data
  render() {
    
    return (
      <div className="ui field">
      { this.context.language === "english" ? "Name" : "नाम"  }
        <input />
      </div>
    );
  }
}

export default Field;
