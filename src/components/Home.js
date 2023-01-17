import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        img="model-s.jpg"
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        img="model-y.jpg"
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        img="model-3.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        img="model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Order Online for Touchless Delivery"
        img="solar-panel.jpg"
      />
      <Section
        title="Solars For New Roofs"
        description="Order Online for Touchless Delivery"
        img="solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description="Order Online for Touchless Delivery"
        img="accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
