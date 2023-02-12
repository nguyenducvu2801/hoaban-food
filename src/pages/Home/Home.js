import classNames from 'classnames/bind'

import styles from './Home.module.scss'
import { heading, listSlide, listGiftPro, listOtherPro, listSouvenirPro } from './Data'
import Slides from '~/components/Slides'
import Heading from '~/components/Heading'
import Products from '~/components/Products'

const cx = classNames.bind(styles)

function Home() {
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('home-container')}>
                    <Slides listSlide={listSlide}></Slides>
                    <div className={cx('gift-pro')}>
                        <Heading heading={heading[0]}></Heading>
                        <p className={cx('gift-pro--title')}>
                            Món ngon & dược liệu quý từ bản, thân mến gửi quý anh chị em ở khắp mọi miền Tổ Quốc!
                        </p>
                        <div className={cx('list-gift-pro')}>
                            <ul className={cx('row')}>
                                {listGiftPro.map((proItem, index) => (
                                    <li key={index} className={cx('col l-4')}>
                                        <Products proItem={proItem}></Products>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('other-pro')}>
                        <Heading heading={heading[1]}></Heading>
                        <div className={cx('list-other-pro')}>
                            <ul className={cx('row')}>
                                {listOtherPro.map((proItem, index) => (
                                    <li key={index} className={cx('col l-3')}>
                                        <Products proItem={proItem}></Products>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={cx('souvenir-pro')}>
                        <Heading heading={heading[2]}></Heading>
                        <div className={cx('list-souvenir-pro')}>
                            <ul className={cx('row')}>
                                {listSouvenirPro.map((proItem, index) => (
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

export default Home
