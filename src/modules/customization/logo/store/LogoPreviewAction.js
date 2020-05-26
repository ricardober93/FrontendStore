export function setLogoPreviewAction(logoPreview) {
  return (dispatch) => {
    dispatch({
      type: "SET_LOGO_PREVIEW",
      payload: logoPreview,
    });
  };
}
