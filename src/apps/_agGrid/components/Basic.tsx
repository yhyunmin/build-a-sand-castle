import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-quartz.css'; // Optional Theme applied to the grid
import { useState } from 'react';

const CustomButtonComponent = () => {
  return <button onClick={() => window.alert('clicked')}>Push Me!</button>;
};

type ColDefsType = {
  field: string;
  flex?: number;
  floatingFilter?: boolean;
  editable?: boolean;
  cellEditor?: string;
  cellEditorParams?: {
    values: string[];
  };
  valueFormatter?: (p: { value: string }) => void;
  checkboxSelection?: boolean;
  cellRenderer?: any;
};
const Basic = () => {
  // useState 를 통해 rowData 와 column 을 가져옴
  const [rowData, setRowData] = useState([
    {
      make: 'Tesla',
      model: 'Model Y',
      price: 64950,
      electric: true,
    },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);
  const [colDefs, setColDefs] = useState<ColDefsType[]>([
    {
      field: 'make',
      // 밑과같이 여러 옵션을 넣을 수 있음.
      flex: 2,
      floatingFilter: true,
      editable: true,
      cellEditor: 'agSelectCellEditor',
      cellEditorParams: {
        values: ['Tesla', 'Ford', 'Toyota'],
      },
    },
    { field: 'model', flex: 1 },
    {
      field: 'price',
      //텍스트 포매팅을위한 옵션
      valueFormatter: (p) => '$' + p.value.toLocaleString(),
    },
    {
      field: 'electric',
      //*. 다중 클릭을위한 옵션 이때 rowSelection을 정의해줘야함
      checkboxSelection: true,
    },
    // cell 안에 렌더링
    { field: 'button', cellRenderer: CustomButtonComponent, flex: 0.5 },
  ]);
  const defaultColDef = {
    flex: 1,
    sortable: true, // default true
    filter: true,
    resizable: true,
  };
  // *checkboxSelection 을 위한 옵션
  const rowSelection = 'multiple';

  //
  // 페이지네이션
  //

  // 페이지네이션 설정
  const pagination = true;
  const paginationPageSize = 500;
  const paginationPageSizeSelector = [200, 500, 1000];

  return (
    <>
      <h1>Basic Component</h1>
      <div
        className={'ag-theme-quartz-dark'} // applying the grid theme
        style={{ width: '100%', height: '500px' }} // the grid will fill the size with the parent container
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowSelection={rowSelection}
          // 페이지네이션 추가
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
    </>
  );
};

export default Basic;
