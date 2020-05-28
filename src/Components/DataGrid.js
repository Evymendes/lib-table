import React from 'react';
import DataGrid from 'react-data-grid';
import 'react-data-grid/dist/react-data-grid.css';

const columns = [
  { key: "organization", name: "Organização"},
  { key: "cpf", name: "CPF"},
  { key: "user", name: "Usuário"},
  { key: "email", name: "Email"},
  { key: 'telephone', name: 'Telefone' },
  { key: 'createdIn', name: 'Criado em' },
  { key: 'authorization', name: 'Autorização' },
  { key: 'expiration', name: 'Vencimento' },
  { key: 'status', name: 'Status' },
];

const rows = [
  { organization: 'Vai na Web', cpf: "456.789.789-12", user: 'Aline',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Pago' },
  { organization: 'Precisa ser', cpf: "456.789.789-12", user: 'Desire',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Autorizado' },
  { organization: '1sti', cpf: "456.789.789-12", user: 'Igor',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Pago' },
  {
    organization: 'whadawhada', cpf: "456.789.789-12", user: 'Alguem', email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
    authorization: 'true', expiration: '22/12/2020', status: 'Pago'
  },
  { organization: 'Vai na Web', cpf: "456.789.789-12", user: 'Aline',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Pago' },
  { organization: 'Precisa ser', cpf: "456.789.789-12", user: 'Desire',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Autorizado' },
  { organization: '1sti', cpf: "456.789.789-12", user: 'Igor',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Pago' },
  {
    organization: 'whadawhada', cpf: "456.789.789-12", user: 'Alguem', email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
    authorization: 'true', expiration: '22/12/2020', status: 'Pago'
  },
  { organization: 'Vai na Web', cpf: "456.789.789-12", user: 'Aline',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Pago' },
  { organization: 'Precisa ser', cpf: "456.789.789-12", user: 'Desire',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Autorizado' },
  { organization: '1sti', cpf: "456.789.789-12", user: 'Igor',  email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
authorization: 'true', expiration: '22/12/2020', status: 'Pago' },
  {
    organization: 'whadawhada', cpf: "456.789.789-12", user: 'Alguem', email: 'email@gmail.com', telephone: '1234-5678', createdIn: '22/10/2020',
    authorization: 'true', expiration: '22/12/2020', status: 'Pago'
  },
];

function App() {
  return (
    <div style={{margin: '5rem',}}>

    <DataGrid
      columns={columns}
      rows={rows}
      isScrolling={false}
      backgroundColor={'red'}
      />
      </div>
  );
}

export default App;
