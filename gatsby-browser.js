import React from 'react';
import { checkSession } from './src/utils/auth';
import axios from 'axios';

class SessionCheck extends React.Component{
    state = {
        loading: true
    }

    constructor(props) {
        super(props);
        this.handleCheckSession = this.handleCheckSession.bind(this);
    }

    handleCheckSession  = () =>{
        this.setState({ loading: false });
    }

    UNSAFE_componentWillMount() {
        checkSession(this.handleCheckSession);
    }

    componentDidMount = () => {
        axios.get('/').then(response => {
            console.log(response)
        })
    }

    render() {
        return (this.state.loading === false && (
            <React.Fragment>{this.props.children}</React.Fragment>
        ))
    }
}

export const wrapRootElement = ({ element }) => {
    return (
        <SessionCheck>{element}</SessionCheck>
    )
}