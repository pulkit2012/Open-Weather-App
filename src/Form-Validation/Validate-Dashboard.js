const validate = (city) => {
  if (city) {
    if (!/[^a-zA-Z]/.test(city)) {
      return true;
    } else {
      alert("City Names Should Not Contain Numerical Values");
    }
  } else {
    alert("Fields Must Not Be Empty");
  }
};

export default validate;
