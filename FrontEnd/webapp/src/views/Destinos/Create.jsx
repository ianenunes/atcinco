import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";
import DestinoService from "../../services/DestinoService";

export default function Create() {

  const [localidade, setLocalidade] = useState("");
  const [ida, setIda] = useState("");
  const [volta, setVolta] = useState("");
  const [valor, setValor] = useState("0.0");
  const [cliente, setCliente] = useState({ id_cliente: "", nome: "", endereco: "", email: "" });
  const [clientes, setClientes] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllClientes = () => {
    ClienteService.getAllCliente()
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllClientes();
  }, []);

  const criarOuEditarDestino = (e) => {
    e.preventDefault();

    const destino = { localidade, ida, volta, valor, cliente };

    if (id) {
      DestinoService.updateDestino(id, destino)
        .then((response) => {
          navigate("/Destinos")

        })
    } else {
      DestinoService.createDestino(destino)
        .then((response) => {
          navigate("/Destinos")
        })

    }
  }

  useEffect(() => {
    function getDestinoById() {
      if (id) {
        DestinoService.getDestinoById(id)
          .then((response) => {
            setLocalidade(response.data.localidade);
            setIda(response.data.ida);
            setVolta(response.data.volta);
            setValor(response.data.valor);
            setCliente({
              id_cliente: response.data.cliente.id_cliente,
              nome: response.data.cliente.nome,
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    }
    getDestinoById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="Localidade" className="form-label">
              Localidade
            </label>
            <input
              type="text"
              id="Localidade"
              className="form-control"
              placeholder="Localidade"
              value={localidade}
              onChange={(e) => setLocalidade(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Ida" className="form-label">
              Ida
            </label>
            <input
              type="text"
              id="Ida"
              className="form-control"
              placeholder="Ida"
              value={ida}
              onChange={(e) => setIda(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Volta" className="form-label">
              Volta
            </label>
            <input
              type="text"
              id="Volta"
              className="form-control"
              placeholder="Volta"
              value={volta}
              onChange={(e) => setVolta(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Valor" className="form-label">
              Valor
            </label>
            <input
              type="text"
              id="Valor"
              className="form-control"
              placeholder="Valor"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Cliente" className="form-label">
              Cliente
            </label>
            <select
              id="Id_Cliente"
              nome="Id_Cliente"
              className="form-select"
              onChange={(e) => setClientes({ id_cliente: Number.parseInt(e.target.value) })
            }
            >
          <option value="DEFAULT ">{id? cliente.nome:"Escolha um cliente"}</option> 
            {clientes.map((cliente) => (
              <option key={cliente.id_cliente} value={cliente.id_destino}>    {cliente.nome}
              </option>
            ))}
          </select>
        </div>
          <button
           type="submit"
           className="btn btn-primary"
           onClick={(e) => criarOuEditarDestino(e)}
           >
            Enviar
          </button>
          <Link
            to="/Destinos"
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
