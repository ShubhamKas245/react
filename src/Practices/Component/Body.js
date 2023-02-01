import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { restaurentList } from "../constants";
import RestaurentCard from "./Restaurent";
import Shimmer from "./Shimmer";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import UseContext from "../../utils/UseContext";



// Props - Properties
// no key < index key < unique key
const Body = () => {
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filterRestaurent, setFilterRestaurent] = useState([]);
  const [searchText, setSearchText] = useState("");
  const {user,setUser}=useContext(UseContext);

  async function getRestaurent() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.9097637&lng=75.8534111&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurents(json.data?.cards[2]?.data?.data?.cards);
    setFilterRestaurent(json.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurent();
  }, []);

  const isOnline=useOnline();
  if(!isOnline){
    return <h1>Offline, Please check your internet connection</h1>
  }

  // no render component (early return)
  if (!allRestaurents) return null;

  return allRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
        className="focus:bg-green-50 p-1 m-1"
          type="text"
          placeholder="Search here"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-purple-300 p-2 m-2 rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurents);
            setFilterRestaurent(data);
          }}
        >
          Search
        </button>
        <input value={user.name}  onChange={e=>setUser({
          name:e.target.value,
          email:"new Email",
        })
        }></input>
      </div>
      <div className="flex flex-wrap  m-5">
        {filterRestaurent.length === 0 ? (
          <h1>No filter data Matching</h1>
        ) : (
          filterRestaurent.map((each) => {
            return (
              <Link to={"/restaurent/" + each.data.id} key={each.data?.id}>
                <RestaurentCard {...each.data} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
