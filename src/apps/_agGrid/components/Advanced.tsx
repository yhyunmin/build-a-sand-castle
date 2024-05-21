import { AgGridReact } from 'ag-grid-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { ColDef } from 'ag-grid-community'; // Optional Theme applied to the grid

const Advanced = () => {
  const [columnDefs] = useState<ColDef[]>([
    { field: 'mission', headerName: '미션', checkboxSelection: true },
    {
      field: 'company',
      // 커스텀 셀 렌더링
      cellRenderer: CompanyLogoRenderer,
    },
    { field: 'location' },
    {
      field: 'date',
      valueFormatter: (params) => new Date(params.value).toLocaleDateString(),
    },
    {
      field: 'price',
      // Cell Value 포맷
      valueFormatter: (params) => params.value.toLocaleString() + '원',
    },
    { field: 'successful', cellRenderer: SuccessfulRenderer },
    { field: 'rocket' },
  ]);
  const [rowData, setRowData] = useState([]);

  // Fetch data & update rowData state
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/space-mission-data.json') // Fetch data from server
      .then((result) => result.json()) // Convert to JSON
      .then((rowData) => setRowData(rowData)); // Update state of `rowData`
  }, []);

  // column 전체 세팅
  const defaultColDef = useMemo(
    () => ({
      filter: true,
      editable: true,
    }),
    [],
  );
  // 그리드 이벤트 핸들러
  const onCellValueChanged = useCallback((e) => {
    console.log(`새 셀 벨류 ${e.value}`);
  }, []);

  // 커스텀 셀 렌더링
  function CompanyLogoRenderer({ value }) {
    return (
      <span
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
        }}
      >
        {value && (
          <img
            alt={`${value} Flag`}
            src={`https://www.ag-grid.com/example-assets/space-company-logos/${value.toLowerCase()}.png`}
            style={{
              display: 'block',
              width: '25px',
              height: 'auto',
              maxHeight: '50%',
              marginRight: '12px',
              filter: 'brightness(1.1)',
            }}
          />
        )}
        <p
          style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {value}
        </p>
      </span>
    );
  }

  function SuccessfulRenderer({ value }) {
    return (
      <span>
        {value ? (
          <img
            src="https://www.ag-grid.com/example-assets/icons/tick-in-circle.png"
            alt=""
          />
        ) : (
          <img
            src="https://www.ag-grid.com/example-assets/icons/cross-in-circle.png"
            alt=""
          />
        )}
      </span>
    );
  }

  const onSelectionChanged = (e) => {
    console.log(e);
  };
  return (
    <>
      <div className={'ag-theme-quartz-dark'} style={{ height: '500px' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={defaultColDef}
          onCellValueChanged={(e) => onCellValueChanged(e)}
          rowSelection="multiple"
          onSelectionChanged={onSelectionChanged}
        />
      </div>
    </>
  );
};

export default Advanced;

// import { useState, useCallback } from 'react';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
// import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
// import { ColDef, GridReadyEvent } from 'ag-grid-community';
//
// interface IRow {
//   mission: string;
//   company: string;
//   location: string;
//   date: string;
//   time: string;
//   rocket: string;
//   price: number;
//   successful: boolean;
// }
//
// const Advanced = () => {
//   const [columnDefs, setColumnDefs] = useState<ColDef[]>([
//     { field: 'mission' },
//     { field: 'company' },
//     { field: 'location' },
//     { field: 'date' },
//     { field: 'price' },
//     { field: 'successful' },
//     { field: 'rocket' },
//   ]);
//   const [rowData, setRowData] = useState<IRow[]>([]);
//
//   const defaultColDef = {
//     flex: 1,
//     sortable: true,
//     filter: true,
//     resizable: true,
//   };
//
//   const onGridReady = useCallback((params: GridReadyEvent) => {
//     fetch('https://www.ag-grid.com/example-assets/space-mission-data.json')
//       .then((resp) => resp.json())
//       .then((data) => setRowData(data));
//   }, []);
//
//   return (
//     <>
//       <div className={'ag-theme-quartz-dark'} style={{ height: '500px' }}>
//         <AgGridReact
//           rowData={rowData}
//           columnDefs={columnDefs}
//           defaultColDef={defaultColDef}
//           onGridReady={onGridReady}
//         />
//       </div>
//     </>
//   );
// };
//
// export default Advanced;
