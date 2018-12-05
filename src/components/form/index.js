import React from 'react';
import SelectBoxComponent from "./selectbox";
import {Field} from 'redux-form';
import queryString from "query-string";

export default props => {
    const {colors, manufacturers, handleSubmit, location} = props;
    const currentParams = queryString.parse(location.search);

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <Field name="color"
                   id="color"
                   label="color"
                   component={SelectBoxComponent}
                   placeholder={'All car colors'}
                   selected={currentParams.color}
                   options={colors}
            />

            <Field name="manufacturer"
                   id="manufacturer"
                   label="manufacturer"
                   component={SelectBoxComponent}
                   options={manufacturers}
                   selected={currentParams.manufacturer}
                   placeholder={'All manufacturers'}
            />

            <div>
                <input type="submit" value="filter"/>
            </div>
        </form>
    );
};