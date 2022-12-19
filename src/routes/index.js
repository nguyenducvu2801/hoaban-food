import OtherLayout from '~/layouts/OtherLayout';

import Home from '~/pages/Home';
import Combo from '~/pages/Combo';
import Season from '~/pages/Season';

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/combo', component: Combo},
    { path: '/season', component: Season, layout:OtherLayout},
]

const privateRoutes = []

export {publicRoutes, privateRoutes}