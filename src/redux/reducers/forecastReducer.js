const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FORECAST':
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
