import React from "react";
import styled from "styled-components";
import img from "../img/coverpage2.jpeg";

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

  .container-info {
    width: 90%;
    margin: auto;
    height: 100%;
    display: flex;
    color: white;
    justify-content: space-around;
    align-items: center;

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      border-right: 3px solid white;

      h2 {
        font-weight: 700;
        font-size: 80px;
        margin-right: 20px;
      }
    }

    .info {
      display: flex;
      justify-content: center;
      align-items: center;

      p{
        font-weight: 300;
        font-size: 40px;
      }
    }
  }

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

function CoverPage1() {
  return (
    <CoverWrapper>
      <div className="container-info">
        <div className="title">
          <h2>THREAT</h2>
        </div>
        <div className="info">
          <p>Their greatest threat of extinction is the deterioration of their habitat, despite being protected places</p>
        </div>
      </div>
    </CoverWrapper>
  );
}

export default CoverPage1;
