export const getData = () => {
  const apiUrl = "http://127.0.0.1:8000/api";
  const data = await fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));

  return data;
};
