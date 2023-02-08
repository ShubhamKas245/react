import { useState, useEffect } from "react";
import { FETCH_URL } from "../Practices/constants";

const useRestaurent = (id) => {
  const [restaurent, setRestaurent] = useState(null);

  // Get data from API
  async function getRestaurentInfo() {
    const data = await fetch(FETCH_URL + id);
    const json = await data.json();
    setRestaurent(json.data);
    console.log(json);
  }

  useEffect(() => {
    getRestaurentInfo();
  },[] );

  // return restaurent data
  return restaurent;
};
export default useRestaurent;
