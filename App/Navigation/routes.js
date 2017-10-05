import Home from '~/Scene/Home';
import Login from '~/Scene/Auth/Login';
import ForgotPassword from '~/Scene/Auth/ForgotPassword/';
import NewsFeed from '~/Scene/NewsFeed';
import Notification from '~/Scene/Notification';
import People from '~/Scene/People';
import Profile from '~/Scene/Profile';
import EditProfile from '~/Scene/Profile/EditProfile';
import Setting from '~/Scene/Setting';
import Schedule from '~/Scene/Schedule';
import Splash from '~/Scene/Splash';
import ChangePassword from '~/Scene/Profile/ChangePassword';

export const ROUTES = {
  splash: {
    name: 'Splash',
    path: '/splash',
    screen: Splash,
    icon: {
      name: 'home',
    },
  },
  home: {
    name: 'Home',
    path: '/',
    screen: Home,
    icon: {
      name: 'home',
    },
  },
  login: {
    name: 'Login',
    path: '/login',
    screen: Login,
    icon: {
      name: 'login-variant',
      type: 'material-community',
    },
  },
  forgot: {
    name: 'Forgot Password',
    path: '/forgot-password',
    screen: ForgotPassword,
    icon: {
      name: 'login-variant',
      type: 'material-community',
    },
  },
  setting: {
    name: 'Setting',
    path: '/setting',
    screen: Setting,
    icon: {
      name: 'settings',
      type: 'material-community',
    },
  },
  newsFeed: {
    name: 'News Feed',
    path: '/news-feed',
    screen: NewsFeed,
    icon: {
      name: 'newspaper',
      type: 'material-community',
    },
  },
  schedule: {
    name: 'Schedule',
    path: '/schedule',
    screen: Schedule,
    icon: {
      name: 'calendar-blank',
      type: 'material-community',
    },
    activeIcon: {
      name: 'calendar-text',
      type: 'material-community',
    },
    // initial: true,
  },
  people: {
    name: 'People',
    path: '/people',
    screen: People,
    icon: {
      name: 'people-outline',
    },
    activeIcon: {
      name: 'people',
    },
  },
  profile: {
    name: 'Profile',
    path: '/profile',
    screen: Profile,
    icon: {
      name: 'face-profile',
      type: 'material-community',
    },
    initial: true,
  },
  changePassword: {
    name: 'Change Password',
    path: '/change-password',
    screen: ChangePassword,
    icon: {
      name: 'face-profile',
      type: 'material-community',
    },
  },
  editProfile: {
    name: 'Edit Profile',
    path: '/profile/edit',
    screen: EditProfile,
    icon: {
      name: 'face-profile',
      type: 'material-community',
    },
    initial: true,
  },
  notification: {
    name: 'Notification',
    path: '/notification',
    screen: Notification,
    icon: {
      name: 'notifications-none',
    },
    activeIcon: {
      name: 'notifications',
    },
  },
};

export const config = {
  navigationOptions: {
    header: null,
  },
  cardStyle: {
    shadowOpacity: 0,
  },
};

export default {
  ROUTES,
  config,
};
