import React, { useEffect, useState } from "react"
import moment from 'moment'
import DataTable from 'react-data-table-component';

import DashboardLayout from '../../../layouts/Dashboard'
import { getTransaksi, deleteTransaksi } from "./Api";
import { useAuth } from "../../../context/AppContext";
import { useDebounce } from 'use-debounce';

import DeleteModal from "./ModalDelete";
import ModalDetailTransaksi from "./ModalDetailTransaksi";

import { customStyles } from './TableStyle'

export default function Transaksi(props){
  const { user } = useAuth()
  
  const [search, setSearch] = useState('')
  const [q] = useDebounce(search, 600)
  const [data, setData] = useState([])

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
      deleteTransaksi(selected.id, user.token)
      .then(res => {
        alert('berhasil hapus transaksi')
      })
      .catch(err => {
        alert('sepertinya terjadi kesalahan')
      })
      .finally(() => {
        fetch(user, q)
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

  const columns = [
    {
        name: 'No. Transaksi',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
        maxWidth: '80px'
    },
    {
        name: 'Tanggal Transaksi',
        selector: row => row.created_at,
        sortable: true,
    },
    {
        name: 'Pembayaran',
        selector: row => row.total_harga,
        sortable: true,
        maxWidth: '80px'
    },
    {
        name: 'Admin',
        selector: row => row.petugas,
        sortable: true,
        maxWidth: '80px'
    },
    {
        name: 'Customer',
        selector: row => row.name,
    },
    {
        name: 'Menu',
        cell: (item) => <BtnAction {...item}/>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
        minWidth: '170px'
    },
  ];

  const [loading, setLoading] = useState(false)

  const paginationComponentOptions = {
      rowsPerPageText: 'entries per page',
      rangeSeparatorText: ' total',
      selectAllRowsItem: true,
      selectAllRowsItemText: 'All',
  };

  const fetch = (user, q) => {
    setLoading(true)
    getTransaksi({q}, user.token)
    .then(res => {
      setData(res.data.map(item => {
        return {
          ...item,
          created_at: moment(item.created_at).format('DD/MM/YYYY'),
        }
      }))
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetch(user, q)
  }, [user, q])

  return (
    <DashboardLayout {...props}>
      <section className="section">
        <div className="card">
          <div className="card-header">
            <h1>Transaksi</h1>
          </div>
          <div className="card-body">
            <div className="row justify-content-end">
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
      <ModalDetailTransaksi show={detail} onCancel={detailToggle} selected={selected}/>
    </DashboardLayout>
  )
}