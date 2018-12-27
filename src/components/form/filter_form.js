import React from 'react';
import SelectBoxComponent from "./selectbox";
import {Field} from 'redux-form';

/**
 * form component renders inputs for filter form.
 * @constructor
 *
 * @param {Array} colors - color to filter Car.
 * @param {Function} manufacturers - manufacturers of cars for filter.
 * @param {boolean} handleSubmit - function to submit filter search.
 * @param {Object} location - location object of browser.
 */


type Props = { colors: Array<string>, manufacturers: Array<Object>, handleSubmit: Function, location: Object }
const FormComponent = (props: Props) => {
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
                   placeholder={'All manufacturers'}
                   options={manufacturers}
            />

            <div className="float-right">
                <input type="submit" value="filter" id="submit"/>
            </div>
        </form>
    );
};

export default FormComponent;