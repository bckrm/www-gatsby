import React, { useState } from 'react';
import PropTypes from 'prop-types';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import BlockText from '../portableText/blockText';
import FormField from './formField';
import CeramicSquareLarge from '../svgs/ceramicSquareLarge';

export default function FormSection({ data, heading }) {
    const { body } = data;
    const [listFields, setListFields] = useState({});
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await addToMailchimp(email, listFields);
        setEmail('');
        if (result.result === 'error') {
            setResponseMessage(`${email} is already subscribed`);
            setIsSubscribed(false);
        } else {
            setIsSubscribed(true);
            setResponseMessage(`${email} is now subscribed`);
        }
    };

    const handleEmailChange = ({ target }) => {
        const { value } = target;
        setEmail(value);
    };

    const handleListFieldChange = ({ target }) => {
        const { name, value } = target;

        setListFields((currentState) => ({ ...currentState, [name]: value }));
    };

    return (
        <section className="container grid grid-cols-1 lg:grid-cols-2 gap-40 overflow-visible mb-40">
            <div className="prose prose-xl w-3/4">
                <BlockText blocks={body} />
            </div>

            <div className="relative">
                <CeramicSquareLarge />
                <form className="relative" onSubmit={handleSubmit}>
                    <h2 className="mb-8 mt-16">{heading}</h2>
                    {!isSubscribed && (
                        <>
                            <FormField
                                label="First Name"
                                name="FNAME"
                                onchange={handleListFieldChange}
                                type="text"
                            />
                            <FormField
                                label="Last Name"
                                name="LNAME"
                                onchange={handleListFieldChange}
                                type="text"
                            />
                            <FormField
                                label="Email"
                                name="EMAIL"
                                onchange={handleEmailChange}
                                type="email"
                            />
                            <FormField
                                label="Company"
                                name="COMPANY"
                                onchange={handleListFieldChange}
                                type="text"
                            />
                            {responseMessage}
                            <button
                                className="bg-brand-9 mt-4 ml-4 py-1 px-4 text-white text-lg tracking-[.12rem]"
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </>
                    )}
                    {isSubscribed && <p>{responseMessage}</p>}
                </form>
            </div>
        </section>
    );
}

FormSection.propTypes = {
    data: PropTypes.object.isRequired,
    heading: PropTypes.string.isRequired,
};
