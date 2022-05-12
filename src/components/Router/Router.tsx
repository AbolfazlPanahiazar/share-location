import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "constants/routes";

const Router: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Router;
