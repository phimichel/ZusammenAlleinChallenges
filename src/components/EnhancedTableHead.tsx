import React from "react";
import { TableHead, TableRow, TableCell, TableSortLabel } from "@material-ui/core";
import PropTypes from 'prop-types';

const headCells = [
  { id: 'Challenge', numeric: false, disablePadding: true, label: 'Challenge', enableSort: true },
  { id: 'Beschreibung', numeric: true, disablePadding: false, label: 'Beschreibung', enableSort: false },
  { id: 'Level', numeric: true, disablePadding: false, label: 'Level', enableSort: true },
  { id: 'Ziel', numeric: true, disablePadding: false, label: 'Ziel', enableSort: true },
  { id: 'Training', numeric: true, disablePadding: false, label: 'Training', enableSort: true },
  { id: 'Teilnehmer', numeric: true, disablePadding: false, label: 'Teilnehmer', enableSort: true },
  { id: 'Ort', numeric: true, disablePadding: false, label: 'Ort', enableSort: true },
  { id: 'Altersgruppe', numeric: true, disablePadding: false, label: 'Alterstufe', enableSort: true },
  { id: 'Tags', numeric: true, disablePadding: false, label: 'Tags', enableSort: true },
];

export function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell></TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            { headCell.enableSort ? (
              <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
            ) : (
              <span>{headCell.label}</span>
            )
            }
            
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};