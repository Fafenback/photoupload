
import Login from './containers/Login';
import Test from './containers/Test';
import PhotosList from './containers/PhotosList';
import Signup from './containers/Signup';

const routes = [{
	path: '/',
	component: PhotosList,
	exact: true
},{
	path: '/login',
	component: Login,
	exact: true
},{
	path:'/signup',
	component: Signup,
	exact: true,
},{
	path: '/test',
	component: Test,
	exact: true
}]

export default routes;