import logo_app from "./logo_app.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <img className="text-3xl" src={logo_app} alt="logo" />
        <p>IVORY</p>
        <p>IVORY</p>
        <div className="menu">
          <h2>Diary</h2>
          <p>FEED |</p>
          <p>INITIATIVES |</p>
          <p>DIARY |</p>
          <p>POLLS |</p>
          <p>INSIGHTS |</p>
          <p>INSIGHTS |</p>
        </div>
        <div className="card">
          <h2>1 min ago</h2>
          <p>2 min ago</p>
          <p>3 min ago</p>
          <p>4 min ago</p>
          <p>5 min ago</p>
          <h2>Working 100 hours a week</h2>
          <p>
            I am killing myself working all the timeThere was a point where I
            was not eating, showering or doing anything else other than....
          </p>
          <p>
            I am killing myself working all the timeThere was a point where I
            was not eating, showering or doing anything else other than....
          </p>
          <p>
            I am killing myself working all the timeThere was a point where I
            was not eating, showering or doing anything else other than....
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
