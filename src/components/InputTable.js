import { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";

export const InputTable = (props) => {
  let [currRow, setCurrRow] = useState(0);

  function rowDeleter(row) {
    props.onDeleteRow(row);
    setCurrRow(Math.min(currRow, props.rows.length - 2));
  }

  return (
    <div>
      {/* Buttons */}
      <Box
        sx={{
          "& > :not(style)": { m: 3 },
        }} display="flex" justifyContent="center"
      >
        <Stack direction="row" spacing={3}>
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            onClick={() => props.onAddRow(currRow)}
          >
            Add Row Above
          </Button>
          <Button
            startIcon={<AddIcon />}
            variant="outlined"
            onClick={() => props.onAddRow(currRow + 1)}
            type="button"
          >
            Add Row Below
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            variant="outlined"
            onClick={() => rowDeleter(currRow)}
            type="button"
          >
            Delete Row
          </Button>
        </Stack>
      </Box>
      <Box display="flex" justifyContent="center">
        <Input
          placeholder="Title"
          onInput={(event) => props.onTitleChange(event.target.value)}
        />
      </Box>

      {/* Input Table */}
      <TableContainer>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Box display="flex" justifyContent="center">
                  <Input
                    placeholder="X Axis Label"
                    onInput={(event) =>
                      props.onXAxisLabelChange(event.target.value)
                    }
                  />
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" justifyContent="center">
                  <Input
                    placeholder="Y Axis Label"
                    onInput={(event) =>
                      props.onYAxisLabelChange(event.target.value)
                    }
                  />
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row, index) => {
              function keyHandler(event) {
                if (event.key === "Enter") {
                  props.onAddRow(index + !event.shiftKey);
                } else if (event.key === "Delete" && event.ctrlKey) {
                  rowDeleter(index);
                }
              }
              return (
                <TableRow
                  key={row.key}
                  className={currRow === index ? "currRow" : ""}
                >
                  <TableCell>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="outlined-basic"
                        label="x value"
                        variant="outlined"
                        autoFocus
                        value={row.x}
                        onInput={(event) =>
                          props.onRowChange(index, "x", event.target.value)
                        }
                        onFocus={() => {
                          setCurrRow(index);
                        }}
                        onKeyDown={keyHandler}
                      />
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box display="flex" justifyContent="center">
                      <TextField
                        id="outlined-basic"
                        label="y value"
                        variant="outlined"
                        autoFocus
                        value={row.y}
                        onInput={(event) => props.onRowChange(
                          index,
                          "y",
                          (/^[0-9]*\.?[0-9]*$/.test(event.target.value)) ?
                            event.target.value
                            : row.y
                        )
                        }
                        onFocus={() => {
                          setCurrRow(index);
                        }}
                        onKeyDown={keyHandler}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  );
};
