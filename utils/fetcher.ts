import axios from "axios";

const fetcher = (url, searchInput) =>
  axios
    .get(url, {
      params: {
        q: searchInput,
        page: 1,
      },
    })
    .then((res) => res.data);

export default fetcher;
