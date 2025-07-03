function Popup({ prompt, closePopup }) {
  return (
    <>
      <div className="popup">
        <span>{prompt}</span>
        <div className="popup_btns">
          <button className="popup_btn">Confirm</button>
          <button className="popup_btn--cancel" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </div>
      <div className="backdrop" onClick={closePopup}></div>
    </>
  );
}

export default Popup;
