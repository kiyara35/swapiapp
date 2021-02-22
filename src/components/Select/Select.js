import React from 'react'
import './style.css'

function Select({selectList, updateId}) {
    return (
        <select className='select' onChange={updateId} name="" id="">
            {selectList.length !== 0 ? selectList.map((it, index) => <option className='option' key={index}
                                                                             value={index + 1}>{it}</option>) : null}
        </select>
    )
}

export default Select

