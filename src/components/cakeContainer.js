import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BuyCake } from './../redux/index'

class CakeContainer extends Component {
    constructor(props) {
        super(props)
        console.log('props is', props);
    }
    
    render() {
        return (
            <div>
                <h2>Number of Cakes - {this.props.numberOfCakes}</h2>
                <button onClick = {this.props.BuyCake} >Buy Cake</button>
            </div>
        );
    }             
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes : state.numOfCakes //selector
    }
}

const mapDispatchToProps = dispatch => {
    return {
        BuyCake : () => dispatch(BuyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer);