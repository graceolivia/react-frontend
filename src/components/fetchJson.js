const fetchJson = async () => {
  return await fetch("http://localhost:5000/react")
    .then((response) => response.json())
    .then(
      (data) => {
        return data;
      },
      (error) => {
        return error;
      }
    );
};

export default fetchJson;
