import { useState } from "react";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import TextField from '@mui/material/TextField';

export const InputTable = (props) => {
    let [currRow, setCurrRow] = useState(0);
    return (
    <div>
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    >
    <Input placeholder="Title" onInput={(event) => props.onTitleChange(event.target.value)} />
    </Box>
        <TableContainer>
        <Table sx={{ minWidth: 540 }} aria-label="simple table">
            <TableHead >
            <TableRow>
                <TableCell>
                <Input placeholder="X Axis Label" onInput={(event) => props.onXAxisLabelChange(event.target.value)} /></TableCell>
                <TableCell>
                <Input placeholder="Y Axis Label" onInput={(event) => props.onYAxisLabelChange(event.target.value)} /></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {props.rows.map((row, index) => {
                    function keyHandler(event) {
                        if (event.key === 'Enter') {
                            props.onAddRow(index + !event.shiftKey);
                        } else if (event.key === 'Delete' && event.ctrlKey) {
                            props.onDeleteRow(index);
                        }
                    }
                    return <TableRow key={row.key} className={(currRow === index)? 'currRow': ''}>
                        <TableCell>
                        <TextField id="outlined-basic" label="x value" variant="outlined" autoFocus
                                value={row.x}
                                onInput={(event) => props.onRowChange(index, 'x', event.target.value)}
                                onFocus={() => {setCurrRow(index)}}
                                onKeyDown={keyHandler}/>
                        </TableCell>
                        <TableCell>
                        <TextField id="outlined-basic" label="y value" variant="outlined" autoFocus
                                value={row.y}
                                onInput={(event) => props.onRowChange(index, 'y', event.target.value.replace(/[^0-9]/, ''))}
                                onFocus={() => {setCurrRow(index)}}
                                onKeyDown={(keyHandler)} />
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
        </TableContainer>
        <Box
        sx={{
            '& > :not(style)': { m: 3 },
        }}
        >
            <Stack direction="row" spacing={3}>
            <Button startIcon={<AddIcon />}variant="outlined" onClick={() => props.onAddRow(currRow)} >Add Row Above</Button>
            <Button startIcon={<AddIcon />}variant="outlined" onClick={() => props.onAddRow(currRow + 1)} type="button">Add Row Below</Button>
            <Button startIcon={<DeleteIcon />} variant="outlined" onClick={() => props.onDeleteRow(currRow)} type="button">Delete Row</Button>
            </Stack>
        </Box>
    </div>
    )
}
