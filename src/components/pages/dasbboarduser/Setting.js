import React, { useState } from "react"
import { Link } from "react-router-dom"
import moment from 'moment';

import { useAuth } from "../../../context/AppContext"
import DashboardLayout from '../../../layouts/Dashboard'
import { updateUser, changePassword, checkPassword } from "./Api";

export default function Setting(props){
  const { user, persistUser } = useAuth()

  const [tab, setTab] = useState(0)

  const [username, setUsername] = useState(user?.user?.username)
  const [name, setName] = useState(user?.user?.name)
  const [address, setAddress] = useState(user?.address?.alamat)
  const [email, setEmail] = useState(user?.user?.email)
  const [phone, setPhone] = useState(user?.user?.no_hp)
  const [gender, setGender] = useState(user?.user?.jenis_kelamin)
  const [date, setDate] = useState(moment(user?.user?.tanggal_lahir, "yyyy-MM-DD").format('yyyy-MM-DD'))
  const [message, setMessage] = useState(null)

  const [isOldPassword, setIsOldPassword] = useState(false)

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')

  const handleCheckPassword = (e) => {
    e.preventDefault()
    checkPassword({password: oldPassword}, user.token)
    .then(res => {
      setIsOldPassword(res.status)
      if(res.status === false) {
        setMessage('Password Salah')
        return
      }
      setMessage('')
      setOldPassword('')
    })
    .catch(err => {
      console.log(err)
    })
  }

  const handleChangePassword = (e) => {
    e.preventDefault()
    changePassword({ password: newPassword, password_confirmation: newPasswordConfirm}, user.token)
    .then(res => {
      console.log(res)
      setMessage('Password Berhasil di ubah')
      setIsOldPassword(false)
      setNewPasswordConfirm('')
      setNewPassword('')
    })
    .catch(err => {
      console.log(err)
      setMessage('Password baru dan konfirmasi password harus sama')
    })
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault()
    setMessage(null)
    updateUser({
      username,
      name,
      address,
      email,
      no_hp: phone,
      jenis_kelamin: gender,
      tanggal_lahir: date,
    }, user.token)
    .then(res => {
      setMessage('Perubahan berhasil di simpan')
      persistUser({
        ...user,
        user: res.data
      })
    })
    .catch(err => {
      // 
    })
  }

  return (
    <DashboardLayout {...props}>
      <div className="page-content">
        <section className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12">
                {message && (
                  <div className="alert alert-info">{message}</div>
                )}
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 col-xl-3">
                        <div className="list-group border-none">
                          <Link to="#" className="list-group-item text-sm mt-3 border-0">Umum</Link>

                          <button onClick={() => setTab(0)} className={`list-group-item d-flex font-bold text-left justify-content-between align-items-center border-start-0 border-end-0 ${tab === 0 ? 'border-primary text-primary font-bold' : 'text-secondary'}`}>
                            <span>Edit Profile</span>

                            <i className="bi bi-chevron-right text-primary"></i>
                          </button>

                          <button onClick={() => setTab(1)} className={`list-group-item d-flex font-bold text-left justify-content-between align-items-center border-start-0 border-end-0 ${tab === 1 ? 'border-primary text-primary font-bold' : 'text-secondary'}`}>
                            <span>Tambahkan Sosial Media</span>

                            <i className="bi bi-chevron-right"></i>
                          </button>

                          <button onClick={() => setTab(2)} className={`list-group-item d-flex font-bold text-left justify-content-between align-items-center border-start-0 border-end-0 ${tab === 2 ? 'border-primary text-primary font-bold' : 'text-secondary'}`}>
                            <span>Ganti Password</span>

                            <i className="bi bi-chevron-right"></i>
                          </button>

                          <Link to="#" className="list-group-item text-sm mt-3 border-0">Tentang</Link>

                          <Link to="#" className="list-group-item d-flex font-bold justify-content-between align-items-center border-start-0 border-end-0 text-secondary">
                            <span>Syarat &amp; Ketentuan</span>

                            <i className="bi bi-chevron-right"></i>
                          </Link>

                          <Link to="#" className="list-group-item d-flex font-bold justify-content-between align-items-center border-start-0 border-end-0 text-secondary">
                            <span>Kebijakan Privasi</span>

                            <i className="bi bi-chevron-right"></i>
                          </Link>

                          <Link to="#" className="list-group-item d-flex font-bold justify-content-between align-items-center border-start-0 border-end-0 text-secondary">
                            <span>Pertanyaan Umum</span>

                            <i className="bi bi-chevron-right"></i>
                          </Link>

                          <Link to="#" className="list-group-item d-flex font-bold justify-content-between align-items-center border-start-0 border-end-0 text-secondary">
                            <span>Versi App</span>

                            <span>6.9.96</span>
                          </Link>
                        </div>
                      </div>

                      {tab === 0 && (
                        <div className="col-12 col-md-6 col-xl-9">
                          <div className="row">
                            <div className="col-12 col-md-6">
                              <div className="row mb-3">
                                <div className="col-12 shadow-sm mb-2">
                                  <h3 className="text-primary">Foto Profil</h3>
                                </div>
                                <div className="col-12 shadow-sm py-5 px-3">
                                  <div className="overflow-hidden mx-auto rounded-pill mb-5 d-flex justify-content-center align-items-center" style={{maxWidth: "200px"}}>
                                    <img className="w-100" src="assets/images/faces/7.jpg" alt="Foto Profile" />
                                  </div>
                                  <div className="text-center">
                                    <h2>{user?.user?.name}</h2>
                                    <h5><i className="bi bi-circle-fill fs-6 text-success"></i> Online</h5>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="row">
                                <div className="col-12 shadow-sm">
                                  <h3 className="text-primary">Detail Akun</h3>
                                </div>
                                <div className="col-12 shadow-sm py-4">
                                  <form action="" method="post">
                                    <div className="row">
                                      <div className="col-12">
                                        <div className="mb-3">
                                          <label htmlFor="username" className="form-label">Username (username yang akan kamu pakai untuk login)</label>
                                          <input type="text" className="form-control" id="username" placeholder="Masukkan Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                        </div>
                                      </div>
                                      <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="nama-depan" className="form-label">Nama</label>
                                          <input type="text" className="form-control" id="nama-depan" placeholder="Masukkan Nama" value={name} onChange={(e) => setName(e.target.value)}/>
                                        </div>
                                      </div>
                                      <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="nama-depan" className="form-label">Jenis Kelamin</label>
                                          <select className="form-select" aria-label="Default select example" onChange={(e) => setGender(e.target.value)}>
                                            <option selected={gender === 'Laki-Laki'} value="Laki-Laki">Laki-Laki</option>
                                            <option selected={gender === 'Perempuan'} value="Perempuan">Perempuan</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="organisasi" className="form-label">Organisasi</label>
                                          <input type="text" className="form-control" id="organisasi" placeholder="Masukkan Nama Organisasi" value="-"/>
                                        </div>
                                      </div>
                                      <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="lokasi" className="form-label">Lokasi</label>
                                          <input type="text" className="form-control" id="lokasi" placeholder="Bandung, Indonesia" value={address} onChange={(e) => setAddress(e.target.value)}/>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <div className="mb-3">
                                          <label htmlFor="email" className="form-label">Email</label>
                                          <input type="email" className="form-control" id="email" placeholder="contoh@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                        </div>
                                      </div>
                                      {`${user?.user?.role}`.toLowerCase() === 'admin' && (
                                        <div className="col-12 col-md-6">
                                          <div className="mb-3">
                                            <label htmlFor="no-telp" className="form-label">No. Telepon (Hanya admin yang bisa lihat)</label>
                                            <input type="tel" className="form-control" id="no-telp" placeholder="089XXX" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                                          </div>
                                        </div>
                                      )}
                                      <div className="col-12 col-md-6">
                                        <div className="mb-3">
                                          <label htmlFor="tanggal-lahir" className="form-label">Tanggal Lahir</label>
                                          <input type="date" className="form-control" id="tanggal-lahir" value={date} onChange={(e) => setDate(e.target.value)}/>
                                        </div>
                                      </div>
                                      <div className="col-12">
                                        <button onClick={handleUpdateProfile} className="btn btn-success">Simpan Perubahan</button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {tab === 1 && (
                        <div className="col-12 col-md-6 col-xl-9">
                          <div className="mb-3">
                            <label htmlFor="facebook-link">Facebook</label>
                            <input type="url" className="form-control" name="facebook-link" id="facebook-link" placeholder="https://example.com" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="twitter-link">Twitter</label>
                            <input type="url" className="form-control" name="twitter-link" id="twitter-link" placeholder="https://example.com" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="linkedin-link">Linkedin</label>
                            <input type="url" className="form-control" name="linkedin-link" id="linkedin-link" placeholder="https://example.com" />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="instagram-link">Instagram</label>
                            <input type="url" className="form-control" name="instagram-link" id="instagram-link" placeholder="https://example.com" />
                          </div>
                          <div className="d-flex justify-content-end">
                            <button className="btn btn-md btn-success">Selesai</button>
                          </div>
                        </div>
                      )}

                      {tab === 2 && (
                        <div className="col-12 col-md-6 col-xl-9">
                              <p>Untuk mengganti password, silakan masukan password saat ini.</p>
                              <div className="mb-3">
                                <label htmlFor="password-old">Password</label>
                                <input type="password" className="form-control" placeholder="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)}/>
                              </div>
                              <div className="d-flex justify-content-end">
                                <button className="btn btn-md btn-success" onClick={handleCheckPassword}>Lanjutkan</button>
                              </div>

                            {isOldPassword && (
                              <>
                                <div className="mb-3">
                                  <label htmlFor="password-new">Password Baru</label>
                                  <input type="password" className="form-control" placeholder="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="password-verify">Konfirmasi Password</label>
                                  <input type="password" className="form-control" placeholder="password" value={newPasswordConfirm} onChange={e => setNewPasswordConfirm(e.target.value)}/>
                                </div>
                                <div className="d-flex justify-content-end">
                                  <button className="btn btn-md btn-success" onClick={handleChangePassword}>Simpan</button>
                                </div>
                              </>
                            )}
                          </div>
                      )}

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