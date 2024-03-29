import React, { useState } from "react";
import ObserverInfo from "./ObserverInfo";
import { NODE_JS_FOR_N2YO_URL } from "../../constants";
import SatelliteList from "./SatelliteList";
import WorldMap from "./WorldMap";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [satList, setSatList] = useState([]);
  const [tracking, setTracking] = useState(false);
  const [observerInfo, setObserverInfo] = useState({});

  const findSatellitesOnClick = (nextObserverInfo) => {
    setObserverInfo(nextObserverInfo);
    const { longitude, latitude, altitude, radius, category } =
      nextObserverInfo;

    setLoading(true);
    fetch(
      `${NODE_JS_FOR_N2YO_URL}/n2yo?api=above&lat=${latitude}&lon=${longitude}&alt=${altitude}&rad=${radius}&cat=${category}&apikey=YR8SC5-LKJUYS-EBJXH5-50PK`
    )
      .then((response) => response.json())
      .then((data) => {
        setSatList(
          data.above.map((satellite) => {
            return {
              ...satellite,
              selected: false,
            };
          })
        );
        setLoading(false);
        console.log(data);
      })
      .catch(() => {
        setLoading(false);
        console.log("catch failure");
      });
  };

  return (
    <>
      <ObserverInfo
        findSatellitesOnClick={findSatellitesOnClick}
        loading={loading}
        disabled={tracking}
      />
      <SatelliteList
        satList={satList}
        updateSatelliteList={setSatList}
        loading={loading}
        disabled={tracking}
      />
      <WorldMap
        selectedSatellites={satList.filter((sat) => sat.selected)}
        onTracking={setTracking}
        disabled={tracking}
        observerInfo={observerInfo}
      />
    </>
  );
};

export default Main;
