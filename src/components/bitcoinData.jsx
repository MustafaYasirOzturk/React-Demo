import React, { Component } from "react";

class BitcoinData extends Component {
  state = {
    dollar: 0,
    pound: 0,
    euro: 0,
    isDolarInc: true,
    isPoundInc: true,
    isEuroInc: true,
  };
  getRatesFromApiAsync() {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => response.json())
      .then((responseJson) => {
        if (this.state.pound !== responseJson.bpi.GBP.rate) {
          this.setState({
            isDolarInc: responseJson.bpi.USD.rate > this.state.dollar,
            isPoundInc: responseJson.bpi.GBP.rate > this.state.pound,
            isEuroInc: responseJson.bpi.EUR.rate > this.state.euro,
          });
        }

        this.setState({
          dollar: responseJson.bpi.USD.rate,
          pound: responseJson.bpi.GBP.rate,
          euro: responseJson.bpi.EUR.rate,
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  componentDidMount() {
    this.getRatesFromApiAsync();
    this.intervalId = setInterval(this.getRatesFromApiAsync.bind(this), 2000);
  }
  render() {
    return (
      <div>
        <div className="row border border-dark rounded d-flex align-items-center justify-content-center mt-5 display-3">
          1 BTC
        </div>
        <div className="row mt-1 ">
          <div
            className={
              "col mx-1 border rounded " +
              (this.state.isDolarInc ? "border-success" : "border-danger")
            }
          >
            <div className="row d-flex align-items-center justify-content-center">
              <h2>USD</h2>
            </div>
            <div className="row d-flex align-items-center justify-content-center">
              <h3>{this.state.dollar}$</h3>
            </div>
          </div>
          <div
            className={
              "col mx-1 border rounded " +
              (this.state.isPoundInc ? "border-success" : "border-danger")
            }
          >
            <div className="row d-flex align-items-center justify-content-center">
              <h2>POUND</h2>
            </div>
            <div className="row d-flex align-items-center justify-content-center">
              <h3>{this.state.pound}£</h3>
            </div>
          </div>
          <div
            className={
              "col mx-1 border rounded " +
              (this.state.isEuroInc ? "border-success" : "border-danger")
            }
          >
            <div className="row d-flex align-items-center justify-content-center">
              <h2>EURO</h2>
            </div>
            <div className="row d-flex align-items-center justify-content-center">
              <h3>{this.state.euro}€</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BitcoinData;
