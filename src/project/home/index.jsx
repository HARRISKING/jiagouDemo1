import React from 'react'

import Filter from '../../component/Filter.jsx'
import filterList from './file/list'
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Filter
          formList={filterList}
        />
      </div>
    )
  }
}