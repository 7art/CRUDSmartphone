import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import asyncValidate from "./asyncValidate";

const renderField = ({
  input,
  label,
  type,
  meta: { asyncValidating, touched, error },
}) => (
  <div className="form-group">
    <div>
      <input
        {...input}
        type={type}
        placeholder={label}
        className={`form-control ${
          touched ? (error ? " is-invalid" : " is-valid") : ""
        }`}
      />
      {touched && error && <div className="invalid-feedback">{error}</div>}
    </div>
  </div>
);

const AddPhoneForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, handleClose } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" type="text" component={renderField} label="Title" />
      <Field name="price" type="text" component={renderField} label="Price" />
      <Field
        name="description"
        type="text"
        component={renderField}
        label="Description"
      />
      <Field name="image" type="text" component={renderField} label="Image" />
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}
        >
          Add Phone
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          disabled={pristine || submitting}
          onClick={reset}
        >
          Clear Values
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          disabled={submitting}
          onClick={handleClose}
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "addPhone",
  validate,
  asyncValidate,
  asyncBlurFields: ["title"],
})(AddPhoneForm);
