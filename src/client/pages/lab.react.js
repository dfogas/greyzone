import Component from '../components/component.react';
import React from 'react';

import DocumentTitle from 'react-document-title';
import Laboratory from '../lab/laboratory.react';

class LabPage extends Component {
  render() {
    return (
      <DocumentTitle title='Laboratory'>
        <div className='lab-page'>
          <Laboratory />
        </div>
      </DocumentTitle>
    );
  }
}

LabPage.propTypes = {

};

export default LabPage;
