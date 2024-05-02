import { Suspense } from "react";
import "../src/styles/custom.css";
import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((data, index) =>
          data.component ? (
            <Route
              key={index}
              path={data.path}
              element={
                <Suspense
                  fallback={
                    <>
                      <div>loading</div>
                    </>
                  }
                >
                  <data.component />
                </Suspense>
              }
            />
          ) : null
        )}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
