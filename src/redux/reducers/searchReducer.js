const initialState = {
  value: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return { ...state, value: action.value };

    default:
      return state;
  }
};
