import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCar} from '../../actions/car_detail';
import ExtraDataComponent from '../../components/extraData';
import FavouriteComponent from '../../components/favourite';


class CarDetailContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false
        }
    }

    componentDidMount(props) {
        const {fetchCar, match} = this.props;
        fetchCar(match.params.stockNumber);
    }

    componentWillReceiveProps(nextProps) {
        const {car} = nextProps;
        this.isFavourite(car.stockNumber)
    }

    isFavourite = (stockNumber) => {
        let isFavourite = false;
        const favouriteArray = JSON.parse(localStorage.getItem('favourite_cars'));

        if (favouriteArray !== null) {
            favouriteArray.forEach(function (item) {
                if (stockNumber === item) isFavourite = true;
            })
        }

        this.setState({isFavourite});
    };

    addToFavourite = car => {
        const favouriteArray = JSON.parse(localStorage.getItem('favourite_cars') || "[]");
        favouriteArray.push(car.stockNumber);
        localStorage.setItem('favourite_cars', JSON.stringify(favouriteArray));
        this.setState({isFavourite: true});
    };
    removeFromFavourite = car => {
        const favouriteArray = JSON.parse(localStorage.getItem('favourite_cars') || "[]");
        const stockNumber = favouriteArray.filter(function (item) {
            return item === car.stockNumber;
        });

        const index = favouriteArray.indexOf(stockNumber);
        favouriteArray.splice(index, 1);

        localStorage.setItem('favourite_cars', JSON.stringify(favouriteArray));
        this.setState({isFavourite: false});
    };


    render() {
        const {car} = this.props;
        const isDataAvailable = Object.keys(car).length > 0;
        const carDescription = car.descrtiption || `This car is currently available and can be delivered as soon as
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
                    {isDataAvailable && <FavouriteComponent car={car} addToFavourite={this.addToFavourite}
                                                            removeFromFavourite={this.removeFromFavourite}
                                                            isFavourite={this.state.isFavourite}/>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        car: state.Car,
    };
};

function mapDispatchToProps(dispatch) {
    return {...bindActionCreators({fetchCar}, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(CarDetailContainer);