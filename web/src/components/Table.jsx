import { useTable } from 'react-table';

export default function Table({ columns, data }) {

    // Table necessary variables
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    })

    return (
        <table
            style={{border: '1px solid #ccc',}}
            {...getTableProps()}>
            <thead >
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc', padding: '10px'}}
                            >
                                {column.render("Header")}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}
                                    style={{
                                        borderRight: '1px solid #ccc',
                                        borderBottom: '1px solid #ccc',
                                        padding: '10px',
                                        textAlign: 'center',
                                        backgroundColor: i % 2 === 0 ? '#21283208' : '#fff'
                                    }}
                                >{cell.render("Cell")}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
