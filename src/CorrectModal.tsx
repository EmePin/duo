import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLE = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 1000,
  width: "100%",
  maxWidth: "100%",
  height: "calc(100vh - 100px)",
  overflow: "hidden",
  maxHeight: "695px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alginItems: "center",
  textAlign: "center"
};

const POPUP_STYLE = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignContent: "center",
  alginItems: "center",
  textAlign: "center"
};

const BACKGROUND_STYLE = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(15, 15, 15, 0.6)",
  opacity: 0.1,
  zIndex: 1000
};

interface CorrectProps {
  open: boolean;
  children: any;
}

const CorrectModal: React.FC<CorrectProps> = ({ open, children }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className="background" style={BACKGROUND_STYLE} />
      <div className="settingsPopUp" style={MODAL_STYLE}>
        <div className="mainPopUp" style={POPUP_STYLE}>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default CorrectModal;
