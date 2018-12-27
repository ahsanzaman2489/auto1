import React from 'react';

/**
 * Select ox component renders one select box.
 * @constructor
 *
 * @param {Object} field - consist all info of select box .
 */

const SelectBoxComponent = (field: Object) => {

    const {active, error, submitFailed} = field.meta;
    const {id, label, input, placeholder, options} = field;

    const renderOptions = options => {
        return options.map((item, index) => {
            const value = item.value ? item.value : item.name || item;
            const name = item.name || item;
            return <option value={value} key={index}>{name}</option>
        });
    };
    return (
        <div className="row">
            <div className="form-group col-md-6 col-md-offset-3">
                <label htmlFor={id}>{label}</label>
                <div className="custom-select">
                    <select {...input} id={id} className="form-control">
                        <option value="">{placeholder}</option>
                        {renderOptions(options)}
                    </select>
                    {!active && (error && submitFailed) && <span className="text-danger">{error}</span>}
                </div>
            </div>
        </div>
    );
};

export default SelectBoxComponent;