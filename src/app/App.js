import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./components/page/main/main";
import Header from "./components/ui/header";

import LoaderDate from "./components/ui/hoc/loaderDate";
// import useMockData from "./utils/mockData";

function App() {
  // const { initialData } = useMockData();
  React.useEffect(() => {
    // initialData();
  }, []);

  return (
    <LoaderDate>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </LoaderDate>
  );
}

export default App;
