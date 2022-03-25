import React, {useState, useEffect} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function Create(){

    const  [nome, setNome] = useState("");
    const [endereco, setEndereco] = useState("");
    const [email, setEmail] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    const criarOuEditarCliente = (e) => {
        e.preventDefault();

    const cliente = {nome, endereco, email};

    if (id) {
        ClienteService.updateCliente(id, cliente)
        .then((response) => {
            navigate("/Clientes")

        })
    }else{
            ClienteService.createCliente(cliente)
            .then((response) => {
                navigate("/Clientes")
               })  

}
    }

useEffect(() => {
    function getClienteById() {
      if (id) {
          ClienteService.getClienteById(id)
          .then((response) => {
              setNome(response.data.nome);
              setEndereco(response.data.endereco);
              setEmail(response.data.email);
          })
          .catch((error) => {
              console.log(error);
          })
      }
    }
    getClienteById()
}, [id]);

return (
  <div className="container py-3">
    <form>
      <fieldset>
        <legend>
          <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
        </legend>
        <div className="mb-3">
          <label htmlFor="Nome" className="form-label">
            Nome
          </label>
          <input
            type="text"
            id="Nome"
            className="form-control"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="mb-3">
            <label htmlFor="Endereco" className="form-label">
              Endereco
            </label>
            <input
              type="text"
              id="Endereco"
              className="form-control"
              placeholder="Endereco"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>


          <button type="submit" className="btn btn-primary" 
          onClick={(e) => criarOuEditarCliente(e)}>
            Enviar
          </button>
          <Link
            to="/Clientes"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
