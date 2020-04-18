import { createMuiTheme } from '@material-ui/core'
import data from './colors.json'

export const customTheme = createMuiTheme({
  palette: {
    primary: { main: data.primary.main },
    warning: { main: data.warning.main },
    success: { main: data.success.main }
  },
  overrides: {
    MuiCard: {
      root: {
        padding: '1.5em 2em',
        width: '90%',
        margin: '20px auto',
      }
    },
    MuiTable: {
      root: {

      }
    },
    MuiTableHead: {
      root: {
        borderBottom: '3px solid ' +  data.primary.light
      }
    },
    MuiTableCell: {
      alignRight: {
        span: {
          color: data.primary.main,
          padding: '5px 10px',
          border: '1px solid ' + data.primary.main,
          backgroundColor: data.primary.light,
          borderRadius: 3
        }
      }
    },
    MuiTableSortLabel: {
      root: {
        color: data.gray.dark
      }
    },
    MuiButton: {
      root: {
        borderRadius: 3,
        padding: '1em 2em',
        boxShadow: '0px 3px 6px ' + data.gray.light,
        backgroundColor: data.primary.light,
        '&$disabled': {
          opacity: 1,
          backgroundColor: data.gray.bg,
        }
      },
      contained: {
        color: '#ffffff',
        borderRadius: 3,
        padding: '1em 2em',
        boxShadow: '0px 3px 6px ' + data.gray.light,
        backgroundColor: data.primary.light,
      },
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none',
      },
      colorPrimary: {
        backgroundColor: data.primary.main
      }
    },
    MuiBadge: {
      colorPrimary: {
        color: '#ffffff'
      }
    },
    MuiPaper: {
      root: {
        borderRadius: 0
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0
      }
    }
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, sans-serif',
    button: {
      fontSize: '0.65em',
      fontWeight: 900
    },
    h2: {
      color: data.primary.light,
      fontSize: '28px',
      textAlign: 'center',
      fontWeight: 400,
      margin: '50px 20px 20px'
    },
    h6: {
      textAlign: 'center'
    },
    h4: {
      color: data.primary.main,
      fontSize: '0.85rem',
      textTransform: 'uppercase'
    },
    body1: {
      lineHeight: 1
    }
  }
})