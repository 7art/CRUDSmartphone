import { phoneExist } from "../../actions/phones";

const asyncValidate = async (values) => {
  const errors = {};
  const isEmpty = (obj) => {
    for (let key in obj) {
      return false;
    }
    return true;
  };
  const existTitle = await phoneExist(values.title).then((res) => res.count);

  if (existTitle) {
    errors.title = "That title is exist!";
  }

  return new Promise((resolve, reject) => {
    if (!isEmpty(errors)) {
      reject(errors);
    }

    resolve();
  });
};

export default asyncValidate;
