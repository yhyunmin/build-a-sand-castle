// react practice
import { useEffect, useMemo, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './style.css';
const Practice = () => {
  const [rowData, setRowData] = useState([
    {
      id: 1,
      code: 'S001',
      mainCategory: '자전거',
      midCategory: '자전거',
      subCategory: '자전거',
      isRequired: 'Y',
      type: '자동',
      creator: '김길동',
      createdAt: '2022-01-01 00:00:00',
      modifier: '김길동',
      modifiedAt: '2022-01-01 00:00:00',
    },
    {
      id: 2,
      code: 'S001',
      mainCategory: '자전거',
      midCategory: '자전거',
      subCategory: '자전거',
      isRequired: 'Y',
      type: '자동',
      creator: '김길동',
      createdAt: '2022-01-01 00:00:00',
      modifier: '김길동',
      modifiedAt: '2022-01-01 00:00:00',
    },
    {
      id: 3,
      code: 'S001',
      mainCategory: '자전거',
      midCategory: '자전거',
      subCategory: '자전거',
      isRequired: 'Y',
      type: '자동',
      creator: '김길동',
      createdAt: '2022-01-01 00:00:00',
      modifier: '김길동',
      modifiedAt: '2022-01-01 00:00:00',
    },
    {
      id: 4,
      code: 'S001',
      mainCategory: '자전거',
      midCategory: '자전거',
      subCategory: '자전거',
      isRequired: 'Y',
      type: '자동',
      creator: '김길동',
      createdAt: '2022-01-01 00:00:00',
      modifier: '김길동',
      modifiedAt: '2022-01-01 00:00:00',
    },
  ]);

  const [columnDefs, setColumnDefs] = useState([
    { field: 'id', headerName: 'No.', groupHeaderHeight: '350px' },
    { field: 'code', headerName: 'Model' },
    { field: 'mainCategory', headerName: '대분류' },
    { field: 'midCategory', headerName: '중분류' },
    { field: 'subCategory', headerName: '소분류' },
    { field: 'isRequired', headerName: '필수여부' },
    { field: 'type', headerName: '선택방법' },
    { field: 'creator', headerName: '등록자' },
    { field: 'createdAt', headerName: '등록날짜' },
    { field: 'modifier', headerName: '수정자' },
    { field: 'modifiedAt', headerName: '수정날짜' },
  ]);
  const defaultColDef = useMemo(() => {
    return { filter: true, flex: 1 };
  }, []);

  return (
    <>
      <div className={'ag-theme-quartz'} style={{ height: '500px' }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColdef={defaultColDef}
          rowHeight={35}
          headerHeight={35}
        />
      </div>
    </>
  );
};

export default Practice;
