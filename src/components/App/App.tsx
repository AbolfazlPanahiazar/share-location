import { FC } from "react";

import Provider from "components/Provider/Provider";
import Router from "components/Router/Router";

const App: FC = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default App;
