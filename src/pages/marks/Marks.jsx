import * as React from "react";
import Table from "@mui/joy/Table";
import { Box } from "@mui/joy";


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Marks() {
  return (
    <Box sx={{ height: "100%" }}>
      <Table borderAxis="both">
        <caption>A caption should be a summary of the table.</caption>
        <thead>
          <tr>
            <th style={{ width: "40%" }}>Event</th>
            <th>Date</th>
            <th>Type</th>
            <th>Mark</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.name}>
              <td>{row.name}</td>
              <td>{row.calories}</td>
              <td>{row.fat}</td>
              <td>{row.carbs}</td>
              <td>{row.protein}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th scope="row">Totals</th>
            <td>1,319</td>
            <td>50.7</td>
            <td>201</td>
            <td>22.5</td>
          </tr>
        </tfoot>
      </Table>
    </Box>
  );
}
