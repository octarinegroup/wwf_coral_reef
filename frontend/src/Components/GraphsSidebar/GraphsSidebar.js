import React from 'react'
import ReactTooltip from 'react-tooltip'
// import 'node_modules/react-tooltip/standalone/react-tooltip.min.js'

import './GraphsSidebar.css'

const graphTypes = [
  { id: 1, name: 'bar', icon: 'graphic_eq' },
  { id: 2, name: 'line_two_years', icon: 'graphic_eq' }
]

export const GraphsSidebar = props => {
  const items = graphTypes.map(type => (
    <div data-tip data-for={type.name} className="graph-sidebar-item-wrapper valign-wrapper" key={type.id} onClick={() => props.showGraphEditor(type.name)}> 
      <i className="material-icons">{type.icon}</i>
      <ReactTooltip 
        id={type.name} 
        effect="solid" 
        place="left" 
        type="light"
        delayHide={300}
      >
        {type.name}
      </ReactTooltip>
    </div>
  ))
  return (
    <div className={`graph-sidebar-wrapper ${props.showDataView ? 'bg-for-data' : ''}`}>
      {items}
    </div>
  )
}