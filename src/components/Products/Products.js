import classNames from "classnames/bind"
import { Link } from "react-router-dom"

import styles from './Products.module.scss'

const cx = classNames.bind(styles)

function Products({proItem}) {
    // const {proItem, to, image1, image2, name, price} = props
    return (
        <div className={cx('pro__item')}>
            <div className={cx('pro__item-link')}>
                <Link to={proItem.to} className={cx('pro__item-link-img1')}>
                    <img src={proItem.image1} alt="" />
                </Link>
                <Link to={proItem.to} className={cx('pro__item-link-img2')}>
                    <img src={proItem.image2} alt="" />
                </Link>
            </div>
            <div className={cx('pro__item-des')}>
                <Link to={proItem.to} className={cx('pro__item-name')}>
                    {proItem.name}
                </Link>
                <div className={cx('pro__item-price')}>
                    <span>Giá: &nbsp;</span>
                    <span className={cx('pro__item-price-detail')}>{proItem.price}</span>
                </div>
            </div>
        </div>
    )
}

export default Products
