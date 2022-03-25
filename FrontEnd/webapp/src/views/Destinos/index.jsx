import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DestinoService from "../../services/DestinoService";


export default function Index() {
    const [destino, setDestino] = useState([]);

    const getAllDestinos = () => {
        DestinoService.getAllDestino()
            .then((response) => {
                setDestino(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    };

    useEffect(() => {
        getAllDestinos();
    }, []);

    const deleteDestino = (id_destino) => {
        DestinoService.deleteDestino(id_destino)
            .then((response) => {
                getAllDestinos();
            })
    }
    return (
        <>
            <header className="header">
                <h1 className="container">Cadastrar Destino</h1>
            </header>
            <div className="container py-3">
                <Link to="/Destinos-Create" className="btn btn-primary mb-2">
                    Criar Destino
                </Link>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id_Destino</th>
                                <th>Localidade</th>
                                <th>Ida</th>
                                <th>Volta</th>
                                <th>Valor</th>
                                <th>Cliente</th>
                                <th>Nome</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>

                            {destino.map((destino) => (
                                <tr key={destino.id_destino}>
                                    <td>{destino.id_destino}</td>
                                    <td>{destino.localidade}</td>
                                    <td>{destino.ida}</td>
                                    <td>{destino.volta}</td>
                                    <td>{destino.valor}</td>
                                    <td>{destino.cliente.nome}</td>
                                    <td>
                                        {destino.cliente.endereco}
                                    </td>
                                    <td className="d-flex">
                                        <Link
                                            to={`/Destinos-Update/${destino.id_destino}`} className="btn btn-info">
                                            Editar
                                        </Link>
                                        <button className="btn btn-danger"
                                            onClick={() => deleteDestino(destino.id_destino)}
                                            style={{ marginLeft: "10px" }}
                                        >
                                            Deletar
                                        </button>
                                    </td>
                                </tr>
                            ))}

                        </tbody>

                    </table>


                </div>
            </div>
        </>    
                
     );
    }

