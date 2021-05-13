/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';
import tw from 'twin.macro';

import clientConfig from '../../client-config';

const builder = imageUrlBuilder(clientConfig.sanity);

export function imageUrlFor(source) {
    return builder.image(source);
}

function buildImageObj(source = { asset: {} }) {
    const imageObj = {
        // eslint-disable-next-line no-underscore-dangle
        asset: { _ref: source.asset._ref || source.asset._id },
    };

    if (source.crop) imageObj.crop = source.crop;
    if (source.hotspot) imageObj.hotspot = source.hotspot;

    return imageObj;
}

const StyledHeading = styled.h3`
    ${tw`leading-10`}
`;

const StyledP = styled.p`
    ${tw`text-2xl`}
`;

export default function TeamMember({ person }) {
    return (
        <div>
            <img
                className="mb-5 w-full"
                src={imageUrlFor(buildImageObj(person.image))
                    .width(500)
                    .height(Math.floor((5 / 4) * 500))
                    .fit('crop')
                    .auto('format')
                    .url()}
                alt=""
            />
            <StyledHeading>{person.name}</StyledHeading>
            <StyledP>{person.title}</StyledP>
        </div>
    );
}
