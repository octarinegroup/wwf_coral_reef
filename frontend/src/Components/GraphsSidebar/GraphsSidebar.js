import React from 'react'
import ReactTooltip from 'react-tooltip'
// import 'node_modules/react-tooltip/standalone/react-tooltip.min.js'

import './GraphsSidebar.css'

const graphTypes = [
  { id: 1, name: 'Bar Graph', icon: 'sort' },
  { id: 2, name: 'Line Graph (2 years)', icon: 'timeline' }
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
    <div>
      <div className={`graph-sidebar-wrapper ${props.showDataView ? 'bg-for-data' : ''}`}>
        {items}
      </div>
      <div className='legend-wrapper'>
        <ul style={{"width":"70%"}}>
          <li style={{"display": "flex", "justify-content":"space-between"}}><div className='legend blue'></div>Use</li>
          <li style={{"display": "flex", "justify-content":"space-between"}}><div className='legend grey'></div>NTZ</li>
        </ul>
    </div>
  </div>
  )
}