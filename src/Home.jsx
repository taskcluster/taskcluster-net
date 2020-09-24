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
import Grid from '@material-ui/core/Grid';
import BookOpenVariantIcon from 'mdi-react/BookOpenVariantIcon';
import SourceRepositoryMultipleIcon from 'mdi-react/SourceRepositoryMultipleIcon';
import ChatIcon from 'mdi-react/ChatIcon';
import ChartLineIcon from 'mdi-react/ChartLineIcon';
import GroupIcon from 'mdi-react/GroupIcon';
import ClockTimeEightOutlineIcon from 'mdi-react/ClockTimeEightOutlineIcon';
import AccountHardHatIcon from 'mdi-react/AccountHardHatIcon';
import ConsoleLineIcon from 'mdi-react/ConsoleLineIcon';
import GithubIcon from 'mdi-react/GithubIcon';
import CubeOutlineIcon from 'mdi-react/CubeOutlineIcon';
import KeyIcon from 'mdi-react/KeyIcon';
import CogBoxIcon from 'mdi-react/CogBoxIcon';
import CloudOutlineIcon from 'mdi-react/CloudOutlineIcon';
import CellphoneLinkIcon from 'mdi-react/CellphoneLinkIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import CheckBoldIcon from 'mdi-react/CheckBoldIcon';
import HeartPlusIcon from 'mdi-react/HeartPlusIcon';
import AccountVoiceIcon from 'mdi-react/AccountVoiceIcon';
import Benefit from './components/Benefit';
import Feature from './components/Feature';
import HighlightCard from './components/HighlightCard';

const Para = ({ children, ...props }) => (
  <Typography variant="body2" paragraph {...props}>
    {children}
  </Typography>
);
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
  logo: {
    position: 'absolute',
    right: '2em',
    width: '5em',
    paddingTop: '2em',
  },
}));
const Home = () => {
  const classes = useStyles();
  const titleContent = (
    <Fragment>
      <img
        alt="Logo"
        src="https://media.taskcluster.net/logo/logo-96x120.png"
        className={classes.logo}
      />
      <Typography variant="h2">Taskcluster</Typography>
    </Fragment>
  );

  return (
    <Fragment>
      <Grid container spacing={3}>
        <HighlightCard
          titleContent={titleContent}
          Icon={BookOpenVariantIcon}
          xs={12}>
          <Para variant="body1" style={{ margin: '2em' }}>
            <em>
              Taskcluster is the task execution framework that supports
              Mozilla&#39;s continuous integration and release processes. It's a
              flexible, scalable open-source framework that can be used to build
              complex, highly customized CI systems.
            </em>
          </Para>
          <Para variant="body1">
            There are lots of continuous integration (CI) solutions out there
            that support simple workflows, but what if your CI process is more
            complex? What if you need something more customizable and more
            scalable?
          </Para>
          <Para variant="body1">Enter Taskcluster.</Para>
          <Para variant="body1">
            Taskcluster is a task execution framework developed by Mozilla.
            Initially designed in service of{' '}
            <Link href="https://firefox-ci-tc.services.mozilla.com/tasks/index/gecko.v2.mozilla-release.latest.firefox">
              Firefox
            </Link>{' '}
            and{' '}
            <Link href="https://community-tc.services.mozilla.com/tasks/index/project">
              Mozilla&#39;s new products,
            </Link>{' '}
            Taskcluster has grown into an open source tool that allows anyone to
            develop and deploy sophisticated CI solutions and release processes.
          </Para>
        </HighlightCard>

        <HighlightCard title="Benefits" Icon={HeartPlusIcon} sm={6} xs={12}>
          <Benefit title="Large-Scale" Icon={ChartLineIcon}>
            <Para>
              The deployment of Taskcluster that runs Firefox CI routinely runs
              over 7,000,000 tasks per month. It can easily handle 350,000
              concurrent tasks without breaking a sweat. The release process for
              Firefox contains well over 8,000 individual tasks.
            </Para>
            <blockquote>
              <Card>
                <CardContent>
                  Firefox CI in January 2019: 7,139,432 tasks; 259.0 compute
                  years; 1,071,533 unique workers; 383,411 maximum concurrent
                  tasks{' '}
                  <Link href="https://twitter.com/hashtag/Mozilla?src=hash&amp;ref_src=twsrc%5Etfw">
                    #Mozilla
                  </Link>{' '}
                  <Link href="https://twitter.com/hashtag/ContinuousIntegration?src=hash&amp;ref_src=twsrc%5Etfw">
                    #ContinuousIntegration
                  </Link>{' '}
                  <Link href="https://twitter.com/hashtag/Taskcluster?src=hash&amp;ref_src=twsrc%5Etfw">
                    #Taskcluster
                  </Link>
                  <br />
                  <br />
                  &mdash; Chris Cooper (@ccooper){' '}
                  <Link href="https://twitter.com/ccooper/status/1093207589624709121?ref_src=twsrc%5Etfw">
                    February 6, 2019
                  </Link>
                </CardContent>
              </Card>
            </blockquote>
          </Benefit>

          <Benefit title="Customizable" Icon={CogBoxIcon}>
            <Para>
              Taskcluster is designed as a flexible set of services and tools to
              build custom continuous integration, deployment, and release
              processes. Its micro-service architecture allows you to{' '}
              <Link href="https://docs.taskcluster.net/docs/manual/using/integration">
                easily adapt or replace an existing service
              </Link>{' '}
              to meet the needs of your business or project.
            </Para>
          </Benefit>

          <Benefit title="Cloud-Agnostic" Icon={CloudOutlineIcon}>
            <Para>
              Already have an established presence in AWS? Or GCP? Or Azure? Or
              packet.net? Or bitbar? Or your own hardware in a datacenter?
              Taskcluster supports them all.
            </Para>
            <Para>
              Want to execute tasks in all of them at the same time? Sure.
              Mozilla is doing this right now. Taskcluster ties them all
              together seemlessly.
            </Para>
          </Benefit>

          <Benefit title="Multi-Platform" Icon={CellphoneLinkIcon}>
            <Para>
              Taskcluster{' '}
              <Link href="https://docs.taskcluster.net/docs/manual/task-execution/workers">
                workers will run on just about any device or cloud instance
              </Link>
              . Mozilla currently runs workers on Linux, MacOS, various flavours
              of Windows (including desktop variants like Windows 7 and Arm64),
              and a collection of different mobile devices. If you can get the
              worker code onto your device, it can run tasks via Taskcluster.
            </Para>
          </Benefit>
        </HighlightCard>

        <HighlightCard title="Features" Icon={CheckBoldIcon} sm={6} xs={12}>
          <Feature title="Task Graphs" Icon={GroupIcon}>
            <Para>
              Create deep{' '}
              <Link href="https://docs.taskcluster.net/docs/manual/using/task-graph">
                graphs of tasks
              </Link>{' '}
              with dependencies, e.g. tests depend on build tasks. As mentioned
              above, the task graph for the release process of Firefox contains
              well over 8,000 individual tasks.
            </Para>{' '}
            <Para>
              Create deep{' '}
              <Link href="https://docs.taskcluster.net/docs/manual/using/task-graph">
                graphs of tasks
              </Link>{' '}
              with dependencies, e.g. tests depend on build tasks. As mentioned
              above, the task graph for the release process of Firefox contains
              well over 8,000 individual tasks.
            </Para>
          </Feature>

          <Feature title="Scheduled Tasks" Icon={ClockTimeEightOutlineIcon}>
            <Para>
              <Link href="https://docs.taskcluster.net/docs/manual/using/scheduled-tasks">
                Create tasks at specific times or days
              </Link>
              , e.g. nightly builds, periodic version bumps, slow integration
              tasks, weekly hygiene/clean-up jobs. This is cron for your CI
              pipeline.
            </Para>
          </Feature>

          <Feature title="Bring Your Own Worker" Icon={AccountHardHatIcon}>
            <Para>
              <Link href="https://docs.taskcluster.net/docs/manual/task-execution/workers">
                Run your tasks on workers in the cloud, or on your own hardware,
                or both
              </Link>
              . If you can get the worker code on your device/instance, it can
              run tasks in Taskcluster.
            </Para>
          </Feature>

          <Feature title="Interactive Tasks" Icon={ConsoleLineIcon}>
            <Para>
              <Link href="https://docs.taskcluster.net/docs/tutorial/debug-task">
                Get interactive shell, VNC, or RDP access to running workers
              </Link>
              , right in your web browser. Debugging running process in CI has
              never been easier.
            </Para>
          </Feature>

          <Feature title="GitHub Integration" Icon={GithubIcon}>
            <Para>
              <Link href="https://docs.taskcluster.net/docs/reference/integrations/github/intro">
                Create tasks for pushes, pull requests(PRs), and tags
              </Link>
              . Report results via GitHub checks. Continue using the workflow
              tools you love while gaining the benefits of Taskcluster.
            </Para>
          </Feature>

          <Feature title="API Driven Design" Icon={CubeOutlineIcon}>
            <Para>
              All access to the platform is via{' '}
              <Link href="https://docs.taskcluster.net/docs/manual/design/apis">
                REST API methods
              </Link>
              , with multi-language client libraries. You can easily extend or
              replace existing services based on your needs, or even develop new
              services entirely!
            </Para>
          </Feature>

          <Feature title="Access Control" Icon={KeyIcon}>
            <Para>
              Access to API methods is controlled via granular, flexible{' '}
              <Link href="https://docs.taskcluster.net/docs/reference/platform/auth/scopes">
                scopes
              </Link>{' '}
              supporting delegation patterns. Access control can be as simple or
              complex as your project demands.
            </Para>
          </Feature>
        </HighlightCard>

        <HighlightCard
          title="Documentation"
          Icon={BookOpenVariantIcon}
          sm={6}
          xs={12}>
          <Typography variant="body2">
            The Taskcluster documentation is at{' '}
            <Link href="https://docs.taskcluster.net">
              docs.taskcluster.net
            </Link>
            . Start here to learn how Taskcluster is designed and how to use it.
          </Typography>
        </HighlightCard>

        <HighlightCard
          title="Source Code"
          Icon={SourceRepositoryMultipleIcon}
          sm={6}
          xs={12}>
          <Typography variant="body2">
            Find the latest Taskcluster source code{' '}
            <Link href="https://github.com/taskcluster">on GitHub</Link>, along
            with our{' '}
            <Link href="https://github.com/taskcluster/taskcluster-rfcs">
              RFC process
            </Link>{' '}
            for making architectural decisions.
          </Typography>
        </HighlightCard>

        <HighlightCard
          title="Contact Us"
          Icon={AccountVoiceIcon}
          sm={6}
          xs={12}>
          <Typography variant="body2">
            Get in touch with the Taskcluster team, whether to ask questions,
            meet fellow users, or get started contributing to the project.
          </Typography>
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
        </HighlightCard>
      </Grid>
    </Fragment>
  );
};

export default hot(module)(Home);
