import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'

import { heading, miningSeasons, miningPrepare } from './Data'
import Products from '~/components/Products'
import Heading from '~/components/Heading'
import styles from './Season.module.scss'

const cx = classNames.bind(styles)

function Season() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('season-container')}>
                    <div className={cx('season-banner1')}>
                        <Link to={''}>
                            <img src="https://hoabanfood.com/wp-content/uploads/on-season-hoabanfood.jpg" alt="" />
                        </Link>
                    </div>
                    <div className={'mining-season'}>
                        <Heading heading={heading[0]}></Heading>
                        <p className={cx('mining-season--title')}>
                            Các sản phẩm đang trong mùa khai thác, chế biến, sẵn sàng giao hàng Toàn Quốc.
                        </p>
                        <div className={cx('list-mining-pro')}>
                            <ul className={cx('row')}>
                                {miningSeasons.map((proItem, index) => (
                                    <li key={index} className={cx('col l-3')}>
                                        <Products proItem={proItem}></Products>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('season-banner2')}>
                        <Link to={''}>
                            <img src="https://hoabanfood.com/wp-content/uploads/next-season-hoabanfood.jpg" alt="" />
                        </Link>
                    </div>
                    <div className={'prepare-season'}>
                        <Heading heading={heading[1]}></Heading>
                        <p className={cx('prepare-season--title')}>
                            Các sản phẩm sắp đến mùa khai thác & chế biến. Xin vui lòng liên hệ 0914.268.535 để đặt hàng trước!
                        </p>
                        <div className={cx('list-prepare-pro')}>
                            <ul className={cx('row')}>
                                {miningPrepare.map((proItem, index) => (
                                    <li key={index} className={cx('col l-3')}>
                                        <Products proItem={proItem}></Products>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Season
