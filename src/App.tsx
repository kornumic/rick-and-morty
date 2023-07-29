import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import CharactersPage from "./pages/Characters";
import EpisodesPage from "./pages/Episodes";
import LocationsPage from "./pages/Locations";
import RootLayout from "./pages/RootLayout";
import CharacterDetail from "./pages/CharacterDetail";

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
        children: [
          {
            index: true,
            element: <CharactersPage />,
          },
          {
            path: ":characterId",
            element: <CharacterDetail />,
          },
        ],
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

// <a target="_blank" href="https://icons8.com/icon/54HwwbK2s8OM/rick-sanchez">Rick Sanchez</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
