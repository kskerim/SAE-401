import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
{  
    field: 'id', 
    headerName: 'ID',
    width: 40
  },
  { 
    field: 'name', 
    headerName: 'Name',
    width: 150 
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 90
  }
];

const rows = [
  { id: 1, time: 1, wind_speed_10m: 'Snow', temperature_2m: 'Jon', relative_humidity_2m: 14 }
];


function GridTable(props) {

    const { result } = props;


    //Implementer la recuperation des données ...
    //parsing results et creation entrée du tableau

  
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={result}
        columns={columns}
        columnVisibilityModel = {{id: false}}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default GridTable;