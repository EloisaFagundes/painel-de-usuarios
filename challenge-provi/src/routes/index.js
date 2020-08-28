import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Panel from "../pages/Panel";
import DetailPanel from "../pages/DetailPanel";

export const routes = {
  panel:"/",
  detailPanel:"/painel-detalhe",
};

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.panel} component={Panel} />
        <Route exact path={routes.detailPanel} component={DetailPanel} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
