
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Posts from "./components/posts";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import "../src/components/scss/post.scss"
import AppWrapper from '../src/components/Navbar/routing';

const store = configureStore();


const App = () => {
  return (
    <>

      <Provider store={store}>
        <AppWrapper />
      </Provider>

    </>
  );
};

export default App;