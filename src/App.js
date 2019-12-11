import React from 'react';

import {connect} from 'react-redux';
import {buyItem, removeFeature} from './actions/carActions';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props => {
  // console.log('props in App: ', props)
  // const state = ;

  const removeFeature = id => {
    // dispatch an action here to remove an item
    props.removeFeature(id)
  };

  const buyItem = id => {
    // dipsatch an action here to add an item
    props.buyItem(id);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures
          car={props.car} 
          removeFeature={removeFeature}
        />
      </div>
      <div className="box">
        <AdditionalFeatures 
          buyItem={buyItem} 
          additionalFeatures={props.additionalFeatures} 
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  // console.log('state in mapStateToProps: ', state)
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {buyItem, removeFeature}
)(App)
