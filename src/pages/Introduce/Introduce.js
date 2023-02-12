import classNames from 'classnames/bind'

import styles from './Introduce.module.scss'

const cx = classNames.bind(styles)

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('intro-container')}>
                    <h2 className={cx('intro-heading')}>GIỚI THIỆU</h2>
                    <span className={cx('horizontal-bar')}></span>
                    <h2 className={cx('intro-heading')}>THƯ NGỎ...</h2>
                    <p className={cx('intro-para')}>
                        Các bác thân mến! Thành lập và hoạt động từ 2012, HOA BAN FOOD™ là đại diện tập thể anh chị em
                        chúng tôi, từ các bản làng Tây Bắc xa xôi, cùng khai thác, chế biến các sản phẩm, đặc sản Tây
                        Bắc chất lượng cao, an toàn & tốt cho sức khỏe để gửi tới tất cả Quý anh chị khách hàng ở khắp
                        mọi miền Tổ Quốc.
                    </p>
                    <div className={cx('intro-video')}>
                        <iframe
                            className={cx('intro-video-link')}
                            src="https://www.youtube.com/embed/u0Xr3qLLmYI?enablejsapi=1&autoplay=0&cc_load_policy=0&cc_lang_pref=&iv_load_policy=1&loop=0&modestbranding=0&rel=0&fs=1&playsinline=0&autohide=2&theme=dark&color=red&controls=1&"
                        ></iframe>
                    </div>
                    <p className={cx('intro-para')}>
                        HOA BAN FOOD™ không đơn thuần chỉ là kinh doanh các sản vật Tây Bắc, mà còn mong muốn gắn kết,
                        giới thiệu văn hóa, ẩm thực và cuộc sống đơn giản của bà con đồng bào Tây Bắc, cuộc sống đơn
                        giản, nhưng thật, thật giàu tình cảm từ các bản làng xa xôi tới tất cả anh chị em cô chú ở mọi
                        miền Tổ Quốc dành mến thương cho Tây Bắc xa xôi Tây Bắc!
                    </p>
                    <h3 className={cx('intro-heading')}>CHÚNG TÔI LÀM VIỆC VỚI AI?!</h3>
                    <p className={cx('intro-para')}>
                        Đối tác & Cộng sự của HOA BAN FOOD™ không có trụ sở công ty hoành tráng, không biết mặc Com Lê
                        và chả biết sử dụng máy vi tính. chúng tôi đơn giản chỉ là những người phụ nữ đồng bào dân tộc
                        giản dị, chăm chỉ, chịu khó! Những anh em đồng bào dân tộc khỏe mạnh, tháo vát, nhiệt tình!
                        Những người già khéo tay, tỉ mỉ ở những bản làng xa xôi tít mù nơi rừng núi Tây Bắc. Chúng tôi
                        tìm kiếm & cung cấp sản phẩm, và tất nhiên theo các yêu cầu về chất lượng của HOA BAN FOOD™ quy
                        định. Đơn giản thế thôi….
                    </p>
                    <p className={cx('intro-para')}>
                        Những anh em dân bản chúng tôi, am hiểu sông, suối, rừng núi như lòng bàn tay. Khỏe mạnh – tháo
                        vát – nhiệt tình và trung thực là người mà chúng tôi mạn phép gọi là “Thợ Săn – Hunters”. Những
                        đêm băng rừng đi tìm mật ong, cho đến những chuyến đi săn bắt cá sông/suối kéo dài nhiều ngày.
                        Đi cùng anh em, ăn cùng 1 nồi, ngủ cùng 1 tấm vải bạt. Chúng tôi quá hiểu & tôn trọng, và tin
                        tưởng lẫn nhau.
                    </p>
                    <img
                        className={cx('intro-img')}
                        src="https://hoabanfood.com/wp-content/uploads/HTX-HBF-Gold-small.jpg"
                        alt=""
                    />
                    <p className={cx('intro-para')}>
                        Chị em phụ nữ nơi những bản làng Tây Bắc, thương con, chiều chồng, mến khách và cực kì chịu khó.
                        Là hậu phương vững, làm tất cả những công việc hoàn thiện sản phẩm mà anh em chúng tôi khai thác
                        được! Từ những giọt mật ong rừng thơm lừng, cho đến những hạt gia vị bé li ti…đã được các chị
                        em, cô, bà làm, dưới sự yêu cầu – giám sát chặt chẽ về quy trình, phương thức khai thác, chế
                        biến. Chính là cam kết đảm bảo nhất để quý khách hàng gần xa đã tin dùng & tín nhiệm trong 7 năm
                        qua.
                    </p>
                    <img
                        className={cx('intro-img')}
                        src="https://hoabanfood.com/wp-content/uploads/who-we-are-3-b.jpg"
                        alt=""
                    />
                    <div className={cx('intro-contact')}>
                        <span>Trân trọng</span>
                        <span>Tập thể HOA BAN FOOD™ </span>
                        <span>Facebook: www.facebook.com/HOABANFOOD | Email: tan@hoabanfood.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduce
