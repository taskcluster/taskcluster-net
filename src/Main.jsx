import { hot } from 'react-hot-loader';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import BookOpenPageVariantIcon from 'mdi-react/BookOpenPageVariantIcon';
import GithubIcon from 'mdi-react/GithubIcon';
import Home from './Home';
import { CONTENT_MAX_WIDTH } from './constants';

const useStyles = makeStyles(theme => ({
  root: {
    justifyContent: 'center',
    display: 'flex',
    background: theme.palette.primary.dark,
  },
  appIcon: {
    fill: theme.palette.common.white,
  },
  appBar: {
    position: 'fixed',
    backgroundColor: theme.palette.secondary.dark,
    zIndex: theme.zIndex.drawer + 1,
    '& a': {
      borderBottom: 0,
    },
    '& a:hover': {
      borderBottom: 0,
    },
  },
  content: {
    maxWidth: CONTENT_MAX_WIDTH,
    backgroundColor: theme.palette.background,
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      marginTop: 64,
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'end',
  },
}));
const Main = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Link
            target="_blank"
            rel="noopener nofollow"
            href="https://github.com/taskcluster">
            <Tooltip placement="bottom" title="Source Code">
              <IconButton>
                <GithubIcon className={classes.appIcon} />
              </IconButton>
            </Tooltip>
          </Link>
          <Link target="_blank" href="https://docs.taskcluster.net/docs">
            <Tooltip placement="bottom" title="Documentation">
              <IconButton>
                <BookOpenPageVariantIcon className={classes.appIcon} />
              </IconButton>
            </Tooltip>
          </Link>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <Home />
      </main>
    </div>
  );
};

export default hot(module)(Main);
