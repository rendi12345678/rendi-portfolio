import React, { Suspense, lazy } from "react";
import useMaps from "../../hooks/useMaps";
import useNavigatorOnLine from "../../hooks/useNavigatorOnline";
import MapsLoading from "./MapsLoading";
import MapsOffline from "./MapsOffline";
const BingMapsReact = lazy(() => import("bingmaps-react"));

function Maps() {
  const { apiKey, initialLocation, pushPins } = useMaps();
  const isOnline = useNavigatorOnLine();

  console.log(isOnline);

  return (
    <div className="maps reveal">
      {isOnline ? (
        <Suspense fallback={<MapsLoading />}>
          <BingMapsReact
            bingMapsKey={apiKey}
            height="100%"
            width="100%"
            mapOptions={{
              navigationBarMode: "square",
            }}
            pushPins={pushPins}
            viewOptions={{
              center: {
                latitude: initialLocation.latitude,
                longitude: initialLocation.longitude,
              },
              mapTypeId: "aerial",
              zoom: 10,
            }}
          />
        </Suspense>
      ) : (
        <MapsOffline />
      )}
    </div>
  );
}

export default Maps;
