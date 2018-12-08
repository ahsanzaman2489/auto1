import React from 'react';

type Props = { stockNumber: number, addToFavourite: Function, isFavourite: boolean, removeFromFavourite: Function };
const FavouriteComponent = (props: Props) => {

    const {stockNumber, addToFavourite, isFavourite, removeFromFavourite} = props;
    const renderButton = isFavourite => {
        if (isFavourite) return (<button onClick={() => removeFromFavourite(stockNumber)}>remove</button>);
        else return (<button onClick={() => addToFavourite(stockNumber)}>save</button>)
    };
    const renderText = isFavourite => {
        if (!isFavourite) {
            return (`If you like this car, click the button and
                save it in your collection of favourite
                items.`)
        } else return (`This Car is your favourite`);
    };
    return (
        <div className={"add-favourite"}>
            <p>{renderText(isFavourite)}</p>
            {renderButton(isFavourite)}
        </div>
    );
};

export default FavouriteComponent;