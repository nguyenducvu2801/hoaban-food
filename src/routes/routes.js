import config from '~/config';
import OtherLayout from '~/layouts/OtherLayout';

import Home from '~/pages/Home';
import Product from '~/pages/Product';
import Season from '~/pages/Season';
import Combo from '~/pages/Combo';
import Gift from '~/pages/Gift';
import Post from '~/pages/Post';
import Introduce from '~/pages/Introduce';
import Contact from '~/pages/Contact';
import OtherPage from '~/pages/OtherPage';

import SignIn_LogIn from '~/pages/SignIn_LogIn';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';

const publicRoutes = [
    { path: config.routes.home, component: Home},
    { path: config.routes.product, component: Product},
    { path: config.routes.product2, component: Product},
    { path: config.routes.product3, component: Product},
    { path: config.routes.product4, component: Product},
    { path: config.routes.product5, component: Product},
    { path: config.routes.season, component: Season},
    { path: config.routes.combo, component: Combo},
    { path: config.routes.gift, component: Gift},
    { path: config.routes.post, component: Post},
    { path: config.routes.introduce, component: Introduce},
    { path: config.routes.contact, component: Contact},
    { path: config.routes.other, component: OtherPage, layout:OtherLayout},
    { path: config.routes.signin_login, component: SignIn_LogIn},
    { path: config.routes.cart, component: Cart},
    { path: config.routes.checkout, component: Checkout},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}