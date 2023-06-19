import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";

function HomePage() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/category").then((res) => {
      console.log(res.data, "dataaaaa");
      setCategory(res.data);
    });
  }, []);
  console.log(category, "productsssss");
  return (
    <div>
      {category?.map((cat, index) => {
        return <Category category={cat} key={index} />;
      })}
    </div>
  );
}

export default HomePage;
