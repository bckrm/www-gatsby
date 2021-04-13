/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import Img from 'gatsby-image';

const StyledHeading = styled.h3`
    ${tw`leading-10`}
`;

const StyledP = styled.p`
    ${tw`text-2xl`}
`;

export default function TeamMember({ person }) {
    return (
        <div>
            <Img fluid={person.image.asset.fluid} className="mb-5" />
            <StyledHeading>{person.name}</StyledHeading>
            <StyledP>{person.title}</StyledP>
        </div>
    );
}
