const initialState = {
  test: '',
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: action.payload.test,
      };
    default:
      return state;
  }
};

export default testReducer;
