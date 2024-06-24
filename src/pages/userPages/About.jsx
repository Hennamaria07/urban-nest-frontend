import React from 'react';
import { HeroFooter, MemberCard, OurStory, SubBanner } from '@/components';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us - Urban Nest Furniture | Crafting Sustainable Furniture</title>
                <meta
                    name="description"
                    content="Learn about Urban Nest Furniture, a leading provider of high-quality, sustainable furniture. Discover our mission, values, and commitment to crafting beautiful and eco-friendly home furnishings."
                />
                <meta
                    name="keywords"
                    content="urban nest furniture, about urban nest, sustainable furniture, eco-friendly furniture, furniture design, furniture craftsmanship"
                />
                <link rel="canonical" href="https://urban-nest-app.netlify.app/about" />
            </Helmet>
            <SubBanner
                page1={'Home'}
                page2={"About"}
                color={"text-black"}
                href={'/'}
                title={"About Us"}
            />
            <div className="container py-5 grid gap-5">
                <OurStory />
                <article className='text-justify'>
                    <h1 className="text-4xl text-center font-bold mb-8 text-primary">Our Team</h1>
                    <MemberCard />
                </article>
                <HeroFooter />
            </div>
        </div>
    );
};

export default AboutPage;