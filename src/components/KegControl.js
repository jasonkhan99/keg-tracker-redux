import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleSellingPint = (id) => {
    const soldMasterKeg = this.state.masterKegList[this.state.masterKegList.findIndex(keg => keg.id === id)];
    if (soldMasterKeg.pint === 1 || soldMasterKeg.pint === "Sold Out" ) {
      soldMasterKeg.pint = "Sold Out";
    } else {
      soldMasterKeg.pint -=1;
    }
    const soldMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(soldMasterKeg);
    this.setState({
      masterKegList: soldMasterKegList,
    })
  }

  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const action = a.addKeg(kegToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
      editing: false
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm 
                                keg = {this.state.selectedKeg}
                                onEditKeg = {this.handleEditingKegInList}
                              />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
                                keg = {this.state.selectedKeg}
                                onClickingSellPint = {this.handleSellingPint}
                                onClickingDelete = {this.handleDeletingKeg}
                                onClickingEdit = {this.handleEditClick}
                              />
      buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm 
                                onNewKegCreation={this.handleAddingNewKegToList} 
                              />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList 
                                kegList={this.state.masterKegList} 
                                onKegSelection={this.handleChangingSelectedKeg}
                              />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTicketList: state.masterTicketList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;