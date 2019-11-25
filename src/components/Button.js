import React from "react";
import LanguageContexts from "../contexts/LanguageContexts";

class Button extends React.Component {
  renderSubmit = value => {
    return value === "english" ? "Submit" : "Voorlaggen";
  };

  render() {
    return (
      <button className="ui button primary">
        <LanguageContexts.Consumer>
          {value => this.renderSubmit(value)}
        </LanguageContexts.Consumer>
      </button>
    );
  }
}

export default Button;
