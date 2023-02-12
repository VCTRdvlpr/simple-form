import React, { useState } from 'react';

function BasicForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
  };

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');  

  return (       
    <div>       
    <form onSubmit={handleSubmit}>      
      <div className='title-align'>
        <h1>Cadastro</h1>
      </div>
      <div className='input-align'>
        <label>Nome</label>
        <input type="text" name="name" onChange={handleChange} />
      </div>
      <div className='input-align'>
        <label>Email</label>
        <input type="text" name="email" onChange={handleChange} />
      </div>   
      <div className='input-align'>
        <label>Gênero</label>
        <select name="gender" onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="homem">Homem</option>
          <option value="mulher">Mulher</option>
          <option value="outro">Outro</option>
        </select>
      </div>
      <div className='input-align'>
        <label>Senha</label>
        <input type={showPassword ? 'text' : 'password'} value={password} name="password" onChange={(event) => {
          handleChange(event);
          setPassword(event.target.value)(event);
        }} />                     
      </div>     
      <div className='input-align'> 
        <input className='check-box' type="checkbox" id="show-password" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
        <label htmlFor="show-password">Mostrar senha</label>
      </div> 
      <div className='btn-align'>
        <button className='btn-style' type="submit">Enviar</button>
      </div>      
    </form>
    </div>
  );
}

export default BasicForm;
