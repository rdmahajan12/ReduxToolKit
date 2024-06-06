import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { deleteUser } from "../store/slices/UserSlice";

const DisplayUser = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => {
    return state.users;
  });

  const deleteUserName = (id) => {
    return dispatch(deleteUser(id));
  };

  return (
    <Wrapper>
      {selector.map((user, id) => {
        return (
          <li key={id}>
            {user}
            <button className="btn-delete" onClick={() => deleteUserName(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DisplayUser;
