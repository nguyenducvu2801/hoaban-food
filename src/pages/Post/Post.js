import classNames from "classnames/bind";

import styles from './Post.module.scss'

const cx = classNames.bind(styles)

function Post() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('post-container')}>
                    
                </div>
            </div>
        </div>
    )
}

export default Post;