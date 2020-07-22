const initialState = {
  coords: null,
  data: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_WEATHER_DATA':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
