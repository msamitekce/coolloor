import React, { createContext, useState } from "react";
import randomColor from "randomcolor";

export const ColorContext = createContext();

const ColorContextProvider = (props) => {
  const [colors, setColors] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

//     console.log(window.location.pathname)

  return (
    <ColorContext.Provider value={{ colors }}>
      {props.children}
    </ColorContext.Provider>
  );
};

export default ColorContextProvider;
