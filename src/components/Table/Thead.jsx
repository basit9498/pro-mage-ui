import React from 'react'


const Thead = ({ cols = [],}) => {
    return (
        <>
            <thead>
                <tr className=' text-gray-600  text-[13px] text-left'>
                    {cols?.map((item, index) => <th key={index}
                        className={`font-semibold table_td_th bg-bgColor ${index == 0 && 'rounded-l-[10px] pl-3'} ${index == [cols?.length - 1] && 'rounded-r-[10px] text-center'} `}>
                        {item}
                    </th>
                    )}
                </tr>
            </thead>
        </>
    )
}

export default Thead