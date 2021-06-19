export const fetchData = async (setReturnedData,setReturnedError) => {
  const resource = "https://jsonplaceholder.typicode.com/posts";

  await fetch(resource, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => setReturnedData(data))
    .catch((err) => setReturnedError(err));
};
