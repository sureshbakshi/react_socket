import { utility } from "../utils/dispatch_utility";
import { connect } from "react-redux";
// import FooterComponent from "../components/home/footer";
// import { ToastContainer } from 'react-toastify';
// import Features from '../components/home/features';
import { Component } from "react";
import * as React from 'react';
import * as socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";
interface IAppProps {
    router?: any;
    location: any;
    Dispatch: any;
    history: any;
    PageLocation: any;
}
const socket = socketIOClient(ENDPOINT);

class App extends Component<IAppProps, any> {
    constructor(props) {
        super(props);
        this.state = {
            response: ""
        }
    }

    componentDidMount() {
        socket.on("FromAPI", data => {
            this.setState({ response: data });
        });
    }
    handleClick() {
        socket.emit("eventClick", new Date());
    }
    render() {
        // let { captchaCode } = this.props;
        console.log('app=========================.....')
        let { response } = this.state;

        return (
            <div className="app">
                <p>{response}</p>
                <p onClick={() => { this.handleClick() }} className="btn btn-primary">Trigger event</p>
                {/* <ToastContainer /> */}
                {/* <FooterComponent /> */}
            </div>
        );
    }
}
function mapStoreToProps(store): Partial<IAppProps> {
    return {
        PageLocation: store.router.location,
    };
}
export default connect(mapStoreToProps, utility.mapDispatchToProps)(App);
