import { useState } from "react";

export const InputTable = (props) => {
    return <table>
        <tbody>
            <tr>
                <td colSpan={2}><input placeholder="Title"/></td>
            </tr>
            <tr>
                <td><input placeholder="X Axis Label" /></td>
                <td><input placeholder="Y Axis Label" /></td>
            </tr>
            {props.rows.map((row, index) => {
                function keyHandler(event) {
                    if (event.key == 'Enter') {
                        props.onAddRow(index + !event.shiftKey);
                    } else if (event.key == 'Delete' && event.ctrlKey && index > 0) {
                        props.onDeleteRow(index);
                    }
                }
                return <tr key={row.key}>
                    <td>
                        <input
                            autoFocus
                            value={row.x}
                            onInput={(event) => props.onRowChanged(index, 'x', event.target.value)}
                            onKeyDown={keyHandler} />
                    </td>
                    <td>
                        <input
                            value={row.y}
                            onInput={(event) => props.onRowChanged(index, 'y', event.target.value)}
                            onKeyDown={(keyHandler)} />
                    </td>
                </tr>
            })}
        </tbody>
    </table>;
}