const url = "https://jsonplaceholder.typicode.com/susers";

const getUserData = async () => {
  const res = await fetch(url);

  if (res.status !== 200) {
    throw new Error(res.toString()); // QUESTION -- is toString() correct to resolve TS error?
  }

  const data = await res.json();

  return data;
};

export default getUserData;
