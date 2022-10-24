
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Posts from "./components/posts";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

const store = configureStore();

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