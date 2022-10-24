
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Posts from "./components/posts";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "../src/components/scss/post.scss"

const store = configureStore();
console.log(store)

const App = () => {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Posts />
      </Provider>

    </>
  );
};

export default App;