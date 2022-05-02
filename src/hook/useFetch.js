import { useEffect, useState } from "react";
import axios from "../api/axios";

const useFetch = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function getFoods() {
      await axios.get("/foods").then(
        (response) => {
          setFoods(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    getFoods();
  }, []);
  return [foods, setFoods];
};

export default useFetch;
