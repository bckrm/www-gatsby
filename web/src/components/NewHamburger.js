/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 1.5rem;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;

    &:hover {
        cursor: pointer;
    }

    @media screen and (max-width: 1300px) {
        right: 2rem;
    }
`;

const Span = styled.span`
    background-color: #4e5859;
    border-radius: 1rem;
    height: 3px;
    transition: transform 250ms ease, width 50ms ease;
    width: 100%;

    &:nth-of-type(1) {
        transform: ${(props) =>
            props.navActive
                ? `rotate(45deg) translate(4px, 8px)`
                : `rotate(0) translate(0, 0)`};
    }

    &:nth-of-type(2) {
        width: ${(props) => (props.navActive ? ` 0` : `100%`)};
    }

    &:nth-of-type(3) {
        transform: ${(props) =>
            props.navActive
                ? `rotate(-45deg) translate(3px, -8px)`
                : `rotate(0) translate(0, 0)`};
    }
`;

export default function NewHamburger({ handleClick }) {
    return (
        <Wrapper onClick={handleClick}>
            <Span navActive="true" />
            <Span navActive="false" />
            <Span navActive="false" />
        </Wrapper>
    );
}
