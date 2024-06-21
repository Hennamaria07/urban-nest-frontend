import React from 'react'
import BreadCrumbTwo from './BeadCrumTwo'


const SubBanner = ({title, href, page1, page2, color}) => {
    return (
        <div
            className='h-[50vh] grid place-items-center w-full bg-[image:var(--image-url)]'
            style={
                {
                    '--image-url': `url(https://res.cloudinary.com/freestyle07/image/upload/v1718787418/sub-banner_fqb98w.avif)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                }
            }
        >
            <BreadCrumbTwo title={title} href={href} page1={page1} page2={page2} color={color}/>

        </div>
    )
}

export default SubBanner