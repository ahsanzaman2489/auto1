import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCar} from '../../actions/car_detail';
import ExtraDataComponent from '../../components/extraData';
import FavouriteComponent from '../../components/favourite';
import type {SingleCarType} from '../../constanst/types';

type State = {
    isFavourite: boolean
}

type Props = {
    car: SingleCarType,
    match: Object,
    fetchCar: Function

}


class CarDetailContainer extends Component<Props, State> {
    state = {
        isFavourite: false
    };

    componentDidMount(props) {
        const {fetchCar, match} = this.props;
        fetchCar(match.params.stockNumber);
    }

    componentWillReceiveProps(nextProps) {
        const {car} = nextProps;
        this.isFavourite(car.stockNumber)
    }

    isFavourite = (stockNumber: number) => {
        let isFavourite: boolean = false;
        const favouriteArray: Array<any> = JSON.parse(localStorage.getItem('favourite_cars') || "[]");

        if (favouriteArray !== null) {
            favouriteArray.forEach(function (item) {
                if (stockNumber === item) isFavourite = true;
            })
        }

        this.setState({isFavourite});
    };

    addToFavourite = (stockNumber: number) => {
        const favouriteArray: Array<any> = JSON.parse(localStorage.getItem('favourite_cars') || "[]");
        favouriteArray.push(stockNumber);
        localStorage.setItem('favourite_cars', JSON.stringify(favouriteArray));
        this.setState({isFavourite: true});
    };
    removeFromFavourite = (stockNumber: number) => {
        const favouriteArray: Array<any> = JSON.parse(localStorage.getItem('favourite_cars') || "[]");
        const stockNumberFound: Array<number> = favouriteArray.filter(function (item: number) {
            return item === stockNumber;
        });

        const index: number = favouriteArray.indexOf(stockNumberFound);
        favouriteArray.splice(index, 1);

        localStorage.setItem('favourite_cars', JSON.stringify(favouriteArray));
        this.setState({isFavourite: false});
    };


    render() {
        const {car} = this.props;
        const isDataAvailable: boolean = Object.keys(car).length > 0;
        const carDescription: string = `This car is currently available and can be delivered as soon as
            tomorrow morning. Please be aware that delivery times shown in
            this page are not definitive and may change due to bad weather
            conditions.`;

        return (
            <div className={"car-detail"}>
                <div className={"banner"}></div>
                <div className={"container"}>
                    <div className={"specs"}>
                        <h1>{car.manufacturerName} {car.modelName}</h1>
                        <div>{isDataAvailable && <ExtraDataComponent item={car}/>}</div>
                        <p>
                            {carDescription}
                        </p>
                    </div>
                    {isDataAvailable &&
                    <FavouriteComponent stockNumber={car.stockNumber} addToFavourite={this.addToFavourite}
                                        removeFromFavourite={this.removeFromFavourite}
                                        isFavourite={this.state.isFavourite}/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: Object): Object => {
    return {
        car: state.Car,
    };
};

function mapDispatchToProps(dispatch: Function): Object {
    return {...bindActionCreators({fetchCar}, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(CarDetailContainer);
