import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CitiesContext = createContext();
const initialState = {
  cities: [],
  loading: false,
  currcity: {},
  error: "",
};

function reducer(state, action) {
  //we cannot put api request here because only pure functions can be out inside the reducer.when async data and cxode is involved

  switch (action.type) {
    case "city/loaded":
      return { ...state, loading: false, currcity: action.payload };

    case "loading":
      return { ...state, loading: true };
    //cities loaded first
    case "cities/loaded":
      return { ...state, loading: false, cities: action.payload };

    case "city/created":
      return { ...state, loading: false, cities: [...state.cities, action.payload] ,currcity: action.payload};

    case "city/deleted":
      return {
        ...state,
        loading: false,
        cities: state.cities.filter((city) => city.id != action.payload),
        currcity:{}
      };

    case "rejected":
      return { ...state, loading: false, error: action.payload };

    default:
      throw new Error("Invalid action");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, loading, currcity,error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [cities, setcities] = useState([]);
  // const [loading, setloading] = useState(false);
  // const [currcity, setcurrcity] = useState({});

  useEffect(function () {
    async function getcities() {
      dispatch({ type: "loading" });
      try {
        const cities = await fetch("http://localhost:3030/cities");
        if (!cities.ok) {
          throw new Error("Failed to fetch cities");
        }
        const res = await cities.json();
        dispatch({ type: "cities/loaded", payload: res });
      } catch (err) {
        // console.error(err);
        dispatch({
          type: "rejected",
          payload: "Errro while loading the cities....",
        });
      }
    }
    getcities();
  }, []);

const getCity= useCallback( async function getcity(id) {
    if(currcity.id==Number(id))return;
    dispatch({ type: "loading" });
    try {
      const cities = await fetch(`http://localhost:3030/cities/${id}`);
      if (!cities.ok) {
        throw new Error("Failed to fetch cities");
      }
      const res = await cities.json();
      dispatch({ type: "city/loaded", payload: res });
    } catch (err) {
      console.error(err);
      dispatch({ type: "rejected", payload: "Err while loasing city details" });
    }
  },[currcity.id]);

  async function createcity(newcity) {
    dispatch({ type: "loading" });

    try {
      const res = await fetch(`http://localhost:3030/cities`, {
        method: "POST",
        body: JSON.stringify(newcity),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      // setcities((cities) => [...cities, data]);
      dispatch({ type: "city/created", payload: data });
    } catch (err) {
      alert("Some error deleting the city: " + err.message);
      dispatch({ type: "rejected", payload: "Error while creating city" });
    }
  }

  async function deletecity(id) {
    dispatch({ type: "loading" });

    try {
      await fetch(`http://localhost:3030/cities/${id}`, {
        method: "DELETE",
      });
      // setcities((cities) => cities.filter((city) => city.id != id));
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      console.error(err);
      dispatch({ type: "rejected", payload: "Error while deleting city" });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        loading,
        getCity,
        currcity,
        createcity,
        deletecity,
      }}>
      {children}
    </CitiesContext.Provider>
  );
}

function usecities() {
  const context = useContext(CitiesContext);
  if (context == undefined)
    throw new Error("CitiesContext was used outside scope of cities provider");
  return context;
}

export { CitiesProvider, usecities };
