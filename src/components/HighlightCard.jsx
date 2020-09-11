import { hot } from 'react-hot-loader';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles(theme => ({
  card: {
    position: 'relative',
    height: theme.spacing(25),
  },
  cardActionArea: {
    height: '100%',
  },
  titleCardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginLeft: theme.spacing(3),
  },
}));
const HighlightCard = ({ titleContent, title, children, Icon, ...props }) => {
  const classes = useStyles();

  return (
    <Grid item {...props}>
      <Card>
        <CardActionArea className={classes.cardActionArea}>
          <CardContent className={classes.titleCardContent}>
            {titleContent || (
              <Fragment>
                <Icon size={40} />
                <Typography variant="h4" className={classes.title}>
                  {title}
                </Typography>
              </Fragment>
            )}
          </CardContent>
          <CardContent>{children}</CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default hot(module)(HighlightCard);
