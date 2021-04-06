import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import AddPhoneModal from "./AddPhoneModal";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../actions/modal";

const Header = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modalReducer.modal);
  return (
    <>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">CRUD</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <button
                className="btn btn-sucsess"
                onClick={() => {
                  dispatch(showModal());
                }}
              >
                ADD PHONE
              </button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {modal && <AddPhoneModal modal={modal} />}
    </>
  );
};

export default Header;
