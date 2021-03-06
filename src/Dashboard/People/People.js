import React, { useState, useEffect } from 'react';
//component imports
import PeopleCard from './Card/Card';
import AddModal from '../../components/AddModal/AddModal';
//Redux Imports
import { useSelector } from 'react-redux';
//bs imports
import { Container } from 'react-bootstrap';
//FA imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function People() {
  const dashboard = useSelector(state => state.dashboard);
  const [modalShow, setModalShow] = useState(false);
  const errors = useSelector(state => state.UI.errors);

  useEffect(() => {
    if (errors.peopleName === undefined && errors.peopleBudget === undefined) {
      setModalShow(false);
    }
  }, [errors]);

  return (
    <div className="dashboard-people">
      <Container fluid className="card-container">
        {dashboard.people.map((_, personIndex) => (
          <PeopleCard personIndex={personIndex} key={personIndex} />
        ))}
        <div className="card-wrapper">
          <div className="add-person" onClick={() => setModalShow(true)}>
            <FontAwesomeIcon icon={faPlusCircle} className="add-icon" />
            <h3>Add Person</h3>
          </div>
        </div>
      </Container>
      <AddModal show={modalShow} onHide={() => setModalShow(false)} type="person" />
    </div>
  );
}
export default People;
