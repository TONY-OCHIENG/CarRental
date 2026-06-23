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

    const renderPages = () => {
        const numbers = []
        const startPage = Math.max(1,currentPage - 3)
        const endPage = Math.min(totalPage,currentPage + 3)
        for (let i = startPage; i < endPage; i++) {
            numbers.push(<button onClick={() => handleClick(i)} key={i}
            className={`w-[35px] h-[35px] rounded-full font-medium flex justify-center items-center
            ${i === currentPage ? "bg-red-600 border text-white" : "text-gray-400 border"}     
            `}
            >{i}</button>)
        }
    }
  return (
    <div>Pagination</div>
  )
}

export default Pagination