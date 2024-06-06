import React from "react";
import { useDispatch } from "react-redux";
// import { clearUser } from "../store/slices/UserSlice";
import styled from "styled-components";
import { clearUser } from "../store/actions";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearAllUsers = () => {
    return dispatch(clearUser());
  };

  return (
    <Wrapper>
      <button className="btn clear-btn" onClick={() => clearAllUsers()}>
        Clear Users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;

export default DeleteAllUser;
