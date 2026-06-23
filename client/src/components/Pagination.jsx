import React from 'react'

function Pagination({page,setPage,total,limit}) {
    const currentPage = page + 1
    const totalPage = Math.ceil( total / limit)
        
  return (
    <div>Pagination</div>
  )
}

export default Pagination