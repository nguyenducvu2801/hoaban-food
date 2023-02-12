import classNames from "classnames/bind";

import styles from './Heading.module.scss'

const cx = classNames.bind(styles)

function Heading({heading}) {
    return (
        <div className={cx('heading')}>
            <div className={cx('dash-line-front')}></div>
            <div className={cx('heading-content')}>
                <span className={cx('heading-icon')}>{heading.icon}</span>
                <h4 className={cx('heading-title')}>{heading.title}</h4>
            </div>
            <div className={cx('dash-line-behind')}></div>
        </div>
    )
}

export default Heading;