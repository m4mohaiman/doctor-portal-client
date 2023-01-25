import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
