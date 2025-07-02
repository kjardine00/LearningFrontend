function Popup() {
    return (
        <div>
        <div className="popup">
            <span>Are you sure?</span>
            <div className="popup_btns">
                <button className="popup_btn">Confirm</button>
                <button className="popup_btn--cancel">Cancel</button>
            </div>
        </div>
        <div className="backdrop"></div>
        </div>
    )
}

export default Popup;