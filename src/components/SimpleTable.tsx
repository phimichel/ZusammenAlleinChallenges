import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

import './SimpleTable.scss'
import { Paper } from '@material-ui/core';

interface SimpleTableProps {
    items?: any[]
}

export const SimpleTable: React.FC<SimpleTableProps> = ({ items = [] }) => {
    const displayItems = [...items]
    return (
        <div className="card" id="table-card">
            <div className="simple-table">
                    {displayItems.map((item: any, index: number) => {
                        return (
                            <Paper variant="outlined">
                                <div>{item.Challange}</div>
                                <div>{item.Beschreibung}</div>
                                <div>{item.Anleitungslink && <a target="_blank" rel="noopener noreferrer" href={item.Anleitungslink}>Anleitung</a>}</div>
                            </Paper>
                        );
                    })}
            </div>
        </div>
    );
}