import React, { useMemo } from "react";
//import { useSelector, useDispatch } from "react-redux";
//import { fetchLocations } from "../slices/locationsSlice";
//import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
require("dotenv").config();
//import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export default function Map(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  if (!isLoaded) return <div className="map">Map Loading....</div>;

  return <NewMap props={props} />;
}

function NewMap(props) {
  const center = useMemo(() => ({ lat: 25.7392, lng: -104.9903 }), []);
  //console.log(props.props.allLocations.data);
  const markers = [];
  const location = props.props.allLocations.data;
  //console.log(location);
  for (let i = 0; i < location.length; i++) {
    // console.log(location[i].site_id);
    // console.log(location[i].name);
    // console.log(location[i].latitude);
    // console.log(location[i].longitude);
    markers.push({ lat: location[i].latitude, lng: location[i].longitude });
    //   markers.push({
    //     id: location[i].site_id,
    //     name: location[i].name,
    //     position: { lat: location[i].latitude, lng: location[i].longitude },
    //   });
    // console.log(marker);
    // markers.push(marker);
  }
  console.log(markers);
  // markers = [
  //   {
  //     id: 1,
  //     name: "Chicago, Illinois",
  //     position: { lat: 41.881832, lng: -87.623177 },
  //   },
  //   {
  //     id: 2,
  //     name: "Denver, Colorado",
  //     position: { lat: 39.739235, lng: -104.99025 },
  //   },
  //   {
  //     id: 3,
  //     name: "Los Angeles, California",
  //     position: { lat: 34.052235, lng: -118.243683 },
  //   },
  //   {
  //     id: 4,
  //     name: "New York, New York",
  //     position: { lat: 40.712776, lng: -74.005974 },
  //   },
  // ];

  return (
    <GoogleMap
      zoom={4}
      center={center}
      mapContainerClassName="map-container"
      mapContainerStyle={{ width: "100%", height: "100vh" }}
    >
      <Marker position={{ lat: 25.7392, lng: -104.9903 }} />

      {markers.map((position, index) => (
        <Marker
          key={index}
          position={position}
          // onClick={() => handleActiveMarker(id)}
        >
          {/* {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null} */}
        </Marker>
      ))}
    </GoogleMap>
  );
}

// const render = (status: Status) => {
//   return <h1>{status}</h1>;
// };

// <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAP_KEY}>
//   <TheComponent/>
// </Wrapper>;

// withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
// const MyMap = withGoogleMap((props) => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={4}
//     defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
//     onClick={props.onMapClick}
//   >
//     {props.allLocations.map((location) => (
//       <Marker
//         key={location.key}
//         {...location}
//         position={{ lat: location.latitude, lng: location.longitude }}
//         onRightClick={() => props.onMarkerRightClick(location)}
//       />
//     ))}
//   </GoogleMap>
// ));

// // We use object destructuring here to shorten our code
// export default function Map() {
//   const dispatch = useDispatch();
//   const locations = useSelector((state) => state.locations);

//   useEffect(() => {
//     if (locations.length === 0) {
//       dispatch(fetchLocations());
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <MyMap
//       className="test"
//       containerElement={<div style={{ height: `100%` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//       onMapLoad={() => {}}
//       onMapClick={() => {}}
//       markers={locations}
//       onMarkerRightClick={() => {}}
//     />
//   );
// }

// import React, { Component, useRef } from "react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
// require("dotenv").config();

// //import { useSelector, useDispatch } from "react-redux";
// //import { fetchLocations } from "../slices/locationsSlice";
// //import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

// export class MapContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.locations = props.allLocations.data;
//   }

//   handleApiLoaded({ map, maps }) {
//     //   // this.locations.map((location) => {
//     //   //   console.log("THE HANDLER RAN");
//     //   //   console.log(location.longitude);
//     //   //   console.log(location.latitude);
//     //   // });
//     console.log("🎹🎹🎹🎹🎹", this.locations);
//     //   new maps.Marker({
//     //     map,
//     //     position: { lat: 37.786837, lng: -122.430101 },
//     // });
//   }

//   render() {
//     return (
//       <Map
//         google={this.props.google}
//         zoom={4}
//         onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
//       >
//         {console.log(`ALL LOCAtiON ${JSON.stringify(this.locations)}`)}
//         <Marker onClick={this.onMarkerClick} name={"locations[0].name"} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//           <div>
//             <h1>Test</h1>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
// })(MapContainer);

// withGoogleMap takes a react component and returns one. We call these "Higher Order Components"
// const MyMap = withGoogleMap((props) => (
//   <GoogleMap
//     ref={props.onMapLoad}
//     defaultZoom={4}
//     defaultCenter={{ lat: 25.7392, lng: -104.9903 }}
//     onClick={props.onMapClick}
//   >
//     {props.markers.map((marker) => (
//       <Marker
//         key={marker.key}
//         {...marker}
//         onRightClick={() => props.onMarkerRightClick(marker)}
//       />
//     ))}
//   </GoogleMap>
// ));

// // We use object destructuring here to shorten our code
// export default function Map(props) {
//   //const dispatch = useDispatch();
//   const locations = { lat: 27.7392, lng: -106.9903 };

//   // console.log("🗾", props.allLocations);

//   // useEffect(() => {
//   //   if (locations.length === 0) {
//   //     dispatch(fetchLocations());
//   //     console.log("😈😈", locations);
//   //   }
//   //   // eslint-disable-next-line react-hooks/exhaustive-deps
//   // }, []);

//   return (
//     <MyMap
//       className="test"
//       containerElement={<div style={{ height: `100%` }} />}
//       mapElement={<div style={{ height: `100%` }} />}
//       onMapLoad={() => {}}
//       onMapClick={() => {}}
//       markers={locations}
//       onMarkerRightClick={() => {}}
//     />
//   );
// }
