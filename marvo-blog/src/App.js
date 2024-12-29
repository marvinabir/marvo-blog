import "./App.css";
import Navbar from "./nav"
import Home from "./Home"
function App() {

  const title = "My new blog";
  const likes = 70;
  const link = "https://www.google.com/";

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <h1>{title}</h1>
        <Home/>
        {/* <p>Devont</p>
        <p>{"Hello ninja"}</p>
        <p>It has {likes} likes</p>
        <p>{[1, 2, 3, 9]}</p>
        <p>{Math.random()*10}</p> */}
        <a href={link}>Google</a>
      
      </div>
    </div>
  );
}

export default App;
