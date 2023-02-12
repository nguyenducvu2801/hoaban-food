import classNames from "classnames/bind";

import Products from "~/components/Products";
import Heading from "~/components/Heading";
import { heading, listSouvenir, listOtherSouvenir } from './Data'
import styles from './Gift.module.scss'

const cx = classNames.bind(styles)

function Gift() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('gift-container')}>
                    <div className={cx('gift-video')}>
                        <iframe className={cx('gift-video-link')} src='https://www.youtube.com/embed/u0Xr3qLLmYI?enablejsapi=1&autoplay=0&cc_load_policy=0&cc_lang_pref=&iv_load_policy=1&loop=0&modestbranding=0&rel=0&fs=1&playsinline=0&autohide=2&theme=dark&color=red&controls=1&'></iframe>
                    </div>
                    <div className={'souvenir-pro'}>
                        <Heading heading={heading[0]}/>
                        <p className={cx('souvenir-pro--title')}>
                            Các đồ dùng truyền thống của bản làng Tây Bắc từ Mây, Tre được anh em chúng tôi đan, vót thủ công để gửi đến Quý Anh Chị bạn hữu & khách hàng gần xa.
                        </p>
                        <div className={cx('list-souvenir-pro')}>
                            <ul className={cx('row')}>
                                {listSouvenir.map((proItem, index) => (
                                    <li key={index} className={cx('col l-4')}>
                                        <Products proItem={proItem}></Products>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={'handmade-pro'}>
                        <Heading heading={heading[1]}></Heading>
                        <div className={cx('list-handmade-pro')}>
                            <ul className={cx('row')}>
                                {listOtherSouvenir.map((proItem, index) => (
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

export default Gift;