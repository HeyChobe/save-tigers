import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;
  min-width: 500px;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    height: 90%;
    width: 100%;
    border: 2px solid black;
    border-radius: 10px;

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

      input, textarea {
        height: 40px;
        border: 1px solid #dd7801;
        border-radius: 10px;
        padding-left: 10px;
      }

      textarea{
        height: 80px;
      }

      .button{
        margin-top: 20px;
        
        button{
            background-color: black;
            color: white;
            border: 0;
            height: 40px;
            width: 80px;
            cursor: pointer;
        }
      }
    }
  }
`;

function ContactUs() {

  const onClickHandler = async (e) => {
    e.preventDefault();
    let fullname = document.querySelector(".contact-form .fullname").value;
    let email = document.querySelector(".contact-form .email").value;
    let detail = document.querySelector(".contact-form .msg").value;

    if (fullname === "" || email === "" || detail === "") {
      alert("No se permiten campos vacíos!");
    } else {
      const response = await fetch(
        `/api/v1/message`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullname, email, detail }),
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
          alert("Mensaje Enviado con éxito");
          document.querySelector(".contact-form .fullname").value = "";
          document.querySelector(".contact-form .email").value = "";
          document.querySelector(".contact-form .msg").value = "";
        }
      }
    }
  };

  return (
    <Wrapper>
      <Container>
        <form className="contact-form">
          <div className="wrapper">
            <h3>CONTACT US</h3>
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
            <p>Detail</p>
            <textarea
              className="msg"
              name="sms"
              rows="6"
              placeholder="Type here..."
            />
            <div className="button">
                <button onClick={onClickHandler}>SEND</button>
            </div>
          </div>
        </form>
      </Container>
    </Wrapper>
  );
}

export default ContactUs;
