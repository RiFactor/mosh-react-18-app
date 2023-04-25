import { useEffect, useRef } from "react";
import EffectCleanUp from "./EffectCleanUp";
import ProductDisplay from "./ProductDisplay";
import FetchingDataAxios from "./FetchingDataAxios";
import FetchingData from "./FetchingDataPractise";
import FetchingDataAxiosTryCatch from "./FetchingDataAxiosTryCatch";
import FetchingDataPractise from "./FetchingDataPractise";

const ConnectingToTheBackend = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      // QUESTION what is ref.current ?
      ref.current.focus();
    }
  });

  useEffect(() => {
    document.title = "Server";
  });

  return (
    <div>
      <h3>Connecting To The Backend</h3>
      <div>
        <label>First Name</label>
        <input ref={ref} type="text" className="form-control"></input>
        {/* <ProductDisplay /> */}
        {/* <EffectCleanUp /> */}
        <FetchingDataAxios />
        {/* <FetchingDataAxiosTryCatch />
        <FetchingDataPractise /> */}
      </div>
    </div>
  );
};

export default ConnectingToTheBackend;
