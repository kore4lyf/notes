import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import "./index.css";

const AddressLabel = ({person}) => {
  return (
    <div className="address">
      <p>{person.firstName} {person.lastName}</p>
      <p>{person.address.street}</p>
      <p>{person.address.region}</p>
    </div>
  );
};

AddressLabel.propTypes = {
  person: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.string.isRequired), 
    PropTypes.shape({
      firstame: PropTypes.string.isRequired,
      lastname: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string.isRequired)).isRequired,
    })
    ])
};

const sender = {
  firstName: "Korede",
  lastName: "Faleye",
  address: {
    street: "123 Fake St.",
    region: "Brooklyn, MA 02118"
  }
}

const reciever = {
  firstName: "Faith",
  lastName: "Azuka",
  address: {
    street: "123 Fake St.",
    region: "Boston, MA 02118"
  }
}


const Stamp = () => (
  <div className='stamp'>
    <p>STAMP</p>
  </div>
)
const Envelop = ({toPerson, fromPerson}) => {
  return (
    <div className="envelop">
      <Stamp/>
      <AddressLabel person={toPerson}/>
      <AddressLabel person={fromPerson}/>
    </div>

  )
}


ReactDOM.render(
  <Envelop toPerson={reciever} fromPerson={sender}/>,
  document.getElementById("root")
);
