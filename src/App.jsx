import { hot } from 'react-hot-loader';
import React, { Fragment } from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FontStager from './components/FontStager';

const CONTENT_MAX_WIDTH = 1592;
const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'fixed',
    backgroundColor: 'rgb(45, 83, 115)',
    zIndex: theme.zIndex.drawer + 1,
  },
  appBarTitle: {
    marginLeft: theme.spacing(1),
    fontFamily: 'Roboto300',
    flex: 1,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    maxWidth: CONTENT_MAX_WIDTH,
    flexGrow: 1,
    backgroundColor: theme.palette.background,
    overflowY: 'auto',
    minHeight: 'calc(100vh - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      minHeight: 'calc(100vh - 64px)',
      marginTop: 64,
    },
  },
}));
const message = 'Welcome to Taskcluster';
const App = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <FontStager />
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.appBarTitle}>
            Taskcluster
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <h1>{message}</h1>
        Hello..
      </main>
    </Fragment>
  );
};

export default hot(module)(App);
