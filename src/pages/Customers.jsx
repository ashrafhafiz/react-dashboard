import React from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Edit,
  Inject,
  Toolbar,
  Sort,
  Filter,
  Search
} from "@syncfusion/ej2-react-grids";

import {customersData, customersGrid} from '../data/dummy'
import {Header} from '../components'

const Customers = () => {
  return (<div className="m-10 p-10 bg-white">
  <Header title="Customers" category="page" />
  <GridComponent
    dataSource={customersData}
    allowPaging
    allowSorting
    toolbar={["Delete", "Search"]}
    searchSettings={{ 
      fields: ['CustomerName'],
      ignoreCase: true,
      operator: 'contains'
     }}
    editSettings={{ allowDeleting: true, allowEditing: true }}
    width="auto"
  >
    <ColumnsDirective>
      {customersGrid.map((item, index) => (
        <ColumnDirective key={index} {...item} />
      ))}
    </ColumnsDirective>
    <Inject services={[Page, Search, Toolbar, Selection, Edit, Sort, Filter]} />
  </GridComponent>
</div>
)};

export default Customers;
