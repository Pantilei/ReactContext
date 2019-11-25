import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit = language => {
    return language === "english" ? "Submit" : "Voorlaggen";
  };
  //<LanguageContexts.Consumer> wraps a function and passes as an argument all context, using this function
  // we can render anything using data provided from context
  renderColor = color => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContexts.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContexts.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderColor(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
