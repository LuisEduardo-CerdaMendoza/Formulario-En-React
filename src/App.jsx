import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    nameMascota: '',
    contact: '',
    illness: '',
    image: null,
  });

  const [petList, setPetList] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPetList([...petList, formData]);
    setFormData({
      name: '',
      nameMascota: '',
      contact: '',
      illness: '',
      image: null,
    });
  };

  return (
    <div className="container">
      <h1>REGISTRO DE ANIMALES</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h6>Nombre de la Mascota</h6>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Nombre de la mascota"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h6>Nombre del dueño De la Mascota</h6>
          <input
            type="text"
            name="nameMascota"
            className="form-control"
            placeholder="Dueño de la Mascota"
            value={formData.nameMascota}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h6>Contacto De la Mascota</h6>
          <input
            type="text"
            name="contact"
            className="form-control"
            placeholder="Contacto"
            value={formData.contact}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h6>Padecimiento de la Mascota</h6>
          <input
            type="text"
            name="illness"
            className="form-control"
            placeholder="Padecimiento"
            value={formData.illness}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <h6>Imagen de la Mascota</h6>
          <center>
            <input
              type="file"
              name="image"
              className="form-control-file"
              onChange={handleImageChange}
            />
          </center>
        </div>
        <br/>
        <button type="submit" className="btn btn-outline-success ">Enviar</button>
      </form>
      <div>
      <br/>
      <br/>
        <h2>Lista de Mascotas</h2>
        {petList.map((pet, index) => (
          <div key={index} className="card my-3">
            <div className="card-body">
              <div className="row">
                <div className="col-md-4">
                  {pet.image && (
                    <img src={URL.createObjectURL(pet.image)} alt="Mascota" className="img-fluid card-img" />
                  )}
                </div>
                <div className="col-md-8">
                  <h5 className="card-title">Nombre: {pet.name}</h5>
                  <h5 className="card-title">Nombre del dueño: {pet.nameMascota}</h5>
                  <p className="card-text">Contacto: {pet.contact}</p>
                  <p className="card-text">Padecimiento: {pet.illness}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
