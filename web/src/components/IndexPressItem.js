/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import CeramicSquare from './svgs/ceramicSquare';

const Link = styled.a`
    ${tw`cursor-pointer justify-between py-6 lg:px-6 relative transition-colors text-2xl`}
`;

const Heading = styled.h2`
    ${tw`mb-4 pb-4 text-4xl relative`}

    &:after {
        background: var(--brand-7);
        content: '';
        height: 4px;
        left: 0;
        position: absolute;
        bottom: 0;
        width: 34px;
    }
`;

const P = styled.p`
    ${tw`mb-4 text-xl relative`}
`;

export default function IndexPressItem({ data }) {
    const {
        body,
        link: { href, text },
        title,
    } = data;

    const [isActive, setIsActive] = useState();

    const handleMouseEnter = () => {
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    return (
        <Link
            href={`${href}`}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <CeramicSquare isActive={isActive} />
            <Heading>{title}</Heading>
            <P>{body}</P>
            <P>{text}</P>
        </Link>
    );
}
