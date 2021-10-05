import styled from "styled-components";
import ColorBlock from "./ColorBlock";
const ColorsContainered = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ColorsContainer = () => {
  return (
    <ColorsContainered>
      <ColorBlock />
      <ColorBlock />
      <ColorBlock />
    </ColorsContainered>
  );
};

export default ColorsContainer;
