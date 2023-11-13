import React from "react";
import styled from "styled-components";

const ToastContext = ({ message }) => {
  console.log("message", message);
  return <ToastContainer>{message}</ToastContainer>;
};

export default ToastContext;

const ToastContainer = styled.div`
  /* position: fixed; */
  bottom: 20px;
  left: 50%;
  /* transform: translateX(-10%); */
  background-color: black;
  color: white;
  padding: 10px;
  border-radius: 10px;
  z-index: 1000;
`;
