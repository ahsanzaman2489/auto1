import React, {Component} from 'react';

export default class LazyLoadingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            component: null
        };
    }

    componentWillMount() {
        const {load} = this.props;

        load().then(res => {
            return res.default;
        }).then(mod => {
            this.setState({component: mod});
        });
    }

    render() {
        const {children} = this.props;
        return children(this.state.component);
    }
}
