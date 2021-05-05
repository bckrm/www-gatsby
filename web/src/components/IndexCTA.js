import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import tw from 'twin.macro';

import { CgArrowLongRight as Icon } from 'react-icons/cg';
import NoNameOval from './svgs/noname-oval';

const StyledSection = styled.section`
    ${tw`h-3/4 py-28 relative`}
`;

const Container = styled.div`
    ${tw`container flex flex-col justify-center py-40 relative`}
`;

const StyledHeading = styled.h2`
    ${tw`text-4xl lg:text-5xl leading-10 w-3/4 mx-4 lg:mx-0`}
`;

const StyledLink = styled(Link)`
    ${tw`flex mt-4 md:mt-0 mr-4 text-3xl leading-10 items-center mx-4 lg:mx-0`}
`;

export default function IndexCTA() {
    return (
        <StyledSection>
            <NoNameOval />
            <Container>
                <StyledHeading>
                    We’ve built and evolved brands from local startups to global
                    industry leaders.
                </StyledHeading>
                <StyledLink to="/contact">
                    Work with us
                    <Icon className="l-5 text-brand-7" />
                </StyledLink>
            </Container>
        </StyledSection>
    );
}
