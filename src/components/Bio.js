import { useRef } from "react";

const Bio = () => {
  const myRef = useRef();

  const executeScroll = () => myRef.current.scrollIntoView();
  // run this function from an event handler or an effect to execute scroll

  return (
    <>
      <div ref={myRef}></div>
      <button onClick={executeScroll}> Click to scroll </button>
    </>
  );
};
