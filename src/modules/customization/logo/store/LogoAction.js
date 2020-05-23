export function setLogoAction(logo) {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGO",
      payload: logo,
    });
  };
}
