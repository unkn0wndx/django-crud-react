import React from 'react'
import { Link } from 'react-router-dom';
import Chip from '@mui/material/Chip';

const columns = [
  {
    field: 'title',
    headerName: 'Title', minWidth: 140, flex: 1,
  },
  {
    field: 'description',
    headerName: 'Description', minWidth: 170, flex: 1,
  },
  {
    field: 'done',
    headerName: 'Status', minWidth: 170, flex: 1,
    renderCell: (params) => (
      params.row.done ? <Chip label='Activa' color='success' /> : <Chip label='Pendiente' color='warning' />
    )
  },
  {
    field: 'id',
    headerName: '', minWidth: 110,
    renderCell: renderDetailsButton,
    disableClickEventBubbling: true,
    sortable: false,
    align: 'center',
  },
];

function renderDetailsButton(params) {
  return (
    <Link className='btn btn-primary text-center' to={`/tasks/${params.row.id}`}>Editar</Link>
  )
}

export { renderDetailsButton, columns };
