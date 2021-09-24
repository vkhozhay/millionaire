import React from 'react';

interface IRoute {
  path: string;
  component: React.FunctionComponent;
  exact?: boolean
}

export default IRoute;
