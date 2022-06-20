import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ButtonComponent name="More Info" color="coral" font="bold" />
        <ButtonComponent name="Read More" color="blue" font="bold" />
        <ButtonComponent name="Go" color="green" font="bold" />
        <ImageComponent image="https://www.techmediasquare.com/wp-content/uploads/2020/01/Web-Development-Tech-Media-Square.jpeg" />
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
