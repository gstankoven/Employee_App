import React, {useMemo} from 'react'
import {useTable, useSortBy} from 'react-table'
import './Table.css'
import {deleteEmployee, getData} from './api.js'

function Table(props) {

    const data = useMemo(() => props.data, [props.data])
    const columns = useMemo(() => [
        {
            Header: 'Employee ID',
            accessor: 'id',
        },
        {
            Header: 'First',
            accessor: 'first'
        },
        {
            Header: 'Last',
            accessor: 'last'
        },
        {
            Header: 'Job',
            accessor: 'job'
        },
        {
            Header: 'City',
            accessor: 'city'
        },
    ],[])

    const tableHooks = hooks => {
        hooks.visibleColumns.push(columns => [
            ...columns,
            {
              id: 'Edit',
              Header: '',
              Cell: ({row}) => (
                <div className='actions'>
                    <button className='action' onClick={() => {props.setEditInfo([row.values.id, row.values.first, row.values.last, row.values.job, row.values.city]); props.setPage('edit');}}>Edit</button>
                </div>
              )
            },
            {
                id: 'Delete',
                Header: '',
                Cell: ({row}) => (
                  <div className='actions'>
                      <button className='action' onClick={ async () => { 
                        await deleteEmployee(row.values.id)
                        getData(props.setData)
                        }}>Delete</button>
                  </div>
                )
              }
        ]
        )
    }

    const tableInstance = useTable({ columns, data}, tableHooks, useSortBy)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance




    return (
        <table {...getTableProps()}>

            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                {column.isSorted ? (column.isSortedDesc ? " ▼" : " ▲") : ""}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                        return (
                            <td {...cell.getCellProps()}>
                                {cell.render('Cell')}
                            </td>
                        )
                        })}
                    </tr>
                    )
                })}
            </tbody>

        </table>
    );
}

export default Table;