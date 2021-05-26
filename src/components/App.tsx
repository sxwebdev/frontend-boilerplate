import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import { routes } from "../routes";

const Loading: React.FC = () => <div>Loading</div>;

const App: React.FC = () => {
  const elements = useRoutes(routes);
  return (
    <Suspense fallback={<Loading />}>
      <div className="container">{elements}</div>
    </Suspense>
  );
};

export default App;
