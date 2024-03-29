import React, { Suspense, lazy } from "react";
const BingMapsReact = lazy(() => import("bingmaps-react"));

function Maps() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const initialLocation = {
    latitude: -7.580784715587559,
    longitude: 112.13238644047685,
  };

  const pushPin = {
    center: {
      latitude: initialLocation.latitude,
      longitude: initialLocation.longitude,
    },
    options: {
      title: "Rendi Virgantara Setiawan Home",
    },
  };

  const pushPins = [pushPin];
  return (
    <div className="maps reveal">
      <Suspense fallback={<p>Loading...</p>}>
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
    </div>
  );
}

export default Maps;
