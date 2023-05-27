import React from "react";
import style from './Grid.module.scss';

interface TableSize{
    width: number,
    heigth: number
}

export default function Grid(props: TableSize){

    let n = 0;
    function createTable(w: number, h: number){
        const table = [];


        for(let i = 0; i < h; i++){
            const row = [];
            for(let j = 0; j < w; j++){
                row.push(n);
                n+=1;
            }
            table.push(row);
        }
    return table;
    }


    const table = createTable(props.width, props.heigth);

    return(
        <div className={style.tableGrid}>
            <table className={style.Grid}>
                <tbody>
                {table.map((row, rowI) => (
                    <tr key={rowI}>
                        {row.map((col, colI) => (
                            <td key={colI}>{col}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}