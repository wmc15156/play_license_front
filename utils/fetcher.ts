import axios from "axios";

const fetcher = (url, searchInput) =>
axios.get(url, { withCredentials: true }).then((response) => response.data);

export default fetcher;
