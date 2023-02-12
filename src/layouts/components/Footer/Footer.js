import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { faHome, faPhone, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'


// import images from '~/assets/images'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('top-footer')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-4 m-4 c-12 footer__traditional-contact')}>
                            <h3 className={cx('traditional-contact-title')}>Liên hệ với chúng tôi</h3>
                            <div className={cx('traditional-contact-phone')}>
                                <span className={cx('contact-phone--icon')}>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <span className={cx('contact-phone--number')}>0914.268.535 - 0961.214.914</span>
                            </div>
                            <p className={cx('footer__work-time')}>
                                Giờ làm việc: Thứ 2 &rarr; thứ 7 từ 8:00 đến 21:30 | Chủ Nhật từ 8:30 đến 17:30
                            </p>
                            <div className={cx('traditional-contact-home')}>
                                <span className={cx('contact-home--icon')}>
                                    <FontAwesomeIcon icon={faHome} />
                                </span>
                                <span className={cx('contact-home--name')}>HOA BAN FOOD</span>
                            </div>
                            <p className={cx('footer__home-add')}>
                                Nhà số 7, Khu liền kề Minori, 67A Trương Định, Quận Hai Bà Trưng, Hà Nội
                            </p>
                        </div>
                        <div className={cx('col l-4 m-4 c-12 footer__social-contact')}>
                            <h3 className={cx('social-contact-title')}>Facebook</h3>
                        </div>
                        <div className={cx('col l-4 m-4 c-12 footer__youtube-contact')}>
                            <h3 className={cx('youtube-contact-title')}>Youtube</h3>
                            <div className={cx('youtube-contact')}>
                                <Link className={cx('youtube-logo-link')}><img src='https://yt3.ggpht.com/BWjiT_WZuwJ2hD-lTVGcVdtFpuvT_KzhykZv1IJFSTQGFtli2XPaeoHZa3T5jIzhWr2j0SxAlw=s48-c-k-c0x00ffffff-no-rj' alt=""/></Link>
                                <div className={cx('youtube-hoaban-link')}>
                                    <Link className={cx('youtube-hoaban-title-link')}>HOA BAN FOOD</Link>
                                    <div className={cx('youtube-hoaban-icon')}>
                                        <Link className={cx('youtube-hoaban-icon-link')}>
                                            <FontAwesomeIcon icon={faYoutubeSquare}/> Youtube
                                        </Link>
                                        <span className={cx('youtube-statistics')}>999+</span>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('youtube-contact')}>
                                <Link className={cx('youtube-logo-link')}><img src='https://yt3.ggpht.com/ytc/AMLnZu-w15iWQTb0NC-t2GeSglQK1hIlbCx0TaNYzN2DMA=s48-c-k-c0x00ffffff-no-rj' alt=""/></Link>
                                <div className={cx('youtube-hoaban-link')}>
                                    <Link className={cx('youtube-hoaban-title-link')}>HOA BAN CAMP</Link>
                                    <div className={cx('youtube-hoaban-icon')}>
                                        <Link className={cx('youtube-hoaban-icon-link')}>
                                            <FontAwesomeIcon icon={faYoutubeSquare}/> Youtube
                                        </Link>
                                        <span className={cx('youtube-statistics')}>999+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('bottom-footer')}>Copyright 2022 © &nbsp;<b>HOA BAN FOOD™</b></div>
            </div>
        </div>
    )
}

export default Footer
