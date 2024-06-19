import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { getLatestProduct, getTopProducts } from '../redux/features/products/productSlice';
import { CardLoader, ProductCard } from '../components';

const Hero = () => {
    const [bestSeller, setBestSeller] = useState(null);
    const [newArrival, setNewArrival] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const topProducts = await dispatch(getTopProducts()).unwrap();
                setBestSeller(topProducts.data);
                const latestProducts = await dispatch(getLatestProduct()).unwrap();
                setNewArrival(latestProducts.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching products:', err);
                setLoading(false);
                setError(true);
            }
        };

        fetchData();
    }, [dispatch]);


    return (
        <div className='pb-5'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Urban Nest - Quality Furniture for Every Room | Shop Online</title>
                <meta name="description" content="Discover Urban Nest for stylish and durable furniture for your home. Explore our wide range of living room, bedroom, dining, and outdoor furniture. Shop now and transform your space!" />
                <meta name="keywords" content="urban nest furniture, buy furniture online, quality home furnishings, living room furniture, bedroom sets, dining furniture, outdoor decor, modern furniture" />
                <link rel="canonical" href="http://www.yourwebsite.com" />
            </Helmet>
            <div
                className='h-[70vh] grid place-items-center w-full bg-[image:var(--image-url-sm)] sm:bg-[image:var(--image-url-md)] xl:bg-[image:var(--image-url)]'
                style={{
                    '--image-url': `url(https://res.cloudinary.com/freestyle07/image/upload/v1718451719/an-e-commerce-website-banner-furniture-is-sold-on-the-website-the-furniture-color-should-be-orange-403796191_qty7t4.png)`,
                    '--image-url-md': `url(https://res.cloudinary.com/freestyle07/image/upload/v1718783568/orange-sofa-image-for-the-e-commerce-furniture-website-banner-background-should-be-filled-with-more--877807472_ugrh2g.png)`,
                    '--image-url-sm': `url(https://res.cloudinary.com/freestyle07/image/upload/v1718783910/orange-one-seat-sofa-image-for-the-e-commerce-furniture-website-banner-background-should-be-filled-w-877807472_1_dng30u.png)`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    backgroundSize: "cover",
                }}
            ></div>
            <section className='container py-5 grid gap-5'>
                <article>
                    {loading ? (
                        <CardLoader skeletonItems={[1, 2, 3, 4]} />
                    ) : error ? (
                        <div>Error loading top products. Please try again later.</div>
                    ) : (
                        <div>
                            <h1 className='text-3xl font-bold pb-5 text-[#F97316] dark:text-[#EA580C]'>Top Products</h1>
                            <ProductCard products={bestSeller} />
                        </div>
                    )}
                </article>
                <article>

                    {loading ? (
                        <CardLoader skeletonItems={[1, 2, 3, 4, , 5, 6, 7, 8]} />
                    ) : error ? (
                        <div>Error loading latest products. Please try again later.</div>
                    ) : (
                        <div>
                            <h1 className='text-3xl font-bold pb-5 text-[#F97316] dark:text-[#EA580C]'>New Arrivals</h1>
                            <ProductCard products={newArrival} />
                        </div>
                    )}

                </article>
            </section>
        </div>
    );
};

export default Hero;
