import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

const App = () => (
  <div className="max-w-[1440px] mx-auto">
    <RouterProvider router={router} />
  </div>
);

export default App;
