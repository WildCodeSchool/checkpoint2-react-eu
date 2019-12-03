import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import GameList from "./components/GameList";
import ScreenShots from "./components/ScreenShots";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={GameList} />
          <Route path="/game/screenshots/:id" exact 
            render={(routerProps) => <ScreenShots gameId={routerProps.match.params.id} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;