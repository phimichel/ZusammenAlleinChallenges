import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { SimpleTableHead } from './SimpleTableHead';

import './SimpleTable.scss'

interface SimpleTableProps {
    items?: any[]
}

export const SimpleTable: React.FC<SimpleTableProps> = ({ items = [] }) => {
    const displayItems = [...items];
    const page = 1;
    const rowsPerPage = 25;
    const [dense] = React.useState(false);

    const rows = createRows()
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    function createData(name: string, description: string, link: string) {
        return { name, description, link };
    }

    function createRows() {
        console.log(displayItems)
        return displayItems.map(item => createData(item.Challenge, item.Beschreibung, item.Anleitungslink));
    }

    return (
        <div className="simple-table">
            <TableContainer>
                <Table
                    className="table"
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                >
                    <SimpleTableHead
                        rowCount={rows.length}
                    />
                    <TableBody>
                        {rows
                            .map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;

                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={index}
                                    >
                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.description}</TableCell>
                                        <TableCell align="right">{row.link && 
                                            <a target="_blank" rel="noopener noreferrer" href={row.link}>Anleitung</a>}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}