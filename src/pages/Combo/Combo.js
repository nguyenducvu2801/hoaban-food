import classNames from "classnames/bind";

import styles from './Combo.module.scss'
import Slides from "~/components/Slides";
import Products from "~/components/Products";
import Heading from "~/components/Heading";
import { heading, listSlide, comboProduct, separateProduct } from './Data'

const cx = classNames.bind(styles)

function Combo() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('combo-container')}>
                    <Slides listSlide={listSlide}></Slides>
                    <div className={'combo-pro'}>
                        <Heading heading={heading[0]}></Heading>
                        <p className={cx('combo-pro--title')}>
                            Các sản phẩm combo – nhiều hơn, tiết kiệm & tiện lợi hơn cho Quý anh chị lựa chọn và sử dụng cho Gia Đình mình!
                        </p>
                        <div className={cx('list-combo-pro')}>
                            <ul className={cx('row')}>
                                {comboProduct.map((proItem, index) => (
                                    <li key={index} className={cx('col l-3')}>
                                        <Products proItem={proItem}></Products>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={'separate-pro'}>
                        <Heading heading={heading[1]}></Heading>
                        <p className={cx('separate-pro--title')}>
                            Hoặc chọn cho gia đình mình từng sản phẩm riêng lẻ phù hợp nhất như dưới đây!
                        </p>
                        <div className={cx('list-separate-pro')}>
                            <ul className={cx('row')}>
                                {separateProduct.map((proItem, index) => (
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

export default Combo;