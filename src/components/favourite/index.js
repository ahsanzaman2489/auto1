import React from 'react';
import {NO_FAVOURITE, FAVOURITE} from '../../constants/app';

type Props = { stockNumber: number, addToFavourite: Function, isFavourite: boolean, removeFromFavourite: Function };
const FavouriteComponent = (props: Props) => {

    const {stockNumber, addToFavourite, isFavourite, removeFromFavourite} = props;
    const renderButton = isFavourite => {
        if (isFavourite) return (<button className="float-right btnfixedbtm"
                                         onClick={() => removeFromFavourite(stockNumber)}>remove</button>);
        else return (
            <button className="float-right btnfixedbtm" onClick={() => addToFavourite(stockNumber)}>save</button>)
    };
    const renderText = isFavourite => {
        if (!isFavourite) {
            return (NO_FAVOURITE)
        } else return (FAVOURITE);
    };
    return (
        <div className="add-favourite">
            <p>{renderText(isFavourite)}</p>
            {renderButton(isFavourite)}
        </div>
    );
};

export default FavouriteComponent;