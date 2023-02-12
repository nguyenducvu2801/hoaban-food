import { faFacebookSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import {
    faBars,
    faBullhorn,
    faCircleXmark,
    faFileSignature,
    faGift,
    faHome,
    faMagnifyingGlass,
    faMapMarkedAlt,
    faPhone,
    faShoppingBag,
    faShoppingCart,
    faSpinner,
    faTrash,
    faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import images from '~/assets/images'
import config from '~/config'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const listLink = [
    {
        href: 'https://www.facebook.com/hoabanfood/',
        icon: <FontAwesomeIcon icon={faFacebookSquare} />,
        name: 'Facebook',
    },
    {
        href: 'https://www.youtube.com/user/HoaBanFood',
        icon: <FontAwesomeIcon icon={faYoutubeSquare} />,
        name: 'Youtube',
    },
    {
        href: 'https://www.tiktok.com/@hoabanfood',
        icon: null,
        name: 'Tiktok',
    },
    {
        href: 'https://hoabancamp.com/',
        icon: null,
        name: '+ HOA BAN CAMP',
    },
]

const listPages = [
    {
        to: config.routes.home,
        icon: <FontAwesomeIcon icon={faHome} />,
        name: 'TRANG CHỦ',
    },
    {
        to: config.routes.product,
        icon: <FontAwesomeIcon icon={faBars} />,
        name: 'SẢN PHẨM',
    },
    {
        to: config.routes.season,
        icon: <FontAwesomeIcon icon={faBullhorn} />,
        name: 'MÙA KHAI THÁC SẢN PHẨM',
    },
    {
        to: config.routes.combo,
        icon: <FontAwesomeIcon icon={faShoppingBag} />,
        name: 'COMBO',
    },
    {
        to: config.routes.gift,
        icon: <FontAwesomeIcon icon={faGift} />,
        name: 'QUÀ LƯU NIỆM',
    },
    {
        to: config.routes.post,
        icon: <FontAwesomeIcon icon={faFileSignature} />,
        name: 'ĐI & VIẾT',
    },
    {
        to: config.routes.introduce,
        icon: <FontAwesomeIcon icon={faUsers} />,
        name: 'GIỚI THIỆU',
    },
    {
        to: config.routes.contact,
        icon: <FontAwesomeIcon icon={faMapMarkedAlt} />,
        name: 'LIÊN HỆ',
    },
]

function Header() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('navbar')}>
                    <p className={cx('navbar__hotline')}>HOTLINE: 0914.268.535</p>
                    <ul className={cx('navbar__list-link')}>
                        {listLink.map((itemLink, index) => (
                            <li key={index} className={cx('list__link-item')}>
                                <a href={itemLink.href} className={cx('link-to-web')}>
                                    <span className={cx('icon-link-web')}>{itemLink.icon}</span>
                                    <span className={cx('name-link-web')}>{itemLink.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={cx('main__header')}>
                    <div className={cx('main__header-top')}>
                        <div className={cx('top__logo')}>
                            <Link to={config.routes.home} className={cx('logo-link')}>
                                <img src={images.logo} alt="HOA BAN" />
                            </Link>
                        </div>
                        <div className={cx('top__search')}>
                            <input className={cx('search-title')} placeholder="Tìm sản phẩm..." spellCheck={false} />
                            <button className={cx('search-clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('search-loading')} icon={faSpinner} />
                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                        <div className={cx('top__info')}>
                            <div className={cx('info-phone')}>
                                <FontAwesomeIcon icon={faPhone} />
                                <span className={cx('info-phone-number')}>0914.268.535</span>
                            </div>
                            <div className={cx('info-signin-login')}>
                                <Link to={config.routes.signin_login} className={cx('info-signin-login--link')}>
                                    ĐĂNG KÝ/ĐĂNG NHẬP
                                </Link>
                            </div>
                            <div className={cx('info-cart')}>
                                <Link to={config.routes.cart} className={cx('info-cart--link')}>
                                    <div className={cx('cart-title')}>GIỎ HÀNG /&nbsp;</div>
                                    <div className={cx('cart-total-amount')}>0đ</div>
                                    <div className={cx('cart-container')}>
                                        <FontAwesomeIcon className={cx('cart-icon')} icon={faShoppingCart} />
                                        <span className={cx('cart-total-item')}>22</span>
                                    </div>
                                </Link>
                                {/* <div className={cx('cart-no-product')}>Chưa có sản phẩm trong giỏ hàng.</div> */}
                                <div className={cx('cart-with-product')}>
                                    <ul className={cx('lists__product')}>
                                        <li className={cx('product__item')}>
                                            <div className={cx('product__item-link')}>
                                                <Link className={cx('product__item-img')}>
                                                    <img
                                                        src="https://hoabanfood.com/wp-content/uploads/nam-ngoc-cau-2017-500gram.jpg"
                                                        alt="Product"
                                                    />
                                                </Link>
                                                <Link className={cx('product__item-des')}>
                                                    Thịt trâu gác bếp do anh chị em chúng tôi ngả trâu, tự tay tẩm ướp,
                                                    gác bếp
                                                </Link>
                                            </div>
                                            <div className={cx('product__item-amount_remove')}>
                                                <span className={cx('product__item-amount')}>1 x 850,000đ</span>
                                                <span className={cx('product__item-remove')}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </div>
                                        </li>
                                        <li className={cx('product__item')}>
                                            <div className={cx('product__item-link')}>
                                                <Link className={cx('product__item-img')}>
                                                    <img
                                                        src="https://hoabanfood.com/wp-content/uploads/Ruou-Sau-Chit-HBF-2018-3.jpg"
                                                        alt="Product"
                                                    />
                                                </Link>
                                                <Link className={cx('product__item-des')}>Rượu sâu chít</Link>
                                            </div>
                                            <div className={cx('product__item-amount_remove')}>
                                                <span className={cx('product__item-amount')}>1 x 850,000đ</span>
                                                <span className={cx('product__item-remove')}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </div>
                                        </li>
                                        <li className={cx('product__item')}>
                                            <div className={cx('product__item-link')}>
                                                <Link className={cx('product__item-img')}>
                                                    <img
                                                        src="https://hoabanfood.com/wp-content/uploads/nam-ngoc-cau-2017-500gram.jpg"
                                                        alt="Product"
                                                    />
                                                </Link>
                                                <Link className={cx('product__item-des')}>Thịt trâu gác bếp</Link>
                                            </div>
                                            <div className={cx('product__item-amount_remove')}>
                                                <span className={cx('product__item-amount')}>1 x 850,000đ</span>
                                                <span className={cx('product__item-remove')}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </div>
                                        </li>
                                        <li className={cx('product__item')}>
                                            <div className={cx('product__item-link')}>
                                                <Link className={cx('product__item-img')}>
                                                    <img
                                                        src="https://hoabanfood.com/wp-content/uploads/nam-ngoc-cau-2017-500gram.jpg"
                                                        alt="Product"
                                                    />
                                                </Link>
                                                <Link className={cx('product__item-des')}>Thịt trâu gác bếp</Link>
                                            </div>
                                            <div className={cx('product__item-amount_remove')}>
                                                <span className={cx('product__item-amount')}>1 x 850,000đ</span>
                                                <span className={cx('product__item-remove')}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </div>
                                        </li>
                                        <li className={cx('product__item')}>
                                            <div className={cx('product__item-link')}>
                                                <Link className={cx('product__item-img')}>
                                                    <img
                                                        src="https://hoabanfood.com/wp-content/uploads/nam-ngoc-cau-2017-500gram.jpg"
                                                        alt="Product"
                                                    />
                                                </Link>
                                                <Link className={cx('product__item-des')}>Thịt trâu gác bếp</Link>
                                            </div>
                                            <div className={cx('product__item-amount_remove')}>
                                                <span className={cx('product__item-amount')}>1 x 850,000đ</span>
                                                <span className={cx('product__item-remove')}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </div>
                                        </li>
                                        <li className={cx('product__item')}>
                                            <div className={cx('product__item-link')}>
                                                <Link className={cx('product__item-img')}>
                                                    <img
                                                        src="https://hoabanfood.com/wp-content/uploads/nam-ngoc-cau-2017-500gram.jpg"
                                                        alt="Product"
                                                    />
                                                </Link>
                                                <Link className={cx('product__item-des')}>Thịt trâu gác bếp</Link>
                                            </div>
                                            <div className={cx('product__item-amount_remove')}>
                                                <span className={cx('product__item-amount')}>1 x 850,000đ</span>
                                                <span className={cx('product__item-remove')}>
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className={cx('cart-total-money')}>
                                        <span className={cx('money-title')}>Tổng số phụ : &nbsp;</span>
                                        <span className={cx('money-amount')}>2,350,000đ</span>
                                    </div>
                                    <div className={cx('cart-review')}>
                                        <Link to={config.routes.cart} className={cx('cart-review-link')}>XEM GIỎ HÀNG</Link>
                                    </div>
                                    <div className={cx('cart-pay')}>
                                        <Link to={config.routes.checkout} className={cx('cart-pay-link')}>THANH TOÁN</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('main__header-bottom')}>
                        <ul className={cx('bottom-pages')}>
                            {listPages.map((itemPage, index) => (
                                <li key={index} className={cx('list-page-item')}>
                                    <Link to={itemPage.to} className={cx('link-to-page')}>
                                        <span className={cx('icon-link-page')}>{itemPage.icon}</span>
                                        <span className={cx('name-link-page')}>{itemPage.name}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
