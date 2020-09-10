import { hot } from 'react-hot-loader';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  icon: {
    color: 'rgb(45, 83, 115)',
  },
});
const Benefit = ({ title, children, Icon }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h5">
        <div style={{ float: 'right' }}>
          <Icon size={36} className={classes.icon} />
        </div>{' '}
        {title}
      </Typography>
      {children}
    </Fragment>
  );
};

export default hot(module)(Benefit);
