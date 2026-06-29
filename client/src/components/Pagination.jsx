import React from 'react'
import { ArrowLeft, ChevronLeftCircle, ChevronRightCircle} from 'lucide-react'

function Pagination({page,setPage,total,limit}) {
    const currentPage = page
    const totalPage = Math.ceil( total / limit)
    const handleNext = () => {
        if (page < totalPage) {
            setPage(page + 1)
        }
        console.log(page)
    }
    const handlePrev = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
    const handleClick = (data) => {
        setPage(data)
    }    

    const renderPages = () => {
        const numbers = []
        const startPage = Math.max(1,currentPage - 3)
        const endPage = Math.min(totalPage,currentPage + 3)
        for (let i = startPage; i <= endPage; i++) {
            numbers.push(<button onClick={() => handleClick(i)} key={i}
            className={`w-[35px] h-[35px] rounded-full font-medium flex justify-center items-center
            ${i === currentPage ? "bg-red-600 border text-white" : "text-gray-400 border"}     
            `}
            >{i}</button>)
        }
        return numbers
    }
  return (
    <div className='flex justify-between items-center md:w-[20%] w-full'>
        <ChevronLeftCircle size={25} onClick={handlePrev} className={`cursor-pointer ${currentPage === 1 ? 'text-gray-400' : 'text-red-600'}`}/>
         { renderPages() }
        <ChevronRightCircle size={25} onClick={handleNext} className={`cursor-pointer ${currentPage === totalPage ?  'text-gray-400': 'text-red-600'}`}/>
    </div>
  )
}

export default Pagination