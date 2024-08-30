"use client";

import { CSSProperties } from "react";
import RingLoader from "react-spinners/RingLoader";

const override: CSSProperties = {
  display: "block",
  margin: "50px auto",
  borderColor: "red",
};

function Loader() {
  return (
    <div className="sweet-loading">
      <RingLoader
        color="#0080FF"
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
