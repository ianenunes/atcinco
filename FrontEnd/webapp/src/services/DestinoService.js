import axios from "axios";

const DESTINO_API_URL = 'http://localhost:8080/destinos';

class DestinoService {
getAllDestino(){
    return axios.get(DESTINO_API_URL);
}

createDestino (Destino){
    return axios.post(DESTINO_API_URL, Destino);
}

getDestinoById (Id_Destino){
    return axios.get(DESTINO_API_URL + '/' + Id_Destino);
}

updateDestino(Id_Destino, Destino){
    return axios.put(DESTINO_API_URL + '/' + Id_Destino, Destino);
}

deleteDestino(Id_Destino){
    return axios.delete(DESTINO_API_URL + '/' + Id_Destino);
}

}

export default new DestinoService();