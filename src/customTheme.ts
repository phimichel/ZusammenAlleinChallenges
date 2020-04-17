import { createMuiTheme } from '@material-ui/core'
import data from './colors.json'

export const customTheme = createMuiTheme({
  palette: {
    primary: { main: data.primary.main },
    warning: { main: data.warning.main },
    success: { main: data.success.main }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0,
        padding: '1.5em 2em',
        '&$disabled': {
          opacity: 1,
          backgroundColor: data.gray.bg,
        }
      },
      containedPrimary: {
        color: '#ffffff'
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