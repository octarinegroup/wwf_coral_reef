import React from 'react'
import ReactTooltip from 'react-tooltip'
// import 'node_modules/react-tooltip/standalone/react-tooltip.min.js'

import './GraphsSidebar.css'

const graphTypes = [
  { id: 1, name: 'graph1', icon: 'graphic_eq' },
  { id: 2, name: 'graph2', icon: 'graphic_eq' },
  { id: 3, name: 'graph3', icon: 'graphic_eq' },
  { id: 4, name: 'graph4', icon: 'graphic_eq' },
  { id: 5, name: 'graph5', icon: 'graphic_eq' },
  { id: 6, name: 'graph6', icon: 'graphic_eq' },
  { id: 7, name: 'graph7', icon: 'graphic_eq' },
  { id: 8, name: 'graph8', icon: 'graphic_eq' },
]

export const GraphsSidebar = props => {
  const items = graphTypes.map(type => (
    <div data-tip data-for={type.name} className="graph-sidebar-item-wrapper valign-wrapper" key={type.id}>
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