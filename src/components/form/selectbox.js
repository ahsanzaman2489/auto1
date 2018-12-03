import React from 'react';
export default field => {

    const renderOptions = (options) => {
        return options.map((item, index) => {
            return <option value={item.value} key={index}>{item.name}</option>
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
                {field.meta.touched &&
                field.meta.error &&
                <span className="text-danger">{field.meta.error}</span>}
            </div>
        </div>
    );
};