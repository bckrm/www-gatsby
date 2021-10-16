import React from 'react';
import PropTypes from 'prop-types';

export default function FormField({ label, name, onchange, type }) {
    return (
        <div className="mb-4">
            <label className="block text-lg" htmlFor="name">
                {label}
            </label>
            <input
                className="block p-1  w-3/4"
                name={name}
                onChange={onchange}
                type={type}
            />
        </div>
    );
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};
