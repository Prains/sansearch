import { useState } from "react";

const useInput = (initial) => {
  const [state, setState] = useState(initial);
  const onChange = (e) => {
    setState(e.target.value);
  };
  return [state, onChange];
};

export default useInput;
