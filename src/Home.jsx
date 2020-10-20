import { hot } from 'react-hot-loader';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import BookOpenVariantIcon from 'mdi-react/BookOpenVariantIcon';
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
import Tweet from './components/Tweet';
import SteppingUpImage from './images/stepping_up.svg';
import ContactUsImage from './images/contact_us.svg';
import CoopTwitterImage from './images/ccooper_twitter.png';
import WellPlayedLogo from './images/well_played_games_logo.png';

const useStyles = makeStyles(theme => ({
  container: {
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
  logo: {
    marginTop: 13,
    [theme.breakpoints.up('md')]: {
      // Align with T A S C K L U S T E R
      marginRight: theme.spacing(8),
    },
  },
  firstSection: {
    textAlign: 'left',
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
  },
  docBtnDiv: {
    marginTop: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
  },
  teamName: {
    letterSpacing: '0.3rem',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      marginLeft: -12,
    },
  },
  builtForScaleSection: {
    paddingBottom: theme.spacing(8),
  },
  benefitsSection: {
    '& p': {
      marginBottom: theme.spacing(6),
    },
  },
  featuresSection: {
    '& p': {
      marginBottom: theme.spacing(6),
    },
  },
  section: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  divider: {
    margin: `${theme.spacing(4)}px 0`,
    width: '100%',
  },
  tweet: {
    maxWidth: 570,
  },
  titleWithIcon: {
    display: 'flex',
    marginBottom: theme.spacing(1),
    alignItems: 'center',
    '& > svg': {
      marginRight: theme.spacing(2),
    },
  },
  tweetDiv: {
    display: 'flex',
    alignItems: 'center',
  },
  contactList: {
    '& li': {
      paddingLeft: 0,
    },
  },
  sectionTitle: {
    marginBottom: theme.spacing(9),
    textAlign: 'center',
  },
  gridItemBenefits: {
    [theme.breakpoints.up('md')]: {
      '&:nth-child(odd)': {
        '& div': {
          margin: `0 0 ${theme.spacing(1)}px auto`,
        },
      },
      '&:nth-child(even)': {
        '& div': {
          margin: `0 auto ${theme.spacing(1)}px 0`,
        },
      },
    },
  },
  benefitsGridItemDiv: {
    [theme.breakpoints.up('md')]: {
      maxWidth: '50ch',
    },
  },
  benefitsGridContainer: {
    '& div:last-child': {
      margin: '0 auto',
    },
  },
  enterTaskcluster: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    color: theme.palette.secondary.light,
    textAlign: 'center',
    fontSize: '1.6rem',
    letterSpacing: '0.7rem',
  },
  tweetGrid: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactUsImageDiv: {
    display: 'flex',
    justifyContent: 'end',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
      flexDirection: 'row',
      alignItems: 'flex-start',
    },
  },
  contactSectionDiv: {
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
  },
  contactAndSourceSection: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.secondary.dark,
    borderTopLeftRadius: theme.spacing(12),
    borderTopRightRadius: theme.spacing(12),
    marginTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(6),
  },
  testimonialsDiv: {
    padding: `${32}px ${theme.spacing(4)}px`,
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing(4)}px ${theme.spacing(24)}px`,
    },
  },
  testimonialContent: {
    fontStyle: 'italic',
    marginBottom: theme.spacing(2),
  },
  testimonialAuthor: {
    marginBottom: theme.spacing(1),
  },
  wellPlayedGamesLogo: {
    borderBottom: 0,
    '&:hover': {
      borderBottom: 0,
    },
    marginLeft: -theme.spacing(0.5),
  },
}));
const benefits = [
  {
    title: 'Large-Scale',
    Icon: ChartLineIcon,
    content: (
      <Typography>
        The deployment of Taskcluster that runs Firefox CI routinely runs over
        7,000,000 tasks per month. It can easily handle 350,000 concurrent tasks
        without breaking a sweat. The release process for Firefox contains well
        over 8,000 individual tasks.
      </Typography>
    ),
  },
  {
    title: 'Customizable',
    Icon: CogBoxIcon,
    content: (
      <Typography>
        Taskcluster is designed as a flexible set of services and tools to build
        custom continuous integration, deployment, and release processes. Its
        micro-service architecture allows you to{' '}
        <Link href="https://docs.taskcluster.net/docs/manual/using/integration">
          easily adapt or replace an existing service
        </Link>{' '}
        to meet the needs of your business or project.
      </Typography>
    ),
  },
  {
    title: 'Cloud Agnostic',
    Icon: CloudOutlineIcon,
    content: (
      <Fragment>
        <Typography>
          Already have an established presence in AWS? Or GCP? Or Azure? Or
          packet.net? Or bitbar? Or your own hardware in a datacenter?
          Taskcluster supports them all.
        </Typography>
      </Fragment>
    ),
  },
  {
    title: 'Multi-Platform',
    Icon: CellphoneLinkIcon,
    content: (
      <Typography>
        Taskcluster{' '}
        <Link href="https://docs.taskcluster.net/docs/manual/task-execution/workers">
          workers will run on just about any device or cloud instance
        </Link>
        . Mozilla currently runs workers on Linux, MacOS, various flavours of
        Windows (including desktop variants like Windows 7 and Arm64), and a
        collection of different mobile devices. If you can get the worker code
        onto your device, it can run tasks via Taskcluster.
      </Typography>
    ),
  },
];
const features = [
  {
    title: 'Task Graphs',
    Icon: GroupIcon,
    content: (
      <Typography>
        Create deep{' '}
        <Link href="https://docs.taskcluster.net/docs/manual/using/task-graph">
          graphs of tasks
        </Link>{' '}
        with dependencies, e.g. tests depend on build tasks. As mentioned above,
        the task graph for the release process of Firefox contains well over
        8,000 individual tasks.
      </Typography>
    ),
  },
  {
    title: 'Scheduled Tasks',
    Icon: ClockTimeEightOutlineIcon,
    content: (
      <Typography>
        <Link href="https://docs.taskcluster.net/docs/manual/using/scheduled-tasks">
          Create tasks at specific times or days
        </Link>
        , e.g. nightly builds, periodic version bumps, slow integration tasks,
        weekly hygiene/clean-up jobs. This is cron for your CI pipeline.
      </Typography>
    ),
  },
  {
    title: 'Bring Your Own Worker',
    Icon: AccountHardHatIcon,
    content: (
      <Typography>
        <Link href="https://docs.taskcluster.net/docs/manual/task-execution/workers">
          Run your tasks on workers in the cloud, or on your own hardware, or
          both
        </Link>
        . If you can get the worker code on your device/instance, it can run
        tasks in Taskcluster.
      </Typography>
    ),
  },
  {
    title: 'Interactive Tasks',
    Icon: ConsoleLineIcon,
    content: (
      <Typography>
        <Link href="https://docs.taskcluster.net/docs/tutorial/debug-task">
          Get interactive shell, VNC, or RDP access to running workers
        </Link>
        , right in your web browser. Debugging running process in CI has never
        been easier.
      </Typography>
    ),
  },
  {
    title: 'GitHub Integration',
    Icon: GithubIcon,
    content: (
      <Typography>
        <Link href="https://docs.taskcluster.net/docs/reference/integrations/github/intro">
          Create tasks for pushes, pull requests(PRs), and tags
        </Link>
        . Report results via GitHub checks. Continue using the workflow tools
        you love while gaining the benefits of Taskcluster.
      </Typography>
    ),
  },
  {
    title: 'API Driven Design',
    Icon: CubeOutlineIcon,
    content: (
      <Typography>
        All access to the platform is via{' '}
        <Link href="https://docs.taskcluster.net/docs/manual/design/apis">
          REST API methods
        </Link>
        , with multi-language client libraries. You can easily extend or replace
        existing services based on your needs, or even develop new services
        entirely!
      </Typography>
    ),
  },
  {
    title: 'Access Control',
    Icon: KeyIcon,
    content: (
      <Typography>
        Access to API methods is controlled via granular, flexible{' '}
        <Link href="https://docs.taskcluster.net/docs/reference/platform/auth/scopes">
          scopes
        </Link>{' '}
        supporting delegation patterns. Access control can be as simple or
        complex as your project demands.
      </Typography>
    ),
  },
];
const Home = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <section className={classNames(classes.container, classes.firstSection)}>
        <Grid container spacing={10}>
          <Grid className={classes.content} item sm={12} md={8}>
            <div>
              <img
                alt="Taskcluster logo"
                src="https://media.taskcluster.net/logo/logo-96x120.png"
                className={classes.logo}
              />
            </div>
            <div>
              <Typography
                className={classes.teamName}
                gutterBottom
                variant="h2">
                TASKCLUSTER
              </Typography>
              <Typography variant="subtitle1">
                Taskcluster is the task execution framework that supports
                Mozilla&#39;s continuous integration and release processes. It
                is a flexible, scalable open-source framework that can be used
                to build complex, highly customized CI systems.
              </Typography>
              <div className={classes.docBtnDiv}>
                <Link target="_blank" href="https://docs.taskcluster.net">
                  <Button
                    className={classes.documentationButton}
                    variant="contained"
                    color="secondary"
                    startIcon={<BookOpenVariantIcon />}>
                    Documentation
                  </Button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            item
            sm={12}
            md={4}>
            <Hidden smDown>
              <div>
                <img
                  style={{ width: '100%', height: 'auto', maxWidth: 440 }}
                  alt="A person stepping on a bar chart that grows from left to right"
                  src={SteppingUpImage}
                />
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </section>
      <Divider className={classes.divider} />
      <section>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.testimonialsDiv}>
              <Typography variant="h5" className={classes.testimonialContent}>
                &quot;Taskcluster has given us more flexibility than any of the
                CI solutions we&apos;ve used in the past. It is well engineered,
                letting us easily pick and choose the components we need, and
                quickly replace any that don&apos;t suit our use cases. Its
                native support for Kubernetes meshes perfectly with our tech
                stack.&quot;
              </Typography>
              <Typography className={classes.testimonialAuthor}>
                <strong>Ricky Taylor,</strong> Co-Founder at Well Played Games
              </Typography>
              <Link
                className={classes.wellPlayedGamesLogo}
                rel="noopener nofollow"
                target="_blank"
                href="https://wellplayed.games">
                <img
                  alt="A logo of the company Well Played Games"
                  width={150}
                  src={WellPlayedLogo}
                />
              </Link>
            </div>
          </Grid>
        </Grid>
      </section>
      <Divider className={classes.divider} />
      <section
        className={classNames(
          classes.container,
          classes.builtForScaleSection,
          classes.section
        )}>
        <Typography gutterBottom variant="h2">
          Built for Scale
        </Typography>
        <Grid container spacing={10}>
          <Grid item sm={12} md={6}>
            <Typography gutterBottom>
              There are lots of continuous integration (CI) solutions out there
              that support simple workflows, but what if your CI process is more
              complex? What if you need something more customizable and more
              scalable?
            </Typography>
            <Typography
              variant="h5"
              className={classes.enterTaskcluster}
              gutterBottom>
              ENTER TASKCLUSTER.
            </Typography>
            <Typography>
              Taskcluster is a task execution framework developed by Mozilla.
              Initially designed in service of{' '}
              <Link href="https://firefox-ci-tc.services.mozilla.com/tasks/index/gecko.v2.mozilla-release.latest.firefox">
                Firefox
              </Link>{' '}
              and{' '}
              <Link href="https://community-tc.services.mozilla.com/tasks/index/project">
                Mozilla&#39;s new products,
              </Link>{' '}
              Taskcluster has grown into an open source tool that allows anyone
              to develop and deploy sophisticated CI solutions and release
              processes.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6} className={classes.tweetGrid}>
            <Tweet
              className={classes.tweet}
              avatar={CoopTwitterImage}
              quote="Firefox CI in January 2019: 7,139,432 tasks; 259.0 compute years; 1,071,533 unique workers; 383,411 maximum concurrent tasks #Mozilla #ContinuousIntegration #Taskcluster"
              tweet="https://twitter.com/ccooper/status/1093207589624709121?ref_src=twsrc%5Etfw"
              name="Chris Cooper"
              userName="@ccooper"
            />
          </Grid>
        </Grid>
      </section>
      <Divider className={classes.divider} />

      <section
        className={classNames(
          classes.container,
          classes.section,
          classes.benefitsSection
        )}>
        <Typography className={classes.sectionTitle} variant="h2">
          Benefits
        </Typography>
        <Grid container spacing={10}>
          {benefits.map(({ title, content, Icon }) => (
            <Grid
              key={title}
              className={classes.gridItemBenefits}
              item
              xs={12}
              sm={6}>
              <div className={classes.benefitsGridItemDiv}>
                <div className={classes.titleWithIcon}>
                  <Icon size={32} />
                  <Typography variant="h5">{title}</Typography>
                </div>
                {content}
              </div>
            </Grid>
          ))}
        </Grid>
      </section>
      <Divider className={classes.divider} />

      <section
        className={classNames(
          classes.container,
          classes.section,
          classes.featuresSection
        )}>
        <Typography className={classes.sectionTitle} variant="h2">
          Popular Features
        </Typography>
        <Grid className={classes.benefitsGridContainer} container spacing={10}>
          {features.map(({ Icon, title, content }) => (
            <Grid key={title} item xs={12} sm={6} md={4}>
              <div className={classes.titleWithIcon}>
                <Icon size={32} />
                <Typography variant="h5">{title}</Typography>
              </div>
              {content}
            </Grid>
          ))}
        </Grid>
      </section>

      <section
        className={classNames(
          classes.container,
          classes.contactAndSourceSection,
          classes.section
        )}>
        <div className={classes.contactSectionDiv}>
          <Typography gutterBottom variant="h4">
            We&apos;d Love to Hear from You
          </Typography>
          <Grid container>
            <Grid item sm={12} md={6}>
              <Typography gutterBottom>
                Get in touch with the Taskcluster team, whether to ask
                questions, meet fellow users, or get started contributing to the
                project.
              </Typography>
              <List className={classes.contactList}>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary={
                      <Link href="https://lists.mozilla.org/listinfo/tools-taskcluster">
                        tools-taskcluster@lists.mozilla.org
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChatIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Chat"
                    secondary={
                      <Link href="https://chat.mozilla.org/#/room/#taskcluster:mozilla.org">
                        #taskcluster:mozilla.org
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item md={6}>
              <Hidden smDown>
                <div className={classes.contactUsImageDiv}>
                  <img alt="A person writing a form" src={ContactUsImage} />
                </div>
              </Hidden>
            </Grid>
          </Grid>
        </div>
      </section>
    </Fragment>
  );
};

export default hot(module)(Home);
