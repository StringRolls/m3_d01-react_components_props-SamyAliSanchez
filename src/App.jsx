import "./App.css";
import { Navbar } from "./components/Navbar";
import {Greetings} from "./components/Greetings";
import Button from "./components/Button";
import ReactPlayer from "react-player";

function App() {

  return (
    <>
    <header>
    
    <Navbar>
      <Button linkTo="www.reddit.com" prompt="Reddit, wow!" />
    </Navbar>

    <div className="App">Hello Ironhackers!</div>
    </header>
    <main>
      <Greetings message="Viva la vida!" />
      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />
    </main>
    </>
  );
}

export default App;
