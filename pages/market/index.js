import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config/API_URL";
import List from "../../src/component/List";
import Category from "../../src/component/Category";

const Market = () => {
  const [list, setList] = useState([]);
  const getList = () => {
    axios.get(API_URL.market.allItems).then((res) => {
      setList(res.data);
    });
  };

  useEffect(() => {
    getList();
  });

  return (
    <div>
      {/* category */}
      <Category />
      {/* filter bar */}
      <List />
    </div>
  );
};

export default Market;
