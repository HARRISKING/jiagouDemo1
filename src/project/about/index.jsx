import React from 'react'

import Filter from '../../component/Filter.jsx'
import filesList from './file/list'
export default class About extends React.Component {
  render() {
    return (
      <div>
        <Filter
          formList={filesList}
        />
      </div>
    )
  }
}