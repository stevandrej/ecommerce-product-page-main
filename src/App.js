import Product from "pages/Product/Product";
import { Provider } from "react-redux";
import Menu from "./components/Menu/Menu";
import store from "./store/cart";

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Menu />
        <Product />
      </div>
    </Provider>
  );
}

export default App;
