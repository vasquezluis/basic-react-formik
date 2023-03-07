import { useState } from "react";

import Form from "./components/Form";
import BasicForm from "./components/BasicFormYUP";
import AdvanceForm from "./components/AdvanceFormYUP";
import "./App.css";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div className="flex justify-center content-center">
      {/* <Form /> */}

      <div className="h-[400px] w-[400px] ">
        <nav className="w-full h-full">
          <h3
            className={`px-1 py-1 rounded bg-blue-500 cursor-pointer ${
              view == "basic" ? "color-white" : ""
            }`}
            onClick={() => setView("basic")}
          >
            Basic
          </h3>
          <h3
            className={`px-1 py-1 rounded bg-green-500 cursor-pointer ${
              view == "advance" ? "color-white" : ""
            }`}
            onClick={() => setView("advance")}
          >
            Advance
          </h3>
        </nav>

        <div className="w-full h-full">
          {view == "basic" ? <BasicForm /> : <AdvanceForm />}
        </div>
      </div>
    </div>
  );
}

export default App;
