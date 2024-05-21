import { useCallback, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './style.css';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
interface IOlympicData {
  athlete: string;
  age: number;
  country: string;
  year: number;
  date: string;
  sport: string;
  gold: number;
  silver: number;
  bronze: number;
  total: number;
}

const Apply = () => {
  const [rowData, setRowData] = useState<IOlympicData[]>([]);
  const [colDefs, setColumnDefs] = useState<ColDef[]>([
    {
      field: 'athlete',
      minWidth: 170,
      cellClassRules: {
        'rag-green': (params) => params.value,
      },
    },
    { field: 'age' },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold' },
    { field: 'silver' },
    { field: 'bronze' },
    { field: 'total' },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
      filter: true,
    };
  }, []);

  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [200, 500, 1000];

  const onGridReady = useCallback((params: GridReadyEvent) => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
      .then((resp) => resp.json())
      .then((data: IOlympicData[]) => setRowData(data));
  }, []);
  const rowClassRules = {
    // apply red to Ford cars
    'rag-red': (params) => params.data.year === '2012',
  };

  return (
    <>
      <div className={'ag-theme-quartz-dark'} style={{ height: '500px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          onGridReady={onGridReady}
          // 페이지네이션 추가
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
          rowClassRules={rowClassRules}
        />
      </div>
    </>
  );
};

export default Apply;
