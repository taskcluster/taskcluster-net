import { hot } from 'react-hot-loader';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import BookOpenVariantIcon from 'mdi-react/BookOpenVariantIcon';
import RocketLaunchIcon from 'mdi-react/RocketLaunchIcon';
import SourceRepositoryMultipleIcon from 'mdi-react/SourceRepositoryMultipleIcon';
import ChatIcon from 'mdi-react/ChatIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import AccountVoiceIcon from 'mdi-react/AccountVoiceIcon';

const cards = [
  {
    title: 'Documentation',
    content: (
      <Typography variant="body2">
        The Taskcluster documentation is at{' '}
        <Link href="https://docs.taskcluster.net">docs.taskcluster.net</Link>.
        Start here to learn how Taskcluster is designed and how to use it.
      </Typography>
    ),
    icon: <BookOpenVariantIcon />,
  },
  {
    title: 'At Mozilla',
    content: (
      <Typography variant="body2">
        Taskcluster is used to build{' '}
        <Link href="https://firefox-ci-tc.services.mozilla.com/tasks/index/gecko.v2.mozilla-release.latest.firefox">
          Firefox
        </Link>
        , as well as many of Mozilla&#39;s{' '}
        <Link href="https://community-tc.services.mozilla.com/tasks/index/project">
          exciting new projects
        </Link>
        .
      </Typography>
    ),
    icon: <RocketLaunchIcon />,
  },
  {
    title: 'Source Code',
    content: (
      <Typography variant="body2">
        Find the latest Taskcluster source code{' '}
        <Link href="https://github.com/taskcluster">on GitHub</Link>, along with
        our{' '}
        <Link href="https://github.com/taskcluster/taskcluster-rfcs">
          RFC process
        </Link>{' '}
        for making architectural decisions.
      </Typography>
    ),
    icon: <SourceRepositoryMultipleIcon />,
  },
  {
    title: 'Contact Us',
    content: (
      <Typography variant="body2">
        Get in touch with the Taskcluster team, whether to ask questions, meet
        fellow users, or get started contributing to the project.
        <List dense>
          <ListItem>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <Link href="https://chat.mozilla.org/#/room/#taskcluster:mozilla.org">
              #taskcluster:mozilla.org
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <Link href="https://lists.mozilla.org/listinfo/tools-taskcluster">
              tools-taskcluster@lists.mozilla.org
            </Link>
          </ListItem>
        </List>
      </Typography>
    ),
    icon: <AccountVoiceIcon />,
  },
];
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
    marginLeft: theme.spacing(1),
  },
}));
const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Typography variant="h2">Taskcluster</Typography>

      <Typography variant="body1">
        Taskcluster is the task execution framework that supports Mozilla&#39;s
        continuous integration and release processes. It a flexible, scalable
        open-source framework that can be used to build complex, highly
        customized CI systems.
      </Typography>

      <br />

      <Grid container spacing={2}>
        {cards.map(({ title, content, icon }) => (
          <Grid key={title} item sm={6} xs={12}>
            <Card classes={{ root: classes.root }}>
              <CardActionArea className={classes.cardActionArea}>
                <CardContent className={classes.titleCardContent}>
                  {icon}
                  <Typography variant="h6" className={classes.title}>
                    {title}
                  </Typography>
                </CardContent>
                <CardContent>{content}</CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default hot(module)(Home);
