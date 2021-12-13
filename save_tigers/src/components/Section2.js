import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 70vh;
  background-color: black;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 500;
    font-size: 40px;
    color: white;
    text-align: center;
    line-height: 60px;
  }
`;

function Section2() {
  return (
    <Wrapper>
      <Container>
        <h2>With your donation, you will contribute to the feeding of the felines, the safety and reconstruction of their habitat. DONATE NOW!</h2>
      </Container>
    </Wrapper>
  );
}

export default Section2;
