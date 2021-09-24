import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from '../../router';
import RouteNames from '../../router/typings/enums';

const AppRouter = () => (
  <Switch>
    {routes.map((route) => (
      <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
        key={route.path}
      />
    ))}
    <Redirect to={RouteNames.START} />
  </Switch>
);

export default AppRouter;
