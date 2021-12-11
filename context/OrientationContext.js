import React, { createContext, useMemo } from "react";
import { useWindowDimensions } from "react-native";

export const PortraitContext = createContext(null);

const OrientationContext = (props) => {
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const isPortrait = useMemo(
    () => windowHeight > windowWidth,
    [windowHeight, windowWidth]
  );

  return (
    <PortraitContext.Provider value={{ isPortrait, windowHeight, windowWidth }}>
      {props.children}
    </PortraitContext.Provider>
  );
};

export default OrientationContext;
