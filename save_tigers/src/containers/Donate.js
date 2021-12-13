import React from "react";
import styled from "styled-components";
import img from "../img/donate.jpeg";

const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .info {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)),
      url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-width: 50%;
    height: 500px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    border-radius: 15px;

    h3 {
      margin-left: 20px;
      color: white;
      font-size: 50px;
      width: 300px;
    }
  }

  form {
    width: 45%;
    height: 500px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;

    .wrapper {
      height: 100%;
      width: 90%;
      margin: auto;
      display: flex;
      flex-direction: column;

      h3 {
        width: 100%;
        color: #dd7801;
        text-align: center;
        font-size: 50px;
        margin: 0;
        margin-top: 30px;
      }

      p {
        font-size: 20px;
        color: black;
        font-weight: 500;
        margin: 0;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      input {
        height: 40px;
        border: 1px solid #dd7801;
        border-radius: 10px;
        padding-left: 10px;
      }

      .bottom_input {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        .left {
          width: 45%;

          input {
            width: 100%;
            height: 90px;
            font-size: 50px;
          }
        }

        .right {
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;

          button {
            width: 100%;
            height: 95px;
            background-color: black;
            color: white;
            border: 0;
            border-radius: 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;

function Donate() {
  const onClickHandler = async (e) => {
    e.preventDefault();
    let fullname = document.querySelector(".donation-form .fullname").value;
    let email = document.querySelector(".donation-form .email").value;
    let amount = document.querySelector(
      ".donation-form .bottom_input .left .amount"
    ).value;

    if (fullname === "" || email === "" || amount === "") {
      alert("No se permiten campos vacíos!");
    } else {
      const response = await fetch(
        `/api/v1/donation`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullname, email, amount }),
        }
      );
      const responseJSON = await response.json();
      if (!responseJSON) {
        alert("Error al conectar con el servidor");
      } else {
        if (responseJSON.error) {
          console.log(responseJSON.error);
          alert("Error al conectar con el servidor");
        } else {
          alert("Gracias por tu donación!!");
          document.querySelector(".donation-form .fullname").value = "";
          document.querySelector(".donation-form .email").value = "";
          document.querySelector(
            ".donation-form .bottom_input .left .amount"
          ).value = "";
        }
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <div className="info">
          <h3>SAVE THE TIGERS</h3>
        </div>
        <form className="donation-form">
          <div className="wrapper">
            <h3>DONATE!</h3>
            <p>Full Name</p>
            <input
              className="fullname"
              type="text"
              placeholder="e.g. Carlos Cortez"
              name="fullName"
            />
            <p>Email</p>
            <input
              className="email"
              type="email"
              placeholder="e.g. myemail@gmail.com"
              name="email"
            />
            <div className="bottom_input">
              <div className="left">
                <p>Amount</p>
                <input
                  className="amount"
                  type="number"
                  placeholder="0"
                  name="amount"
                />
              </div>
              <div className="right">
                <button onClick={onClickHandler}>SAVE THE TIGERS</button>
              </div>
            </div>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}

export default Donate;
