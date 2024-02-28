import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo";
import ListDemo from "./exercises/ListDemo";



export default function App() {
  const [selectedView, setSelectedView] = useState("info");


  function handleSelected(selected: string) {
    setSelectedView(selected);
  }


  return (
    <>
      <div className="outer-div-style">
        <div className="header-style">
          <h2>React Exercises af Emil</h2>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: 10 }}>
            <Buttons onSelected={handleSelected} />
          </div>
          <div className="exercise-style">
            {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
              {selectedView === "props" && <PropsDemo title="Props Exercise" />}
              {selectedView === "list" && <ListDemo title="List Exercise" />}
        </div>
      </div>
    </div>
    </>
  );
}
type ButtonProps = {
  onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
  const { onSelected: handleSelected, btnStyle: btnStyle } = props;
  return (
      <>
          <button className="btn-w100" onClick={() => handleSelected("info")}>
              Info
          </button>
          <button className="btn-w100" onClick={() => handleSelected("props")}>
              Props demo
          </button>
          <button className="btn-w100" onClick={() => handleSelected("list")}>
              List demo
          </button>
      </>
  );
};
