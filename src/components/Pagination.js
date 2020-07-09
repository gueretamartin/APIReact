import React from "react";


const Pagination = props => {

    return(
        <div className="py-3">
            <button onClick={props.prev} type="button" className="btn btn-info mr-1">&larr; Prev</button>
            <button onClick={props.next} type="button" className="btn btn-info mr-1">Next &rarr;</button>
        </div>

    )
}
export default Pagination;
