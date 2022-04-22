import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Preloader } from "@tkcrm/ui";

import { routes } from "@/routes";

const App: React.FC = () => {
  const elements = useRoutes(routes);

  return (
    <Suspense fallback={<Preloader fullScreenHeight />}>
      <div className="grid min-h-full place-content-center">{elements}</div>
    </Suspense>
  );
};

export default App;
