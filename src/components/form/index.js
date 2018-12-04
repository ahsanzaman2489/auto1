import React from 'react';
import SelectBoxComponent from "./selectbox";
import {Field} from 'redux-form';

export default props => {
    const {colors, manufacturers, handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <Field name="color"
                   id="color"
                   label="color"
                   component={SelectBoxComponent}
                   placeholder={'All car colors'}
                   options={colors}
            />

            <Field name="manufacturer"
                   id="manufacturer"
                   label="manufacturer"
                   component={SelectBoxComponent}
                   options={manufacturers}
                   placeholder={'All manufacturers'}
            />

            <div>
                <input type="submit" value="filter"/>
            </div>
        </form>
    );
};