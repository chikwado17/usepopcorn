import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import StarRating from "./components/StarRating";

// const Text = () => {
//   const [rated, setRated] = useState(0);
//   return (
//     <>
//       <StarRating maxRating={5} onSetRated={setRated} />
//       <p>This movie was rated {rated} stars</p>
//     </>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />

    <Text /> */}
  </React.StrictMode>
);
