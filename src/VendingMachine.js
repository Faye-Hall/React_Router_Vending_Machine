import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import Snack from "./Snack";
import SnackList from "./SnackList";

function VendingMachine() {
  return (
    <div>
      <BrowserRouter>
        {SnackList.map((each) => (
          <nav>
            <NavLink exact to={`/${each}`}>
              {each}
            </NavLink>
          </nav>
        ))}

        {SnackList.map((each) => (
          <Route exact path={`/${each}`}>
            <Snack snack={each} />
          </Route>
        ))}
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;
