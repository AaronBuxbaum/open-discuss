import React from "react";
import "./App.css";
import AgreeScale from "./AgreeScale";
import factors from "./factor-markers";
import { shuffle, take } from "lodash";
import { Button } from "react-bootstrap";

function App() {
  const submit = () => {};

  return (
    <div className="App">
      Describe yourself as you generally are now, not as you wish to be in the
      future.
      {take(shuffle(factors), 10).map(factor => (
        <AgreeScale question={factor} key={factor.text} />
      ))}
      <Button onClick={submit}>Submit</Button>
    </div>
  );
}

export default App;
