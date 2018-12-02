
import LandingPage from './containers/LandingPage';
import Login from './containers/Login';
import Test from './containers/Test'

const routes = [{
	path: '/',
	component: LandingPage,
},{
	path: '/login',
	component: Login
},{
	path: '/test',
	component: Test
}]

export default routes;