import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContexts";
import ColorContext from "../contexts/ColorContext";

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
          onClick={() => this.onLanguageChange("english")}
        />
        <i className="flag nl" onClick={() => this.onLanguageChange("dutch")} />
        {/* here value is dynamic */}
        <ColorContext.Provider value="primary">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
        {/* default value of english is overriden to dutch */}
        <LanguageContext.Provider value="dutch">
          <UserCreate />
        </LanguageContext.Provider>
        {/* default values of context will be used */}
        <UserCreate />
      </div>
    );
  }
}

export default App;
