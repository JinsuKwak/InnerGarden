"use client";
import { GoogleMap, useLoadScript, Marker, InfoWindowF } from "@react-google-maps/api";
import { Location } from "@/types/Location";
import { MarkerF } from "@react-google-maps/api";
import mapStyles from "./mapStyles";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

interface GoogleMapProps {
  locations: Location[];
}

const GoogleMapContainer = ({ locations }: GoogleMapProps) => {
  // const [selectedMarker, setSelectedMarker] = useState<Location | null>(null);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const createMarkerIcon = (color: string) => ({
    url: `https://maps.google.com/mapfiles/ms/icons/${color}-dot.png`,
    scaledSize: new window.google.maps.Size(40, 40),
  });

  const options = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    disableDefaultUI: true,
    mapStyle: mapStyles,
  };

  const center = {
    lat: 51.085992,
    lng: -114.090235,
  };

  console.log("rendred", locations);

  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <div>
      {location && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          options={options}
          zoom={11}
          // onLoad={(map) => {
          //   new window.google.maps.InfoWindow({
          //     disableAutoPan: true,
          //   });
          // }}
        >
          {locations.map((location, i) => (
            // <MarkerF key={i} position={location.latlng} onClick={() => setSelectedMarker(location)} />
            <MarkerF key={i} position={location.latlng} icon={createMarkerIcon("orange")} />
          ))}
          {/* {selectedMarker && (
            <InfoWindowF position={selectedMarker.latlng} onCloseClick={() => setSelectedMarker(null)}>
              <div className="min-w-[2rem]">
                <p>{`Languages: ${selectedMarker.lang.primary.toUpperCase()}, ${selectedMarker.lang.secondary.toUpperCase()}`}</p>
              </div>
            </InfoWindowF>
          )} */}
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMapContainer;
