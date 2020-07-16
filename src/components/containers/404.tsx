import React from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';
export default function NotFoundPage() {
  var { pathname } = useLocation();
  var { params } = useRouteMatch();
  return <div>404</div>;
}
