import React, { Component } from "react";

class Counter extends Component {
  state = { hours: 10, minutes: 0, seconds: 0 };
  constructor(props) {
    super(props);

    // Callback içerisinde `this` erişiminin çalışabilmesi için, `bind(this)` gereklidir
    this.incSeconds = this.incSeconds.bind(this);
    this.decSeconds = this.decSeconds.bind(this);
    this.incMinutes = this.incMinutes.bind(this);
    this.decMinutes = this.decMinutes.bind(this);
    this.incHours = this.incHours.bind(this);
    this.decHours = this.decHours.bind(this);
  }

  updateTime() {
    if (this.state.seconds > 0) {
      this.setState({
        seconds: this.state.seconds - 1,
      });
    } else {
      if (this.state.minutes > 0) {
        this.setState({
          minutes: this.state.minutes - 1,
          seconds: 59,
        });
      } else {
        if (this.state.hours > 0) {
          this.setState({
            hours: this.state.hours - 1,
            minutes: 59,
            seconds: 59,
          });
        }
      }
    }
  }
  startTimer() {
    this.intervalId = setInterval(this.updateTime.bind(this), 1000);
  }
  stopTimer() {
    clearInterval(this.intervalId);
  }
  componentDidMount() {
    this.startTimer();
  }
  incHours() {
    this.setState({
      hours: this.state.hours + 1,
    });
  }
  decHours() {
    if (this.state.hours > 0) {
      this.setState({
        hours: this.state.hours - 1,
      });
    }
  }
  incMinutes() {
    if (this.state.minutes < 59) {
      this.setState({
        minutes: this.state.minutes + 1,
      });
    } else {
      this.setState({
        hours: this.state.hours + 1,
        minutes: 0,
      });
    }
  }
  decMinutes() {
    if (this.state.minutes > 0) {
      this.setState({
        minutes: this.state.minutes - 1,
      });
    } else {
      if (this.state.hours > 0) {
        this.setState({
          hours: this.state.hours - 1,
          minutes: 59,
        });
      } else {
        this.setState({
          minutes: 0,
        });
      }
    }
  }
  incSeconds() {
    if (this.state.seconds < 59) {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    } else {
      if (this.state.minutes < 59) {
        this.setState({
          minutes: this.state.minutes + 1,
          seconds: 0,
        });
      } else {
        this.setState({
          hours: this.state.hours + 1,
          minutes: 0,
          seconds: 0,
        });
      }
    }
  }
  decSeconds() {
    if (this.state.seconds > 0) {
      this.updateTime();
    }
  }

  render() {
    return (
      <div className="row mx-lg-n5">
        <div className="col">
          <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-sm">
            <p className="display-1" id="hour">
              {this.state.hours}
            </p>
          </div>
          <div className="row mt-2 justify-content-md-center">
            <div className="col d-flex align-items-center justify-content-center">
              <button
                className="btn btn-secondary shadow-none"
                onClick={this.incHours}
              >
                +
              </button>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <button
                className="btn btn-success shadow-none "
                onClick={this.decHours}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-sm">
            <p className="display-1" id="minute">
              {this.state.minutes}
            </p>
          </div>
          <div className="row mt-2">
            <div className="col d-flex align-items-center justify-content-center">
              <button
                className="btn btn-secondary shadow-none"
                onClick={this.incMinutes}
              >
                +
              </button>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <button
                className="btn btn-success shadow-none"
                onClick={this.decMinutes}
              >
                -
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-sm">
            <p className="display-1" id="second">
              {this.state.seconds}
            </p>
          </div>
          <div className="row mt-2 justify-content-md-center">
            <div className="col d-flex align-items-center justify-content-center">
              <button
                className="btn btn-secondary shadow-none"
                onClick={this.incSeconds}
              >
                +
              </button>
            </div>
            <div className="col d-flex align-items-center justify-content-center">
              <button
                className="btn btn-success shadow-none "
                onClick={this.decSeconds}
              >
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
