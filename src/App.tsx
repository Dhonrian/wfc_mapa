import React, { useState } from 'react';
import Grid from './components/Grid';
import { IconButton, TextField } from '@mui/material';
import Sync from '@mui/icons-material/Sync';

function App() {

  const [columns, setColumns] = useState('');
  const [rows, setRows] = useState('');
  const [gridValues, setGrid] = useState({
    rows: '',
    columns: ''
  });

  function gettableSize() {

    if (gridValues) {
      setColumns(gridValues.columns);
      setRows(gridValues.rows);
    }

  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
          <TextField id='columnsId' style={{ marginRight: "20px" }} helperText='Columns' variant='standard' value={gridValues.columns} onChange={(e) => setGrid(prevState => ({ ...prevState, columns: e.target.value }))}></TextField>
          <span style={{ marginTop: "10px" }}>x</span>
          <TextField id='rowsId' style={{ marginLeft: "20px" }} helperText='Rows' variant='standard' value={gridValues.rows} onChange={(e) => setGrid(prevState => ({ ...prevState, rows: e.target.value }))}></TextField>
          <span></span>
          <IconButton aria-label='process' style={{ marginLeft: "20px" }} onClick={gettableSize}><Sync></Sync></IconButton>
        </div>
        <span></span>
        <div>
          <Grid width={Number(columns)} heigth={Number(rows)}></Grid>
        </div>
      </header>
    </div>
  );
}

export default App;
