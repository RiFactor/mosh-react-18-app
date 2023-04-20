import { useEffect } from "react";

const EffectCleanUp = () => {
  const connect = () => console.log("Connecting");
  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    connect();

    // clean up code provided
    return () => disconnect(); // QUESTION -- why does this need an anon fn to be passed, can it just be return disconnect()
    // QUESTION -- & how does React know that return means this is when it gets unmounted
  }, []);

  return <div>EffectCleanUp</div>;
};

export default EffectCleanUp;
