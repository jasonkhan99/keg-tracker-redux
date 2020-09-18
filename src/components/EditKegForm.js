import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({brand: event.target.brand.value, name: event.target.name.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pint: event.target.pint.value, id: keg.id});
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission} 
        buttonText="Edit Keg" 
      />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;