import React, { createContext } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import CharactersPage from "./pages/Characters";
import EpisodesPage from "./pages/Episodes";
import LocationsPage from "./pages/Locations";
import RootLayout from "./pages/RootLayout";
import CharacterDetail from "./pages/CharacterDetail";
import Library from "./pages/Library";
import EpisodeDetail from "./pages/EpisodeDetail";
import LocationDetail from "./pages/LocationDetail";

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
        path: "library",
        element: <Library />,
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
        children: [
          {
            index: true,
            element: <EpisodesPage />,
          },
          {
            path: ":episodeId",
            element: <EpisodeDetail />,
          },
        ],
      },
      {
        path: "locations",
        children: [
          {
            index: true,
            element: <LocationsPage />,
          },
          {
            path: ":locationId",
            element: <LocationDetail />,
          },
        ],
      },
    ],
  },
]);

export const loginCtx = createContext(false);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

// <a target="_blank" href="https://icons8.com/icon/54HwwbK2s8OM/rick-sanchez">Rick Sanchez</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
