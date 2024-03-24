import React from 'react'

const AsideModal = ({ children, show, className, zIndex = '9', width = 'max-w-[633px]', }) => {
    return (
        <>
            <main className={`${show == true ? "show_product_section" : "hide_product_section"} ${zIndex}  add_product_section`}>
                <section className={`${show == true ? "show_product_from" : "hide_product_from"} ml-auto  h-full ${width} bg-white  rounded-tl-[20px] rounded-bl-[20px] ${className}`}>
                    {/* <div className={`${className} dark:border-dark flex items-center justify-between`}>
                        <h2 className='text16  font-semibold'>{title}</h2>
                        <button onClick={onClick} className='bg-bgColor dark:bg-dark-light h-6 w-6 rounded-md flex justify-center items-center'>
                            <Image src='/image/cross.svg'
                                height={12}
                                alt=''
                                width={12}
                            />
                        </button>
                    </div> */}
                    {children}
                </section>
            </main>
        </>
    )
}

export default AsideModal