function Popup({ prompt }) {
  function handleConfirm() {
    console.log("confirm clicked");
  }
  function handleCancel() {
    console.log("cancel clicked");
  }
  return (
    <>
      <div className="popup">
        <span>{prompt}</span>
        <div className="popup_btns">
          <button className="popup_btn" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="popup_btn--cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
}

export default Popup;
