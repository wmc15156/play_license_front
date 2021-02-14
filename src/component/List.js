import React, { useEffect, useState } from "react";
// import Image from "next/image";
import axios from "axios";
import { API_URL } from "../../config/API_URL";
import ListItems from "./ListItems";

const List = () => {
  const [list, setList] = useState([]);

  const getList = () => {
    axios.get(API_URL.home.hotItems).then((res) => {
      // console.log(res.data);
      setList(res.data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <ListItems list={list} />
    </div>
  );
};

export default List;
