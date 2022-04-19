import React, { useEffect, useState } from "react"
import DataTable from 'react-data-table-component'

import DashboardLayout from '../../../layouts/Dashboard'
import { getPetugas, deletePetugas } from "./Api"
import { useAuth } from "../../../context/AppContext"
import { useDebounce } from 'use-debounce'

import DeleteModal from "./ModalDelete"
import ModalDetailPetugas from "./ModalDetailPetugas"

import { customStyles } from './TableStyle'

export default function Petugas(props){
  const { user } = useAuth()
  
  const [search, setSearch] = useState('')
  const [q] = useDebounce(search, 600)
  const [data, setData] = useState([])

  const [roleSelected, setRoleSelected] = useState('');

  const [selected, setSelected] = useState(null)
  const [modal, setModal] = useState(false)

  const [detail, setDetail] = useState(false)

  const detailToggle = () => {
    setDetail(!detail)
  }

  const modalToggle = () => {
    setModal(!modal)
  }

  const handleDelete = () => {
    if(selected !== null) {
      setLoading(true)
      deletePetugas(selected.id, user.token)
      .then(res => {
        alert('berhasil hapus')
      })
      .catch(err => {
        alert('sepertinya terjadi kesalahan')
      })
      .finally(() => {
        fetch(user, q, roleSelected)
        setLoading(false)
      })
    }
    modalToggle()
  }

  const BtnAction = (item) => {
    return (
      <>
        <div 
          className="btn btn-primary" 
          onClick={() => {
            setSelected(item)
            detailToggle()
          }}
        >
          Detail
        </div>
        <div 
          className="btn btn-danger" 
          style={{marginLeft: '10px'}} 
          onClick={() => {
            setSelected(item)
            modalToggle()
          }}
        >
          Hapus
        </div>
      </>
    )
  }

  const Label = (item) => {
    if (`${item.role}`.toLowerCase() === 'pengguna') {
      return (
        <div className="btn" style={{backgroundColor: '#ffc805', color: '#fff', borderRadius: '100px'}}>{item.role}</div>
      )
    }
    return (
      <div className="btn" style={{backgroundColor: '#05d2ff', color: '#fff' , borderRadius: '100px'}}>{item.role}</div>
    )
  }

  const columns = [
    {
        name: 'Nama',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Jabatan',
        cell: (item) => <Label {...item}/>,
    },
    {
        name: 'Username',
        selector: row => row.username,
        sortable: true,
    },
    {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
    },
    {
        name: 'Menu',
        cell: (item) => <BtnAction {...item}/>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        minWidth: '200px'
    },
  ];

  const [loading, setLoading] = useState(false)

  const paginationComponentOptions = {
      rowsPerPageText: 'entries per page',
      rangeSeparatorText: ' total',
      selectAllRowsItem: true,
      selectAllRowsItemText: 'All',
  };

  const fetch = (user, q, role) => {
    setLoading(true)
    getPetugas({q, role}, user.token)
    .then(res => {
      setData(res)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetch(user, q, roleSelected)
  }, [user, q, roleSelected])

  const handleRoleSelectAll = () => setRoleSelected('')
  const handleRoleSelectAdmin = () => setRoleSelected('admin')
  const handleRoleSelectPengguna = () => setRoleSelected('petugas')

  return (
    <DashboardLayout {...props}>
      <section className="section">
        <div className="card">
          <div className="card-header">
            <h1>Petugas</h1>
          </div>
          <div className="card-body">
            <div className="row justify-content-end">
              <div className="col-lg-9 col-sm-6">
                    <div className="btn">Urut Berdasarkan</div>
                    <div className="btn btn-outline-primary" style={roleSelected === '' ? {marginLeft: '5px', backgroundColor: '#58d89c', color: '#fff'}: {marginLeft: '5px'}} onClick={handleRoleSelectAll}>Semua</div>
                    <div className="btn btn-outline-primary" style={roleSelected === 'admin' ? {marginLeft: '5px', backgroundColor: '#58d89c', color: '#fff'}: {marginLeft: '5px'}} onClick={handleRoleSelectAdmin}>Admin</div>
                    <div className="btn btn-outline-primary" style={roleSelected === 'petugas' ? {marginLeft: '5px', backgroundColor: '#58d89c', color: '#fff'}: {marginLeft: '5px'}} onClick={handleRoleSelectPengguna}>Petugas</div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." className="form-control"/>
              </div>
              {loading === false ? (
                <div className="col-12">
                  <DataTable
                      columns={columns}
                      data={data}
                      pagination 
                      paginationComponentOptions={paginationComponentOptions}
                      customStyles={customStyles}
                  />
                </div>
              ) : (
                <div className="col-12">
                  {'Loading...'}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <DeleteModal show={modal} onDelete={handleDelete} onCancel={modalToggle}/>
      <ModalDetailPetugas show={detail} onCancel={detailToggle} selected={selected}/>
    </DashboardLayout>
  )
}