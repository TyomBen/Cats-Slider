import { URL, url } from "../../Components/Utills/constants";

export const gettingData = (payload) => {
  return {
    type: "DATA",
    payload: payload,
  };
};

export const gettingDataSlides = (payload) => {
  return {
    type: "DATASLIDE",
    payload: payload,
  };
};

export const fetchingData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL}breeds/`);
      const data = await response.json();
      dispatch(gettingData(data));
    } catch (eror) {
      console.log(eror);
    }
  };
};

export const fetchingDataSlides = (id) => {
  return async (dispatch) => {
    {
      console.log(id);
    }
    try {
      const response = await fetch(
        `${URL}images/search?limit=8&size=full&breed_id=${id}&sub_id=demo-20efd8`
      );
      const dataSlide = await response.json();
      dispatch(gettingDataSlides(dataSlide));
    } catch (eror) {
      console.log(eror);
    }
  };
};
