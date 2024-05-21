// react practice
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

const Practice = () => {
  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);
  return (
    <>
      <div style={{ height: '500px' }}>
        <AgGridReact rowData={rowData} />
      </div>
    </>
  );
};

export default Practice;
