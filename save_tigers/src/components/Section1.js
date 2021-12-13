import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 70vh;
  background-color: #dd7801;
`;

const Container = styled.div`
  width: 90%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2{
    font-weight: 500;
    font-size: 40px;
    text-align: center;
    line-height: 60px;
  }
`;

function Section1() {
  return (
    <Wrapper>
      <Container>
        <h2>The wild population is estimated between the 400 and 500 animals, which are mostly grouped into the five national parks of Sumatra Island</h2>
      </Container>
    </Wrapper>
  );
}

export default Section1;
