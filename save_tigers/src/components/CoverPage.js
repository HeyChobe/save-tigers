import React from "react";
import styled from "styled-components";
import img from "../img/coverpage.jpeg";

const CoverWrapper = styled.section`
  height: 90vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;


  h1 {
    color: white;
    padding: 0;
    width: 300px;
    height: auto;
    line-height: 100px;
    margin-left: 5%;
    font-family: "Roboto";
    font-size: 80px;
  }
`;

function CoverPage() {
  return (
    <CoverWrapper>
      <h1>SAVE SUMATRA TIGERS</h1>
    </CoverWrapper>
  );
}

export default CoverPage;
