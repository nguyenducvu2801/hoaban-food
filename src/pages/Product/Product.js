import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import config from '~/config'
import { useState } from 'react'

import styles from './Product.module.scss'
import { listPro } from './Data'
import Pagination from '~/components/Pagination'
import Products from '~/components/Products'

const cx = classNames.bind(styles)

function Product() {
    const [listProduct, setListProduct] = useState(listPro)
    const [filter, setFilter] = useState('a')

    const handleFilterChange = (e) => {
        const sort = e.target.value
        const newListPro = listPro.sort((prevItem, nextItem) => {
            if (sort === 'd') {
                return nextItem.price - prevItem.price
            }
            if (sort === 'c') {
                return prevItem.price - nextItem.price
            }
            if (sort === 'b') {
                return nextItem.id - prevItem.id
            }
            if (sort === 'a') {
                return prevItem.id - nextItem.id
            }
        })
        setFilter(sort)
        setListProduct(newListPro)
    }

    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(20)

    const totalItems = listProduct.length
    const totalPage = Math.ceil(totalItems / itemsPerPage)

    const indexOfLastPost = currentPage * itemsPerPage
    const indexOfFirstPost = indexOfLastPost - itemsPerPage
    const currentPosts = listProduct.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const filters = [
        {
            value: 'a',
            title: 'Theo thứ tự mức độ phổ biến',
        },
        {
            value: 'b',
            title: 'Mới nhất',
        },
        {
            value: 'c',
            title: 'Theo thứ tự giá: thấp đến cao',
        },
        {
            value: 'd',
            title: 'Theo thứ tự: cao xuống thấp',
        },
    ]

    return (
        <div className={cx('wrapper')}>
            <div className={cx('grid wide')}>
                <div className={cx('product-container')}>
                    <div className={cx('main__pro-title')}>
                        <div className={cx('pro-page')}>
                            <Link
                                to={config.routes.product}
                                className={cx(currentPage >= 2 ? 'pro-name-link-page' : 'pro-name-link-home')}
                            >
                                Sản phẩm &nbsp;
                            </Link>
                            {currentPage >= 2 && (
                                <>
                                    <span className={cx('slash')}>/ &nbsp;</span>
                                    <span>Trang {currentPage}</span>
                                </>
                            )}
                        </div>
                        <div className={cx('pro-filter')}>
                            <p className={cx('pro-filter-result')}>
                                Hiển thị {indexOfFirstPost + 1}-
                                {currentPage === totalPage ? totalItems : indexOfLastPost} của {totalItems} kết quả
                            </p>
                            <select className={cx('pro-filter-select')} value={filter} onChange={handleFilterChange}>
                                {filters.map((filter, index) => (
                                    <option key={index} className={cx('filter-select-name')} value={filter.value}>
                                        {filter.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={cx('list-pro')}>
                        <ul className={cx('row')}>
                            {currentPosts.map((proItem, index) => (
                                <li key={index} className={cx('col l-3')}>
                                    <Products proItem={proItem}></Products>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={itemsPerPage}
                        totalItems={totalItems}
                        paginate={paginate}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Product
