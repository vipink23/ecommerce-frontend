import axios from "axios";
import React, { useEffect, useState } from "react";
import Category from "./Category";

function HomePage() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/category").then((res) => {
      console.log(res.data);
      setCategory(res.data);
    });
  }, []);
  console.log(category, "productsssss");
  return (
    <div>
      {category?.map((cat) => {
        return <Category category={cat} />;
      })}
    </div>
  );
}

export default HomePage;
