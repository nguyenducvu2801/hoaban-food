import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import styles from './Slides.module.scss'

const cx = classNames.bind(styles)

function Slides({ listSlide }) {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = listSlide.length

    const nextBtn = () => {
        currentSlide === -100 * (slideLength - 1) ? setCurrentSlide(0) : setCurrentSlide(currentSlide - 100)
    }

    const prevBtn = () => {
        currentSlide === 0 ? setCurrentSlide(-100 * (slideLength - 1)) : setCurrentSlide(currentSlide + 100)
    }
    return (
        <div className={cx('slide-container')}>
            <button className={cx('prev-btn')} onClick={prevBtn}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <div className={cx('slide')} style={{ transform: `translateX(${currentSlide}%)` }}>
                {listSlide.map((itemSlide, index) => {
                    return (
                        <Link
                            key={index}
                            to={itemSlide.to}
                            className={cx('slide-link')}
                            style={{ left: `${index * 100}%` }}
                        >
                            <img src={itemSlide.image} alt="" />
                        </Link>
                    )
                })}
            </div>
            <button className={cx('next-btn')} onClick={nextBtn}>
                <FontAwesomeIcon icon={faAngleRight} />
            </button>
        </div>
    )
}

export default Slides
