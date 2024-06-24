import React from 'react';
import { HeroFooter, MemberCard, OurStory, SubBanner } from '@/components';
import { Card } from '@/components/ui/card';

const AboutPage = () => {
    return (
        <div>
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