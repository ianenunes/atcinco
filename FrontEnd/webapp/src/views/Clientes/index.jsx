import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function Index(){
const [clientes, setClientes] = useState([]);

const getAllClientes = () =>{

    ClienteService.getAllCliente()
    .then((response) =>{
setClientes(response.data);
    })
    .catch((error) =>{
console.log(error);

    });
};
useEffect(() => {
    getAllClientes();
},[]);

const deleteCliente = (clienteId) => {
    ClienteService.deleteCliente(clienteId)
    .then((response) => {
        getAllClientes();
    })
    .catch((error) =>{
        console.log(error);
        const{data} = error.response;
        if(data.status === 500){
            alert ("Erro na API");
        
        }
    });
};
return (
<>
<header className="header">
<h1 className="container">Cadastro Cliente</h1>
      </header>
        <div className= "container p-5">
    <Link to="/Clientes-Create" className="btn btn-primary mb-2"> Criar Cliente</Link>
    <div className="table-responsive">
    <table className="table table-hover table-sm">
    <thead>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>E-mail</th>
            <th>Ações</th>

        </tr>

    </thead>

   <tbody>

       {clientes.map((clientes)=>(
       <tr key={clientes.id_cliente}>
            <td>{clientes.id_cliente}</td>
            <td>{clientes.nome}</td>
            <td>{clientes.endereco}</td>
            <td>{clientes.email}</td>
            <td>
            <Link to ={`/Clientes-Update/${clientes.id_cliente}`} className="btn btn-info">Editar</Link>
            
            <button className= "btn btn-danger"
             onClick={() => deleteCliente(clientes.id_cliente)}>Deletar</button>     
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