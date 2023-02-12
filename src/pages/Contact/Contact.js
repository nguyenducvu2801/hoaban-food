import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faHome, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import Heading from '~/components/Heading'
import Slides from '~/components/Slides'
import Button from '~/components/Button'
import { heading, listSlide } from './Data'
import styles from './Contact.module.scss'

const cx = classNames.bind(styles)

function Contact() {
    const [toggleVietcomInfo, setToggleVietcomInfo] = useState(false)
    const [toggleAgriInfo, setToggleAgriInfo] = useState(false)
    const [toggleClassVietcom, setToggleClassVietcom] = useState(false)
    const [toggleClassAgri, setToggleClassAgri] = useState(false)

    const handleToggleVietcomInfo = () => {
        setToggleVietcomInfo(!toggleVietcomInfo)
        setToggleClassVietcom(!toggleClassVietcom)
    }
    const handleToggleAgriInfo = () => {
        setToggleAgriInfo(!toggleAgriInfo)
        setToggleClassAgri(!toggleClassAgri)
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('contact-container')}>
                    <div className={cx('row')}>
                        <div className={cx('col l-9')}>
                            <div className={cx('contact__left-container')}>
                                <div className={cx('heading')}>
                                    <Heading heading={heading[0]}></Heading>
                                </div>
                                <div className={cx('slide')}>
                                    <Slides listSlide={listSlide}></Slides>
                                </div>
                                <p className={cx('contact-left-para')}>
                                    Kính mời quý anh chị ghé thăm HOA BAN FOOD™ để được tư vấn, lựa chọn các sản phẩm
                                    chất lượng cao mà chúng tôi cùng anh chị em đồng bào Tây Bắc khai thác & cung cấp!
                                    Và tất nhiên, chúng tôi phục vụ giao hàng tận nhà trong nội thành Hà Nội!
                                </p>
                                <p className={cx('contact-left-para')}>
                                    Còn đối với Quý anh chị chưa tiện để ghé thăm. Xin vui lòng đặt hàng trực tiếp trên
                                    website này, hoặc gọi trực tiếp đến hotline 0914.268.535 để được tư vấn & đặt hàng.
                                    Chúng tôi giao hàng tận nơi, thanh toán khi nhận hàng!
                                </p>
                                <div className={cx('dash-line')}></div>
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
                                <div className={cx('bank-info')}>
                                    <h3 className={cx('bank-heading')}>Tài khoản ngân hàng</h3>
                                    <p className={cx('bank-para')}>
                                        Đối với quý khách chuyển khoản thanh toán qua Ngân hàng, vui lòng thanh toán qua
                                        2 tài khoản dưới đây. Vui lòng ghi rõ ID đơn hàng, hoặc số điện thoại người
                                        thanh toán trong phần ghi chú của chuyển khoản.
                                    </p>
                                    <div className={cx('bank-vietcom')}>
                                        <div
                                            className={cx(
                                                toggleClassVietcom ? 'bank-vietcom-title-modify' : 'bank-vietcom-title',
                                            )}
                                            onClick={handleToggleVietcomInfo}
                                        >
                                            <FontAwesomeIcon className={cx('icon-down')} icon={faAngleDown} />
                                            <span className={cx('bank-vietcom--name')}>Vietcombank</span>
                                        </div>
                                        {toggleVietcomInfo && (
                                            <div className={cx('bank-vietcom-des')}>
                                                <ul>
                                                    <li>
                                                        <span className={cx('title')}>Ngân hàng</span>
                                                        <span className={cx('name')}>&nbsp; Vietcombank &nbsp;</span>-
                                                        Chi nhánh Hà Nội
                                                    </li>
                                                    <li>
                                                        Số tài khoản: &nbsp;
                                                        <span className={cx('phone-number')}>0011001948278</span>
                                                    </li>
                                                    <li>Chủ tài khoản: Phạm Ngọc Tân</li>
                                                </ul>
                                                <img
                                                    className={cx('bank-vietcom-qr')}
                                                    src="https://hoabanfood.com/wp-content/uploads/Vietcombank-QR-Code-768x760.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div className={cx('bank-agri')}>
                                        <div
                                            className={cx(
                                                toggleClassAgri ? 'bank-agri-title-modify' : 'bank-agri-title',
                                            )}
                                            onClick={handleToggleAgriInfo}
                                        >
                                            <FontAwesomeIcon className={cx('icon-down')} icon={faAngleDown} />
                                            <span className={cx('bank-agri--name')}>Agribank</span>
                                        </div>
                                        {toggleAgriInfo && (
                                            <div className={cx('bank-agri-des')}>
                                                <ul>
                                                    <li>
                                                        <span className={cx('title')}>Ngân hàng</span>
                                                        <span className={cx('name')}>&nbsp; Agribank &nbsp;</span>- Chi
                                                        nhánh Tam Trinh
                                                    </li>
                                                    <li>
                                                        Số tài khoản: &nbsp;
                                                        <span className={cx('phone-number')}>1508205263434</span>
                                                    </li>
                                                    <li>Chủ tài khoản: Phạm Ngọc Tân</li>
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={cx('heading')}>
                                    <Heading heading={heading[1]}></Heading>
                                </div>
                                <div className={cx('contact-social')}>
                                    <div className={cx('social-item')}>
                                        <Link to={''} className={cx('social-link')}>
                                            <div className={cx('social-item--logo')}>
                                                <img
                                                    src="https://hoabanfood.com/wp-content/uploads/youtube-logo.png"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                        <div className={cx('social-item--text')}>
                                            <span>Kênh youtube</span>
                                            <span>Một trời Tây Bắc</span>
                                        </div>
                                    </div>
                                    <div className={cx('social-item')}>
                                        <Link to={''} className={cx('social-link')}>
                                            <div className={cx('social-item--logo')}>
                                                <img
                                                    src="https://hoabanfood.com/wp-content/uploads/facebook-logo.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                        <div className={cx('social-item--text')}>
                                            <span>Facebook</span>
                                            <span>Kết nối</span>
                                        </div>
                                    </div>
                                    <div className={cx('social-item')}>
                                        <Link to={''} className={cx('social-link')}>
                                            <div className={cx('social-item--logo')}>
                                                <img
                                                    src="https://hoabanfood.com/wp-content/uploads/Instagram-logo.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                        <div className={cx('social-item--text')}>
                                            <span>Instagram</span>
                                            <span>Photo & video</span>
                                        </div>
                                    </div>
                                    <div className={cx('social-item')}>
                                        <Link to={''} className={cx('social-link')}>
                                            <div className={cx('social-item--logo')}>
                                                <img
                                                    src="https://hoabanfood.com/wp-content/uploads/Tiktok.png"
                                                    alt=""
                                                />
                                            </div>
                                        </Link>
                                        <div className={cx('social-item--text')}>
                                            <span>TikTok</span>
                                            <span>More fun</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('feedback')}>
                                    <h3>Trả lời</h3>
                                    <p>
                                        Email của bạn sẽ không được hiển thị công khai. Các trường hợp bắt buộc được
                                        đánh dấu <sup>*</sup>
                                    </p>
                                    <p>
                                        Bình luận <sup>*</sup>
                                    </p>
                                    <div className={cx('feedback-text')}>
                                        <textarea className={cx('feedback-textarea')}></textarea>
                                    </div>
                                    <div className={cx('feedback__info')}>
                                        <div className={cx('feedback__info-title')}>
                                            <span>
                                                Tên<sup>*</sup>
                                            </span>
                                            <input type={'text'} />
                                        </div>
                                        <div className={cx('feedback__info-title')}>
                                            <span>
                                                Email<sup>*</sup>
                                            </span>
                                            <input type={'text'} />
                                        </div>
                                        <div className={cx('feedback__info-title')}>
                                            <span>
                                                Trang web<sup>*</sup>
                                            </span>
                                            <input type={'text'} />
                                        </div>
                                    </div>
                                    <div className={cx('checkbox')}>
                                        <input type={'checkbox'} />
                                        <span>
                                            Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận
                                            kế tiếp của tôi.
                                        </span>
                                    </div>
                                    {/* <Button primary to='/phanhoi' href='https://fullstack.edu.vn/' target=''_blank onClick={() => alert('Clicked!')}>Phản hồi</Button> */}
                                    <div className={cx('feedback-btn')}>
                                        <Button primary>Phản hồi</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('col l-3')}>
                            <div className={cx('contact__right-container')}>
                                <div className={cx('category')}>
                                    <div className={cx('category-name')}>
                                        <h4>Danh mục sp</h4>
                                        <span></span>
                                    </div>
                                    <Link to={''} className={cx('category-link')}>
                                        Mật ong & Tam thất
                                    </Link>
                                    <Link to={''} className={cx('category-link')}>
                                        Thực phẩm & Gia vị
                                    </Link>
                                    <Link to={''} className={cx('category-link')}>
                                        Rượu & Đồ ngâm rượu
                                    </Link>
                                    <Link to={''} className={cx('category-link')}>
                                        Quà lưu niệm
                                    </Link>
                                    <Link to={''} className={cx('category-img')}>
                                        <img
                                            src="https://hoabanfood.com/wp-content/uploads/Mat-Ong-Rung-Song-Da-2022-banner-1.jpg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className={cx('category')}>
                                    <div className={cx('category-name')}>
                                        <h4>Sản phẩm vừa xem</h4>
                                        <span></span>
                                    </div>
                                    <Link to={''} className={cx('category-img')}>
                                        <img
                                            src="https://hoabanfood.com/wp-content/uploads/Combo-Mac-Khen-Hat-Doi-2021-1.jpg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className={cx('category')}>
                                    <div className={cx('category-name')}>
                                        <h4>Sản phẩm nổi bật</h4>
                                        <span></span>
                                    </div>
                                    <Link to={''} className={cx('category-img')}>
                                        <img
                                            src="https://hoabanfood.com/wp-content/uploads/ca-thit-gac-bep-side-banner-2.jpg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                                <div className={cx('category')}>
                                    <div className={cx('category-name')}>
                                        <h4>Đồ cắm trại, dã ngoại!</h4>
                                        <span></span>
                                    </div>
                                    <Link to={''} className={cx('category-img')}>
                                        <img
                                            src="https://hoabanfood.com/wp-content/uploads/hoabancamp-icon-2.jpg"
                                            alt=""
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
