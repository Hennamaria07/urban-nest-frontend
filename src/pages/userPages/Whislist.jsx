import { ProductCard, SubBanner } from '@/components';
import { getWhislistFromLocalStorage } from '@/lib/localStorage';
import { setWhislist } from '@/redux/features/whislists/whislistSlice';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

const Whislist = () => {
    const whislists = useSelector(state => state.whislists) || [];
    return (
        <section>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Wishlist - Urban Nest Furniture | Save Your Favorite Items</title>
                <meta name="description" content="Save your favorite furniture items to your wishlist with Urban Nest. Easily track and manage items you want to purchase later for a personalized shopping experience." />
                <meta name="keywords" content="urban nest wishlist, save favorite items, furniture e-commerce user dashboard, item tracking, personalized shopping, wishlist management" />
                <link rel="canonical" href="https://urban-nest-app.netlify.app/wishlist" />
            </Helmet>
            <SubBanner title={"Whislist"} href={'/'} page1={"Home"} page2={"Whislist"} color={"text-black"}/>
            <section className='container py-5'>

                <ProductCard products={whislists} />
            </section>
        </section>
    )
}

export default Whislist