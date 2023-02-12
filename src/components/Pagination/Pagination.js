import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


import styles from './Pagination.module.scss'

const cx = classNames.bind(styles)

function Pagination(props) {
    const {currentPage, itemsPerPage, totalItems, paginate, onPageChange} = props
    
    const pageNumbers = []
    const totalPage = Math.ceil(totalItems / itemsPerPage)
    for(let i = 1; i <= totalPage; i++) {
        pageNumbers.push(i)
    }

    const handlePageChange = newPage => {
        // if(onPageChange) {
        //     onPageChange(newPage)
        // }
        onPageChange(newPage)
    }
    return ( 
        <div className={cx('item-paginate')}>
            {currentPage > 1 && (<button disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)} className={cx('item-paginate-icon-left')}><FontAwesomeIcon icon={faAngleLeft}/></button>)}
            {pageNumbers.map(number => (
                <Link key={number} className={cx(number === currentPage && 'item-page-link')} onClick={() => paginate(number)}>{number}</Link>
            ))}
            {currentPage < totalPage && (<button disabled={currentPage >= totalPage} onClick={() => handlePageChange(currentPage + 1)} className={cx('item-paginate-icon-right')}><FontAwesomeIcon icon={faAngleRight}/></button>)}
        </div>
    )
}

export default Pagination;