// react practice
import { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

const Practice = () => {
  const [rowData, setRowData] = useState([
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ]);

  //If your application changes Column Definitions use useState, otherwise use useMemo.

  const [columnDefs, setColumnDefs] = useState([
    { field: 'make' },
    { field: 'model' },
  ]);
  const defaultColDef = useMemo(() => {
    return { filter: true };
  }, []);

  return (
    <>
      <div style={{ height: '500px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColdef={defaultColDef}
        />
      </div>
    </>
  );
};

export default Practice;
