import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import ServiceItem from '../components/ServiceItem';

const StyledSection = styled.section`
    ${tw`container py-20`}

    margin-bottom: 17.25rem;
`

const StyledHeading = styled.h2`
    ${tw`text-4xl capitalize mb-20`}
`

const StyledGrid = styled.div`
    ${tw`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-20 w-11/12`}
`

export default function ServiceSection ({ heading, services }) {
    return (
        <StyledSection>
            <StyledHeading>{heading}</StyledHeading>
            <StyledGrid>
                    {services.map(( service ) => <ServiceItem service={service} key={service.id} /> )}
            </StyledGrid>   
        </StyledSection>
    )
}
