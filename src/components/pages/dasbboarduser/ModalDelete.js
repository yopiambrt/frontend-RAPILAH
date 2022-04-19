import React from "react";

export default function DeleteModal({show, onDelete, onCancel}) {
  return (
    <>
      <div className={`modal text-left modal-borderless ${show ? '' : 'fade'}`} tabIndex="-1" role="dialog" aria-labelledby="modal-hapus-label" aria-hidden="true" style={show ? {display: 'block'} : {}}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-body text-center">Apakah anda yakin akan menghapus ?</div>
            <div className="modal-footer justify-content-center">
              <button onClick={onDelete} type="button" className="btn btn-primary ml-1" data-bs-dismiss="modal">
                <i className="bx bx-check d-block d-sm-none"></i>
                <span className="d-none d-sm-block">Ya</span>
              </button>
              <button onClick={onCancel} type="button" className="btn btn-light-secondary" data-bs-dismiss="modal">
                <i className="bx bx-x d-block d-sm-none"></i>
                <span className="d-none d-sm-block">Tidak</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}