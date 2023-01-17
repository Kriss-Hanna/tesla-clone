import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, img }) {
  return (
    <Wrap bgImgage={img}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>Custom Order</LeftButton>
            <RightButton>Existing Inventory</RightButton>
          </ButtonGroup>
        </Fade>

        <DownArrow src="./assets/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-image: ${({ bgImgage }) => `url("./assets/${bgImgage}")`};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
  z-index: 10;
`;

const Buttons = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  margin-bottom: 8px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  color: rgba(23, 26, 32, 0.8);
  background-color: white;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  cursor: pointer;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`;
