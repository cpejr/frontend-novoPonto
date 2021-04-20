import React, { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import SidebarMenu from "../components/organisms/Menu";
import RestrictedRoute from "./RestrictedRoute";

import {
  Profile,
  HourChanges,
  HourConsultation,
  Ponto,
  StandBy,
  TimeTracking,
  UpdateNews,
  MandatoryHours,
  Members,
  Roles,
  HourFollowing,
} from "../pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <SidebarMenu>
        <Switch>
          <Route path="/" exact component={Ponto} />
          <Route path="/alteracaodehoras" component={HourChanges} />
          <Route path="/consultadehoras" component={HourConsultation} />
          <Route path="/profile" component={Profile} />
          <Route path="/standby" component={StandBy} />

          <RestrictedRoute
            minAccessLevel={1}
            path="/membros"
            component={Members}
          />

          <RestrictedRoute
            minAccessLevel={1}
            path="/cargos"
            component={Roles}
          />

          <RestrictedRoute
            minAccessLevel={1}
            path="/acompanhamento"
            component={HourFollowing}
          />

          <RestrictedRoute
            path="/acompanhamentodehoras"
            minAccessLevel={1}
            component={TimeTracking}
          />
          <RestrictedRoute
            path="/atualizarnoticias"
            minAccessLevel={1}
            component={UpdateNews}
          />
          <RestrictedRoute
            path="/horarioobrigatorio"
            minAccessLevel={1}
            component={MandatoryHours}
          />
        </Switch>
      </SidebarMenu>
    </BrowserRouter>
  );
};

export default Routes;
