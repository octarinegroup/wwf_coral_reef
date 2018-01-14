import ReactTable from 'react-table'
import React, { Component } from 'react';

class DataTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    render() {
        console.log('table, ', this.props.coverType);
        console.log('data, ', this.props.benthicData[0][this.props.coverType])
        const columns = [{
            Header: 'MPA Name',
            accessor: 'MPA_Name'
        }, {
            Header: 'Site ID',
            accessor: 'Site_ID' 
        },
        {
            Header: 'Site Name',
            accessor: 'Site_Name'
        },
        {
            Header: 'Zone',
            accessor: 'Zone' 
        },
        {
            Header: this.props.coverType,
            accessor: `${this.props.coverType}`
        }
    ]

        return (
            <ReactTable
                data={this.props.benthicData}
                columns={columns}
                defaultPageSize={8}
                style={{
                    height: "400px"
                }}
            />
        )
    }
}

export default DataTable;
