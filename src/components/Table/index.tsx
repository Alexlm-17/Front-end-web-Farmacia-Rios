import { Table } from 'react-bootstrap';

interface DataApi {
    usuariosDatabase: {
        id: number;
        name: string;
        value: number;
    }[]
}
function TableLog({ usuariosDatabase }: DataApi) {
    return (
        <Table responsive="sm">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>VALUE</th>
                </tr>
            </thead>
            <tbody>
                {usuariosDatabase.map(usuario => (
                    <tr key={usuario.id}>
                        <td>{usuario.id}</td>
                        <td>{usuario.name}</td>
                        <td>{usuario.value}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );

}

export default TableLog;