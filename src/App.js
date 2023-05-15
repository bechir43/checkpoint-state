import React from "react";
import "./App.css";
import img from "./6.jpg";
class App extends React.Component {
  state = {
    fullName: "Bechir Arfaoui",
    profession: "Student",
    bio: "Developer",
    image: img,
    show: false,
    timer: 0,
  };

  handleClick = () => {
    this.setState({ show: !this.state.show });
  };
  componentDidMount = () => {
    console.log("run componentDidMount");
    this.intervalId = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
    console.log(this.intervalId);
  };

  render() {
    return (
      <div className="position app">
        <div className="box">
          {this.state.show && (
            <div className="information">
              <div className="position Img">
                <img src={this.state.image} alt="" />
              </div>
              <section className="position">
                <h1>{this.state.fullName}</h1>
                <h3>{this.state.profession}</h3>
                <p>{this.state.bio}</p>
                <div className="count">Count: {this.state.timer} sec</div>
              </section>
            </div>
          )}
          <button type="button" className="butn" onClick={this.handleClick}>
            {this.state.show ? "Hide" : "Show"} Me
          </button>
        </div>
      </div>
    );
  }
}
export default App;