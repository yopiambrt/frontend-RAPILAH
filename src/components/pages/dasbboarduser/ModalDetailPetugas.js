import React from "react";

export default function ModalDetailPetugas({show, onCancel, selected}) {
  return (
    <>
      <div className={`modal text-left modal-borderless ${show ? '' : 'fade'}`} tabIndex="-1" role="dialog" aria-labelledby="modal-hapus-label" aria-hidden="true" style={show ? {display: 'block'} : {}}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input type="text" className="form-control" value={selected?.name}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Jabatan</label>
                <select className="form-select">
                  <option value="Admin" selected={`${selected?.role}`.toLowerCase() === 'admin'}>Admin</option>
                  <option value="Pengguna" selected={`${selected?.role}`.toLowerCase() === 'pengguna'}>Petugas</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" value={selected?.username}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" value={selected?.email}/>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button onClick={onCancel} type="button" className="btn btn-success" data-bs-dismiss="modal">
                <i className="bx bx-x d-block d-sm-none"></i>
                <span className="d-none d-sm-block">Selesai</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}