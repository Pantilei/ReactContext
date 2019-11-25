import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  renderSubmit = value => {
    return value === "english" ? "Submit" : "Voorlaggen";
  };

  renderColor = color => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContexts.Consumer>
          {value => this.renderSubmit(value)}
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
