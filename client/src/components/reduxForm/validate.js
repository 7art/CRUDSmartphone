const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.price) {
    errors.price = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (isNaN(Number(values.price))) {
    errors.price = "Must be a number";
  }
  return errors;
};

export default validate;
