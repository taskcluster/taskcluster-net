import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import TwitterIcon from 'mdi-react/TwitterIcon';

const QuoteLink = (props, ref) => {
  return (
    <Link
      target="_blank"
      rel="noopener nofollow"
      ref={ref}
      underline="none"
      {...props}
    />
  );
};

QuoteLink.displayName = 'QuoteLink';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardAction: {
    height: '100%',
    borderBottom: 'unset',
    '&:hover': {
      borderBottom: 'unset',
    },
  },
  avatar: {
    width: 48,
    height: 48,
  },
  twitter: {
    marginLeft: 'auto',
    color: theme.palette.primary.light,
  },
  name: {
    fontSize: 16,
  },
  quote: {
    paddingBottom: '16px !important',
    paddingTop: 0,
  },
}));

QuoteLink.displayName = 'QuoteLink';

const Tweet = ({ quote, avatar, tweet, name, userName, className }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classNames(classes.card, className)}>
      <CardActionArea
        component={forwardRef(QuoteLink)}
        href={tweet}
        className={classes.cardAction}>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item>
              <Avatar src={avatar} alt={name} className={classes.avatar} />
            </Grid>
            <Grid item>
              <Typography
                component="div"
                variant="h6"
                color="textPrimary"
                className={classes.name}>
                {name}
              </Typography>
              <Typography
                component="div"
                variant="subtitle2"
                color="textSecondary">
                {userName}
              </Typography>
            </Grid>
            <Grid item className={classes.twitter}>
              <TwitterIcon />
            </Grid>
          </Grid>
        </CardContent>
        <CardContent className={classes.quote}>
          <Typography color="textPrimary" variant="body2">
            {quote}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Tweet;
