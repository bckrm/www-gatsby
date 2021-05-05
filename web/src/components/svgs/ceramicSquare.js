import React from 'react';
import styled from 'styled-components';

const Svg = styled.svg`
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    transition: opacity 500ms ease;
`;

export default function CeramicSquare() {
    return (
        <Svg
            className="absolute top-0 left-0 transform -translate-x-12"
            width="452"
            height="428"
            viewBox="0 0 452 428"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M251.995 35.9731C381.155 60.7431 441.709 126.201 419.749 240.709C395.869 365.228 302.304 411.509 80.2887 368.931C27.9265 358.889 2.88 338.516 11.88 291.587L57.8399 51.935C64.0799 19.3974 83.1595 2.94556 122.955 10.5774L252.115 35.3474L251.995 35.9731Z"
                fill="#E2B394"
            />
        </Svg>
    );
}
