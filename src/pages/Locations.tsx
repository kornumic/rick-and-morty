import React from "react";
import useEntityList from "../hooks/use-entity-list";
import PagesChanger from "../components/layout/PagesChanger";
import { Link } from "react-router-dom";
import { Location } from "../components/location/LocationInfo";
import LocationItem from "../components/location/LocationItem";

const LocationsPage = () => {
  const {
    fetchedEntities: fetchedLocations,
    pages,
    isLoading,
    error,
    pageButtonHandler,
  } = useEntityList<Location>("/location");

  return (
    <>
      {isLoading && !error && <p className="transition-all">Loading...</p>}
      {error && !isLoading && <p>Unexpected error</p>}
      {!error && !isLoading && (
        <div className="my-6 mx-64">
          <div className="m-4">
            <PagesChanger
              pages={pages}
              prevButtonHandler={pageButtonHandler.bind(null, -1)}
              nextButtonHandler={pageButtonHandler.bind(null, 1)}
            />
          </div>

          <ul className="grid grid-cols-2">
            {fetchedLocations.map((location) => {
              return (
                <li key={location.id}>
                  <Link to={`${location.id}`}>
                    <LocationItem location={location} />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="m-4">
            <PagesChanger
              pages={pages}
              prevButtonHandler={pageButtonHandler.bind(null, -1)}
              nextButtonHandler={pageButtonHandler.bind(null, 1)}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default LocationsPage;
