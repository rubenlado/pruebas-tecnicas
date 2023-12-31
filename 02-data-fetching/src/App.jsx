import React from "react";
import { useState, useEffect } from "react";
import { fetchV2 } from "./utils/fetchUtils";

export const App = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    fetchV2("https://catfact.ninja/fact").then(({ fact }) => {
      const keyword = fact?.split(" ")[0];
      fetchV2(`https://cataas.com/cat/says/${keyword?.toLowerCase()}`).then(
        (res) => {
          setImage(res);
        }
      );
    });
  }, []);
  return <>{image || "No cat image retrieved yet"}</>;
};
