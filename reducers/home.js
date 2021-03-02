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

    case "fetchNewPerformances": {
      return {
        ...state,
        new: action.new,
      };
    }

    case "fetchCurations": {
      return {
        ...state,
        curation: action.curation,
      };
    }

    case "fetchComingSoon": {
      return {
        ...state,
        coming: action.coming,
      };
    }
  }
};
