import React from "react";

export default function ModalDetailTransaksi({show, onCancel, selected}) {
  const API_URL = process.env.REACT_APP_API_URL
  return (
    <>
      <div className={`modal text-left modal-borderless ${show ? '' : 'fade'}`} tabIndex="-1" role="dialog" aria-labelledby="modal-hapus-label" aria-hidden="true" style={show ? {display: 'block'} : {}}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <div className="row">
                <div className="col-12">
                  No.Rekening
                  <hr/>
                </div>
                <div className="col-12">
                  <h2>131177194455</h2>
                </div>
                <div className="col-12">
                  Bukti Pembayaran
                  <hr/>
                </div>
                <div className="col-12">
                  <div className="row justify-content-center">
                    <div className="col-6 align-item-center" >
                      <svg style={{marginTop: '60px', marginLeft: '60px'}} xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                      </svg>
                    </div>
                    {selected && (
                      <div className="col-6">
                        <img src={`${API_URL}/${selected?.foto_bukti}`} alt="bukti transaksi" style={{maxWidth: '230px'}}></img>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer justify-content-center">
              <button type="button" className="btn btn-danger ml-1" data-bs-dismiss="modal">
                <i className="bx bx-check d-block d-sm-none"></i>
                <span className="d-none d-sm-block">Download PDF</span>
              </button>
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