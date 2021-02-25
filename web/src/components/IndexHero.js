import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';
import tw from 'twin.macro';

import { Link } from 'gatsby';

const StyledSection = styled.section`
    ${tw`container min-h-screen mb-10 mt-40`}
`

const StyledGrid = styled.div`
    ${tw`grid md:grid-cols-12 md:auto-rows-min md:gap-y-5 mx-4 md:mx-auto md:mt-24 md:gap-x-2`}
`

const Heading = styled.h1`
    ${tw`text-4xl lg:text-5xl lg:leading-tight mb-8 md:col-start-7 md:col-end-12`}
`;

const ImageOne = styled(Link)`
    ${tw`col-start-1 md:col-end-6 md:row-start-1`}
`;

const ImageTwo = styled(Link)`
    ${tw`md:col-start-7 md:col-end-12 md:row-start-2 md:-mt-40`}
`;

const ImageThree = styled(Link)`
    ${tw`md:col-span-7 md:row-start-3`}
`;

const StyledP = styled.p`
    ${tw`text-2xl mt-5`}
`

export default function IndexHero ({ images }) {
    console.log(images)
    return(
        <StyledSection>
            <StyledGrid>
                <Heading>Backroom is an independent, full service brand strategy & activation agency.</Heading>
                <ImageOne to="#">
                    <Img
                        fluid={images[0].childImageSharp.fluid}
                        style={{maxWidth: `100%`}}
                    />
                    <StyledP>Statement about this project</StyledP>
                </ImageOne>

                <ImageTwo to="#">
                    <Img
                        fluid={images[1].childImageSharp.fluid}
                        style={{maxWidth: `100%`}}
                    />
                    <StyledP>Statement about this project</StyledP>
                </ImageTwo>

                <ImageThree to="#">
                    <Img
                        fluid={images[2].childImageSharp.fluid}
                        style={{maxWidth: `100%`}}
                    />
                    <StyledP>Statement about this project</StyledP>
                </ImageThree>
                {/* {images.map(image => {
                    return (
                        <StyledImgWrapper
                            key={image.id}
                        >
                            <Img
                                fluid={image.childImageSharp.fluid}
                                style={{maxWidth: `100%`}}
                            />
                            <StyledP>Statement about this project</StyledP>
                        </StyledImgWrapper>
                    )
                })} */}
            </StyledGrid>
        </StyledSection>
    )
}
