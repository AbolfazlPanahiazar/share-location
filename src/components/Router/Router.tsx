import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { routes } from "constants/routes";
import Home from "pages/Home/Home";

const Router: FC = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Router;
