import API from "../api";
export const actionTypes = {
  CREATE_PHONE: "CREATE_PHONE",
  GET_PHONE: "GET_PHONE",
  UPDATE_PHONE: "UPDATE_PHONE",
  DELETE_PHONE: "DELETE_PHONE",
};

export const createPhone = (phone) => async (dispatch) => {
  try {
    const data = {
      title: phone.title,
      price: +phone.price,
      description: phone.description,
      image: phone.image || " ",
    };

    API.post(`/phones`, data).then((res) => {
      const id = res.data.id;
      API.get(`/phones/${id}`)
        .then((res) => {
          dispatch({ type: actionTypes.CREATE_PHONE, payload: res.data });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  } catch (error) {
    console.log(error);
  }
};

export const getPhones = () => async (dispatch) => {
  try {
    API.get(`/phones`).then((res) => {
      dispatch({ type: actionTypes.GET_PHONE, payload: res.data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const updatePhone = (phone, index) => async (dispatch) => {
  try {
    const data = {
      id: index,
      title: phone.title,
      price: +phone.price,
      description: phone.description,
      image: phone.image || " ",
    };

    API.put(`/phones/${index}`, data).then((res) => {
      return dispatch({ type: actionTypes.UPDATE_PHONE, payload: data });
    });
  } catch (error) {
    console.log(error);
  }
};

export const deletePhone = (id) => async (dispatch) => {
  try {
    API.delete(`/phones/${id}`).then((res) => {
      dispatch({ type: actionTypes.DELETE_PHONE, payload: id });
    });
  } catch (error) {
    console.log(error);
  }
};

export const phoneExist = (title) => {
  return API.get(`/search?title=${title}`).then((response) => {
    return response.data;
  });
};
