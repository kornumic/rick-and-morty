import React from "react";
import useEntityList from "../hooks/use-entity-list";
import PagesChanger from "../components/layout/PagesChanger";
import { Location } from "../components/location/LocationInfo";
import LocationItem from "../components/location/LocationItem";

const LocationsPage = () => {
  const prettyOn = false;
  const {
    fetchedEntities: fetchedLocations,
    pages,
    isLoading,
    error,
    pageButtonHandler,
  } = useEntityList<Location>("/location");

  return (
    <div
      className={
        prettyOn
          ? "bg-fixed bg-cover bg-[url(https://abbiesartblog.files.wordpress.com/2019/01/s2e3_mount_morty_and_summer.png?w=1400)]"
          : ""
      }
    >
      {isLoading && !error && <p className="transition-all">Loading...</p>}
      {error && !isLoading && <p>Unexpected error</p>}
      {!error && !isLoading && (
        <div className="py-6 mx-36">
          <div className="m-4">
            <PagesChanger
              pages={pages}
              prevButtonHandler={pageButtonHandler.bind(null, -1)}
              nextButtonHandler={pageButtonHandler.bind(null, 1)}
            />
          </div>

          <ul className="grid grid-cols-4">
            {fetchedLocations.map((location) => {
              return (
                <li className="" key={location.id}>
                  <LocationItem location={location} to={`${location.id}`} />
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
    </div>
  );
};

export default LocationsPage;
