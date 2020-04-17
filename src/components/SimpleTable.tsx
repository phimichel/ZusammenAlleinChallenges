import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import { SimpleTableHead } from './SimpleTableHead';

interface SimpleTableProps {
    items?: any[]
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export const SimpleTable: React.FC<SimpleTableProps> = ({ items = [] }) => {
    const displayItems = [...items];
    const classes = useStyles();
    const page = 1;
    const rowsPerPage = 25;
    const [dense, setDense] = React.useState(false);

    const rows = createRows()
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    function createData(name: string, description: string, link: string) {
        return { name, description, link };
    }

    function createRows() {
        return displayItems.map(item => createData(item.Challenge, item.Beschreibung, item.Anleitungslink));
    }

    return (
        <div className={classes.root}>
            <TableContainer>
                <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    size={dense ? 'small' : 'medium'}
                    aria-label="enhanced table"
                >
                    <SimpleTableHead
                        classes={classes}
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
                                        key={row.name}
                                    >
                                        <TableCell component="th" id={labelId} scope="row" padding="none">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.description}</TableCell>
                                        <TableCell align="right">{row.link}</TableCell>
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