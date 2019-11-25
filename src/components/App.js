import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange(language) {
    this.setState({ language });
  }

  render() {
    return (
      <div className="ui container">
        Select language:
        <i
          className="flag us"
          onClick={() => this.onLanguageChange("English")}
        />
        <i className="flag nl" onClick={() => this.onLanguageChange("Dutch")} />
        <UserCreate />
      </div>
    );
  }
}

export default App;
