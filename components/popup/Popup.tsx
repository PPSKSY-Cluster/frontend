import React, { FC } from "react";

interface PopupProps {
  id: string;
  title: string;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
}

const Popup: FC<PopupProps> = ({ id, title, children, buttons }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <i
              className="bi bi-x-lg"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">{children}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-grey"
              data-bs-dismiss="modal"
            >
              Abbrechen
            </button>
            {buttons}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
