/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

export default function CopyBlock({ header, body }) {
    return (
        <StyledDiv>
            <h2 className="h1">{header}</h2>
            {body.map((item) => (
                <p>{item.p}</p>
            ))}
        </StyledDiv>
    );
}

const StyledDiv = styled.div`
    margin: 0 auto;
    width: 90%;

    @media screen and (min-width: 600px) {
        width: 75%;
    }
`;
