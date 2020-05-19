import { RouteProps } from 'react-router-dom';
import App from '../pages/app';
import PrivacyPolicy from '../pages/privacyPolicy';
import TermsAndConditions from '../pages/termsAndConditions';
import ReferAndEarn from '../pages/referAndEarn';
import NotFound from '../pages/notFound';
import { ROUTE_LIST } from './constants';
export const AppRoutes: RouteProps[] = [
  {
    path: '/',
    component: App,
    exact: true,
  },
  {
    path: `${ROUTE_LIST.privacy}`,
    component: PrivacyPolicy,
  },
  {
    path: `${ROUTE_LIST.terms}`,
    component: TermsAndConditions,
  },
  {
    path: `${ROUTE_LIST.refer}`,
    component: ReferAndEarn,
  },
  {
    path: '/*',
    component: NotFound,
  }
];