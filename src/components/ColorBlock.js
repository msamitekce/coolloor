import randomColor from "randomcolor";
import "../App.css";
import styled from "styled-components";

const ColoredBlock = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.color};
`;

const ColorBlock = () => {
  const randomizedColor = randomColor();

  return (
    <ColoredBlock color={randomizedColor}>
      <h2>{randomizedColor}</h2>
    </ColoredBlock>
  );
};

export default ColorBlock;
