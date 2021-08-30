import React from "react"
import { Link } from "gatsby"

export const Pagination = ({ totalCount, value }) => {
  const PerPage = 6
  const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i)
  
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          {value !== 1 &&
            <li className="page-item">
              <Link className="page-link" to={`/list/${value-1}`}>
                Previous
              </Link> 
            </li>
          }
          {range(1, Math.ceil(totalCount / PerPage)).map((number, index) => (
            <li key={index} className="page-item">
            <Link className="page-link" to={`/list/${number}`}>{number}</Link>
            </li>
          ))}
          {value !==  Math.ceil(totalCount / PerPage) &&
            <li className="page-item">
              <Link className="page-link" to={`/list/${value+1}`}>
                Next
              </Link> 
            </li>
          }
        </ul>
      </nav>
    </div>
    
  )
}