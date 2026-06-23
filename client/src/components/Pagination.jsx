import React from 'react'

function Pagination({page,setPage,total,limit}) {
    const currentPage = page + 1
    const totalPage = Math.ceil( total / limit)
    const handleNext = () => {
        if (page < total - 1) {
            setPage(page + 1)
        }
    }
    const handlePrev = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const handleClick = (data) => {
        setPage(data - 1)
    }    
  return (
    <div>Pagination</div>
  )
}

export default Pagination