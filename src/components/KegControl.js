import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
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
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                  formVisibleOnPage: false });
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
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        masterKegList: editedMasterKegList,
        editing: false,
        selectedKeg: null
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
    } else if (this.state.formVisibleOnPage) {
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

export default KegControl;