const initialState = {
    data: [],
    dataSlider: [],
  };
  
  export const fetchingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "DATA":
        return {
          ...state,
          data: action.payload,
        };
      case "DATASLIDE":
        return {
          ...state,
          dataSlider: action.payload,
        };
      default:
        return state;
    }
  };
  