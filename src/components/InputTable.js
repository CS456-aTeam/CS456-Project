import { useState } from "react";

export const InputTable = (props) => {
    let [currRow, setCurrRow] = useState(0);

    return <table>
        <tbody>
            <tr>
                <th colSpan='2'><input placeholder="Title" onInput={(event) => props.onTitleChange(event.target.value)} /></th>
            </tr>
            <tr>
                <th><input placeholder="X Axis Label" onInput={(event) => props.onXAxisLabelChange(event.target.value)} /></th>
                <th><input placeholder="Y Axis Label" onInput={(event) => props.onYAxisLabelChange(event.target.value)} /></th>
            </tr>
            <tr>
                <td colSpan='2'>
                    <button onClick={() => props.onAddRow(currRow)} type="button">Add Row Above</button>
                    <button onClick={() => props.onAddRow(currRow + 1)} type="button">Add Row Below</button>
                    <button onClick={() => props.onDeleteRow(currRow)} type="button">Delete Row</button>
                </td>
            </tr>
            {props.rows.map((row, index) => {
                function keyHandler(event) {
                    if (event.key === 'Enter') {
                        props.onAddRow(index + !event.shiftKey);
                    } else if (event.key === 'Delete' && event.ctrlKey) {
                        props.onDeleteRow(index);
                    }
                }
                return <tr key={row.key} className={(currRow === index)? 'currRow': ''}>
                    <td>
                        <input
                            autoFocus
                            value={row.x}
                            onInput={(event) => props.onRowChange(index, 'x', event.target.value)}
                            onFocus={() => {setCurrRow(index)}}
                            onKeyDown={keyHandler} />
                    </td>
                    <td>
                        <input
                            value={row.y}
                            onInput={(event) => props.onRowChange(index, 'y', event.target.value.replace(/[^0-9]/, ''))}
                            onFocus={() => {setCurrRow(index)}}
                            onKeyDown={(keyHandler)} />
                    </td>
                </tr>
            })}
        </tbody>
    </table>;
}
