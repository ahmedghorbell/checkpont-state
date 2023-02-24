import React, { Component } from "react";
import "./App.css";
import Navigation from "./component/navigation/Navigation";
import Profile from "./component/profile/Profile";

export default class App extends Component {
constructor(props) {
super(props);
this.state = {
display: false,
timeInterval: 0
};
this.timer = null;
}

toggleDisplay = () => {
  if (!this.state.display) {
    this.setState({ timeInterval: 0 }); // reset time interval when display is opened
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
    this.setState({ display: true }); // set display state to true after resetting time interval
  } else {
    clearInterval(this.timer); // stop the timer when display is toggled
    this.setState({ display: false });
  }
};

componentDidMount() {
  if (this.state.display) { // start timer only if display is open
    this.timer = setInterval(() => {
      this.setState(prevState => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000); // update time interval every second
  }
}


componentDidUpdate(prevProps, prevState) {
  if (!prevState.display && this.state.display) { // reset time interval when display is opened
    this.setState({ timeInterval: 0 });
  }
}



  componentWillUnmount() {
    clearInterval(this.timer); // stop the timer when component unmounts
  }

  render() {
  return (
    <div>
      <Navigation />
      <div className="show">
        <input onClick={this.toggleDisplay} type="checkbox" id="switch" />
        <label htmlFor="switch">Toggle</label>
        {this.state.display && <Profile />}
      </div>
      <div className="time">
        Time interval: {this.state.timeInterval}s
      </div>
    </div>
  );
}
}
