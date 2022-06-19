import React, { FC } from "react";

interface ConfirmDialogProps {
  id: string;
  text: string;
  title: string;
  accept: {
    caption: string;
    onClick: () => {};
  };
}
const ConfirmDialog: FC<ConfirmDialogProps> = ({ id, title, text, accept }) => {
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
          <div className="modal-body">{text}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-grey"
              data-bs-dismiss="modal"
            >
              Abbrechen
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={accept.onClick}
            >
              {accept.caption}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
<<<<<<< HEAD
export default ConfirmDialog;
=======
export default ConfirmDialog;
>>>>>>> main
