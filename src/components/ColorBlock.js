import "../App.css";
import styled from "styled-components";

const ColoredBlock = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props["color"]};
`;

const ColorBlock = (props) => {
  console.log(props);
  return (
    <ColoredBlock color={props["color"]}>
      <h4>{props.color}</h4>
    </ColoredBlock>
  );
};

export default ColorBlock;
