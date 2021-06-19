import { useEffect, useState } from "react";

import { fetchData } from "../../services/api";

const Posts = () => {
  const [returnedData, setReturnedData] = useState([]);
  const [returnedError, setReturnedError] = useState("");

  useEffect(() => {
    fetchData(setReturnedData, setReturnedError);
  }, []);

  return (
    <>
      {returnedData.map((el, i) => (
        <p key={i}>{el.title}</p>
      ))}

      {returnedError}
    </>
  );
};

export default Posts;
