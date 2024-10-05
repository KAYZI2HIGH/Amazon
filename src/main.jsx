import {BrowserRouter} from 'react-router-dom'
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UseContext } from "./utils/UseContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UseContext children={<App />} />
  </BrowserRouter>
);
