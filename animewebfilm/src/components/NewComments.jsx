import React from 'react';
import PropTypes from 'prop-types';
import './NewComments.css';
import CommentBlock from './CommentBlock';

NewComments.propTypes = {

};

function NewComments(props) {
  return (
    <div className='newcomment__block'>
      <div className='newcomment__header d-flex'>
        <h5 className='newcomment-header__title'>New Comments</h5>
      </div>

      <CommentBlock />

    </div>
  );
}

export default NewComments;