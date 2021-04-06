import React, { useState } from "react";
import { updatePhone, deletePhone } from "../actions/phones";
import { useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const PhoneCard = ({ id: index, title, price, description, image }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [inputs, setInputs] = useState({
    title,
    price,
    description,
    image,
  });

  const updateFormValue = ({ target: { name, value } }) =>
    setInputs((inputObj) => ({ ...inputObj, [name]: value }));

  const toggleEditMode = () => setEditMode((mode) => !mode);

  const updatePhoneData = () => {
    dispatch(updatePhone({ ...inputs }, index));
    toggleEditMode();
  };

  const deletePhoneFromList = () => {
    dispatch(deletePhone(index));
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {!editMode && title}
          {editMode && (
            <Form.Control
              type="text"
              required
              value={inputs.title}
              name="title"
              placeholder="Title"
              onChange={(e) => updateFormValue(e)}
            />
          )}
        </Card.Title>
        <Card.Text>
          {!editMode && price + `$`}
          {editMode && (
            <Form.Control
              type="text"
              required
              value={inputs.price}
              name="price"
              placeholder="Price"
              onChange={(e) => updateFormValue(e)}
            />
          )}
        </Card.Text>
        <Card.Text>
          {!editMode && description}
          {editMode && (
            <Form.Control
              required
              as="textarea"
              rows={3}
              value={inputs.description}
              name="description"
              placeholder="Description"
              onChange={(e) => updateFormValue(e)}
            />
          )}
        </Card.Text>

        {editMode && (
          <Card.Text>
            <Form.Control
              type="text"
              value={inputs.image}
              name="image"
              placeholder="image URL"
              onChange={(e) => updateFormValue(e)}
            />
          </Card.Text>
        )}
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          {!editMode && (
            <>
              <button
                type="button"
                className="btn btn-outline-info mr-2"
                onClick={toggleEditMode}
              >
                Edit
              </button>
            </>
          )}

          {editMode && (
            <>
              <button
                type="button"
                className="btn btn-outline-success  mr-2"
                onClick={updatePhoneData}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={deletePhoneFromList}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary mr-2"
                onClick={toggleEditMode}
              >
                Cancel
              </button>
            </>
          )}
        </small>
      </Card.Footer>
    </Card>
  );
};

export default PhoneCard;
