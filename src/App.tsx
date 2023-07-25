import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/Home";
import CharactersPage from "./components/pages/Characters";
import EpisodesPage from "./components/pages/Episodes";
import LocationsPage from "./components/pages/Locations";
import RootLayout from "./components/pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "characters",
        element: <CharactersPage />,
      },
      {
        path: "episodes",
        element: <EpisodesPage />,
      },
      {
        path: "locations",
        element: <LocationsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
