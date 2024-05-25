import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: props.durationInMinutes * 60,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.timeRemaining > 0) {
        this.setState({ timeRemaining: this.state.timeRemaining - 1 });
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { timeRemaining } = this.state;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return (
      <div className="countdown-timer">
        <div>{minutes}:{seconds}</div>
      </div>
    );
  }
}
export default CountdownTimer;
