import React from "react";
import { TableHead, TableRow, TableCell, TableSortLabel } from "@material-ui/core";
import PropTypes from 'prop-types';

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
  { id: 'description', numeric: false, disablePadding: false, label: 'Beschreibung' },
  { id: 'link', numeric: false, disablePadding: false, label: 'Anleitungslink' },
];

export function SimpleTableHead(props) {
  const { classes, order, orderBy } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

SimpleTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  rowCount: PropTypes.number.isRequired,
};