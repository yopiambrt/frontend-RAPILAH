import React from "react"
import { useAuth } from "../../../context/AppContext"
import DashboardLayout from '../../../layouts/Dashboard'

export default function Profile(props){
  const { user } = useAuth()

  return (
    <DashboardLayout {...props}>
      <div className="page-content">
          <section className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-12 col-md-4 mb-3">
                          <div className="row">
                            <div className="col-12 shadow-sm mb-2">
                              <h3 className="text-primary">Foto Profil</h3>
                            </div>
                            <div className="col-12 shadow-sm py-5 px-3">
                              <div className="overflow-hidden mx-auto rounded-pill mb-5 d-flex justify-content-center align-items-center" style={{maxWidth: '200px'}}>
                                <img className="w-100" src="assets/images/faces/7.jpg" alt="Foto Profile" />
                              </div>
                              <div className="text-center">
                                <h2>{user?.user?.name}</h2>
                                <h5><i className="bi bi-circle-fill fs-6 text-success"></i> Online</h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-8">
                          <div className="row">
                            <div className="col-12 shadow-sm">
                              <h3 className="text-primary">Detail Akun</h3>
                            </div>
                            <div className="col-12 shadow-sm">
                              <div className="table-responsive">
                                <table className="table mb-0 table-lg">
                                  <tbody>
                                    <tr>
                                      <td className="font-bold">Nama Lengkap</td>
                                      <td>{user?.user?.name}</td>
                                    </tr>
                                    <tr>
                                      <td className="font-bold">Organisasi</td>
                                      <td> - </td>
                                    </tr>
                                    <tr>
                                      <td className="font-bold">Lokasi</td>
                                      <td>{user?.address?.alamat}</td>
                                    </tr>
                                    <tr>
                                      <td className="font-bold">Email</td>
                                      <td>{user?.user?.email}</td>
                                    </tr>
                                    <tr>
                                      <td className="font-bold">No. Telp</td>
                                      <td>{user?.user?.no_hp}</td>
                                    </tr>
                                    <tr>
                                      <td className="font-bold">Tanggal Lahir</td>
                                      <td>{user?.user?.tanggal_lahir}</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </DashboardLayout>
  )
}