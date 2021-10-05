import { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../context/ColorContext";
import ColorBlock from "./ColorBlock";

const ColorsContainered = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ColorsContainer = () => {
  const { colors } = useContext(ColorContext);

  return (
    <ColorsContainered>
      {colors.map((randomColor, index) => {
        return <ColorBlock key={index} color={randomColor} />;
      })}
    </ColorsContainered>
  );
};

export default ColorsContainer;
