import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch } from 'react-redux';
import { getLatestProduct, getTopProducts } from '../redux/features/products/productSlice';
import { ProductCard } from '../components';

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

    const skeletonItems = [1, 2, 3, 4]; // Number of skeleton items to render
    const skeletonItems2 = [1, 2, 3, 4, 5, 6, 7, 8]; // Number of skeleton items to render

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
                        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {skeletonItems.map((_, index) => (
                                <div key={index} role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                        </svg>
                                    </div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ))}
                        </div>
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
                         <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {skeletonItems2.map((_, index) => (
                                <div key={index} role="status" className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                        </svg>
                                    </div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ))}
                        </div>
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
