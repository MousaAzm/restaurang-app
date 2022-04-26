import http from "../DataAPI";

const getAllDishes = () => {
  return http.get("/dishes");
};

const exportedObject = {
  getAllDishes
};

export default exportedObject;
