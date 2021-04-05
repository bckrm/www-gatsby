import React, { useEffect, useState } from 'react';
// import { useState } from 'react'
import { Link } from 'gatsby';
// import { motion } from 'framer-motion';
import styled from 'styled-components';
import tw from 'twin.macro';

import Mark from './svgs/mark';
import MarkAbbr from './svgs/mark-abbr'
// import NewHamburger from '../components/NewHamburger';

const StyledNav = styled.nav`
    ${tw`fixed py-4 md:py-8 top-0 w-full z-10`}

    background-color: ${({ isCaseStudy, isPageScrolled }) => 
            (isCaseStudy && isPageScrolled)
            ? 'var(--white)'
            : (isCaseStudy && !isPageScrolled)
            ? 'transparent'
            : isPageScrolled ? 'var(--brand-1)' : 'transparent'
    };
    transition: background-color 500ms ease;
`

const DesktopMarkWrapper = styled.div`
    ${tw`hidden sm:block`}
`;

const MobileMarkWrapper = styled.div`
    ${tw`sm:hidden`}
`;

const NavInner = styled.div`
    ${tw`container flex justify-between mx-auto`}
`;

const StyledLink = styled(Link)`
    ${tw`block mt-4 ml-8 text-right md:inline-block md:mt-0 text-3xl leading-10`}

`

export default function NewNav ({ isCaseStudy }) {
    const [isPageScrolled, setIsPageScrolled] = useState(false);

    const handleScroll = () => {
        const yPos = window.scrollY;

        if (yPos > 0) {
            setIsPageScrolled(true);
        } else {
            setIsPageScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    const menu = [
        {
          name: 'Info',
          link: 'info',
        },
        // {
        //   name: 'Case Studies',
        //   link: 'case-studies',
        //   submenu: [
        //     {
        //       name: 'D.C. United',
        //       link: '/case-studies/dcu',
        //     },
        //     {
        //       name: 'Volo City',
        //       link: '/case-studies/volo-city',
        //     },
        //     {
        //       name: 'Gundalow Juice',
        //       link: '/case-studies/gundalow-juice',
        //     },
        //   ],
        // },
        {
          name: 'Contact',
          link: 'contact',
        },
      ];

    // const handleClick = () => setNavOpen(!navOpen)

    return (
        <StyledNav isCaseStudy={isCaseStudy} isPageScrolled={isPageScrolled}>
            <NavInner>
                <Link to='/'>
                    <DesktopMarkWrapper>
                        <Mark />
                    </DesktopMarkWrapper>
                    <MobileMarkWrapper>
                        <MarkAbbr />
                    </MobileMarkWrapper>
                </Link>
                <div class="justify-end md:flex md:items-center md:w-auto">
                    {menu.map((item, index) => {
                        return (
                            <StyledLink
                                activeClassName='font-bold pointer-events-none'
                                to={item.link}
                                key={item.name}
                            >
                                {item.name}
                            </StyledLink>
                        )
                    })}
                </div>
            </NavInner>
        </StyledNav>
    )
}