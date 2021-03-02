export const homeInitialState = {
  new: [],
  hot: [],
  curation: [],
  coming: [],
};

export const homeReducer = (state, action) => {
  switch (action.type) {
    case "fetchHotPerformances": {
      return {
        ...state,
        hot: action.hot,
      };
    }
  }
  switch (action.type) {
    case "fetchNewPerformances": {
      return {
        ...state,
        new: action.new,
      };
    }
  }
  switch (action.type) {
    case "fetchCurations": {
      return {
        ...state,
        curation: action.curation,
      };
    }
  }
  switch (action.type) {
    case "fetchComingSoon": {
      return {
        ...state,
        coming: action.coming,
      };
    }
  }
};
