import { FC } from "react";

import Provider from "components/Provider/Provider";
import Router from "components/Router/Router";

const App: FC = () => {
  return (
    <Provider>
      share location
      <Router />
    </Provider>
  );
};

export default App;
