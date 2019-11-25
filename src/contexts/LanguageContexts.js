import React from "react";

const Context = React.createContext("english");
// we create language store which contains all parameters in state and methods inside class
// everything wraped with <LanguageStore> will have access to this data.
export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
