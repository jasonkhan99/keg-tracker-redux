import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingDelete, onClickingSellPint } = props;

  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h2>{keg.brand}</h2>
      <h3>{keg.names}</h3>
      <h4>{keg.price}</h4>
      <h4>{keg.alcoholContent}</h4>
      <h4>{keg.pint}</h4>
      <button onClick={()=> onClickingSellPint(keg.id) }>Sell a Pint</button>
      <button onClick={ props.onClickingEdit }>Edit Keg</button>
      <button onClick={()=> onClickingDelete(keg.id) }>Remove Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSellPint: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;