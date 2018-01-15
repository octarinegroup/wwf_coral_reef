import ReactTable from 'react-table'
import React, { Component } from 'react';

class DataTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };

      this.filterDataByYear = this.filterDataByYear.bind(this)
    }

    filterDataByYear() {
        let data = []
        this.props.data.map((entry, i) => {
            if(entry.Year === this.props.filterYear) {
                console.log('match')
                data.push(entry)
            }
        })
        return data;
    }

    render() {
        console.log('data, ', this.props.data);
        const data = this.filterDataByYear()
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
            Header: 'Year',
            accessor: 'Year' 
        },
        {
            Header: this.props.coverType,
            accessor: `${this.props.coverType}`
        }
    ]

        return (
            <ReactTable
                data={data}
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
