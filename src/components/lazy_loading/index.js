import React, {Component} from 'react';

type Props = {
    load: Function,
    children: Function
}
export default class LazyLoadingComponent extends Component<Props, { component: null | Function }> {
    state = {
        component: null
    };

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
