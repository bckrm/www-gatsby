import React from 'react';
import Lottie from 'lottie-react';

import largeText from '../animations/largeText.json';

export default function IndexTextAnimation () {
    return (
        <section className="my-20">
            <Lottie
                animationData={largeText}
                loop={true}
            />
        </section>
    )
}