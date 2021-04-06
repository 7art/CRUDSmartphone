import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { createPhone } from "../actions/phones";
import { hideModal } from "../actions/modal";
import AddPhoneForm from "./reduxForm/AddPhoneForm";

const AddPhoneModal = ({ modal }) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(modal);

  const handleClose = () => {
    setShow(false);
    dispatch(hideModal());
  };

  const addPhone = (phone) => {
    dispatch(createPhone(phone));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} animation={true}>
      <Modal.Header>
        <Modal.Title>New Phone</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddPhoneForm onSubmit={addPhone} handleClose={handleClose} />
      </Modal.Body>
    </Modal>
  );
};

export default AddPhoneModal;
