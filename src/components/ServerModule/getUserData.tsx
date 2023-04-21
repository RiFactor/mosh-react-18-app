const url = "https://jsonplaceholder.typicode.com/users";

const getUserData = async () => {
  //QUESTION how I pass signal here to cancel a fetch request, attempted caused a double cancellation
  const res = await fetch(url);

  if (res.status !== 200) {
    throw new Error(res.toString()); // QUESTION -- is toString() correct to resolve TS error?
  }

  const data = await res.json();

  return data;
};

export default getUserData;
