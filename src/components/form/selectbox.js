import React from 'react';

export default field => {
    const {active, error, submitFailed} = field.meta;

    const renderOptions = (options) => {
        return options.map((item, index) => {
            if (typeof item !== 'string') {
                return <option value={item.value} key={index}>{item.name}</option>
            } else {
                return <option value={item} key={index}>{item}</option>
            }

        });

    };

    return (

        <div className="row">
            <div className="form-group col-md-6 col-md-offset-3">
                <label htmlFor={field.id}>{field.label}</label>
                <select {...field.input} id={field.id} className="form-control">
                    <option value="">select</option>
                    {renderOptions(field.options)}
                </select>
                {!active && (error && submitFailed) && <span className="text-danger">{error}</span>}
            </div>
        </div>
    );
};