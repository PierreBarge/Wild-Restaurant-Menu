import "./App.css";
import MenuList from "./components/MenuList";
import foodItems from "./assets/data";

const App = () => {
  return (
    <article>
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems} />
    </article>
  );
};

export default App;
