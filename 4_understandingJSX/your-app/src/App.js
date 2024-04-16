import logo from "./logo.svg";
import "./App.css";
let name1 = "Arbaz Ansari";

function App() {
  return (
    <div className="container">
      <h2>Hello Arbaz This is Javascript</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ducimus
        corporis eligendi nobis vel similique fugiat voluptas, blanditiis
        debitis nesciunt id, assumenda qui at ipsa deserunt sapiente
        necessitatibus! Minus harum libero similique, nihil necessitatibus eum,
        eaque ipsa nesciunt laudantium vero culpa hic cupiditate, sed nostrum
        officiis ducimus accusantium at aut.
      </p>
      <img src={logo} alt="logo images" className="mylogo" />
      <h1 className="hello">
        Hello, {name1}. This is Javascript
      </h1>
    </div>
  );
}

export default App;
