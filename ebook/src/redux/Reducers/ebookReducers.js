const initialState = {
  ebook: [],
};

export const ebookReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return { ...state, ebook: action.payload };
    default:
      return state;
  }
};
