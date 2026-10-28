import React, { useState, useEffect } from 'react'
import {toast, ToastContainer} from "react-toastify"
import "../../../node_modules/react-toastify/dist/ReactToastify.css"
import "./cadastroNews.css"

export default function Index() {
  const [formData, setFormData] = useState({
    nome: "",
    email: ""
  });

  const [lista, setLista] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cadastroNews")
      .then((response) => response.json())
      .then((data) => {
        setLista(data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.nome === "" || formData.email === ""){
      toast.error("Preencha todos os campos")
      return false;
    }


    fetch("http://localhost:3000/cadastroNews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => {
        console.log("Usuário cadastrado com sucesso:", data);

        toast.success("Usuário cadastrado com sucesso")
        setLista([...lista, data]);
        setFormData({
          nome: "",
          email: ""
        });
      });
  }


  return (
    <main className='container'>
      <h1>Cadastro News</h1>
      <form onSubmit={handleSubmit}>

        <article className='form-control'>
          <label htmlFor="nome">Nome</label>
          <input type="text" name='nome' value={formData.nome} onChange={handleChange} />
        </article>

        <article className='form-control'>
          <label htmlFor="email">E-mail</label>
          <input type="text" name='email' value={formData.email} onChange={handleChange} />
        </article>

        <button type='submit'>Cadastrar</button>

        <ToastContainer />
      </form>

      <h1>Cadastrados</h1>
      {lista.map((item) => (
        <article className='lista' key={item.id}>
          <p>{item.nome} - {item.email}</p>
        </article>
      ))}
    </main>
  );
}