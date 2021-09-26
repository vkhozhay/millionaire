import React, { FC, useEffect } from 'react';
import {
  Switch, Route, Redirect, useHistory,
} from 'react-router-dom';
import routes from '../../router';
import RouteNames from '../../router/typings/enums';

const AppRouter:FC = () => {
  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname !== RouteNames.START) {
      history.push(RouteNames.START);
    }
  }, []);

  return (
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
};

export default AppRouter;
