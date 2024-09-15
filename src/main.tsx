import ReactDOM from "react-dom/client";
import { Router } from "./features/index.ts";
import { Provider } from "react-redux";
import "./styles/index.css";
import "./styles/global.scss";
import { store } from "./app/store.ts";

// eslint-disable-next-line react-refresh/only-export-components
function Root() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Root />);
