import React from 'react';
import TableLog from "../../components/Table";
export const Home = () => {

    const usuarios = [{
        id: 1, name: "alex", value: 19
    },
    {
        id: 2, name: "Washington", value: 19
    }
        ,
    {
        id: 3, name: "Fabio", value: 19
    }

    ];


    return (
        <div>
            <h4>Home</h4>
            <TableLog usuariosDatabase={usuarios} />
        </div>
    )
}