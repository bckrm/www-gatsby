import React from 'react';
import Lottie from 'lottie-react';

import lineDrawing from '../animations/lineDrawing.json';

export default function IndexLineAnimation () {
    return (
        <section className="">
            <Lottie
                animationData={lineDrawing}
                loop={true}
            />
        </section>
    )
}