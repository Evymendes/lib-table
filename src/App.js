
import React, {Component} from 'react';
import styled from 'styled-components'
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table';

function App() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const ContainerTable = styled.div`
    margin: 0 5% 2%;
    max-height: 66vh;
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    bottom: 0;

    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #fff;
    }
    ::-webkit-scrollbar-thumb {
      background: #FFCFCD;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #f9bdbb;
    }
  `;

  const Table = styled.table`
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
   `;

   const Thead = styled.thead`
     @media(max-width: 768px) {
      display: none;
    }
   `;

  const Th = styled.th`
    min-width: ${props => props.width};
    padding: 1rem 0 1rem 0.875rem ;
    text-align: left;
    background-color: #85144B;
    color: white;
    font-weight: bold;
    font-size: 0.875rem;
  `;

  const Tr = styled.tr`
    border-radius: 3px;
    word-wrap:break-word;

    &:nth-child(even) {
      background-color: #FFCFCD;
    };
    &:nth-child(odd) {
      background-color: #FFFFFF;
    }
  	&:hover {
      background-color: #CCC;
      border: 0.5px solid #85144B;
    };

    @media(max-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
  `;

  const Td = styled.td`
    word-wrap:break-word;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.875rem;
    border: none;
    width: 200px;
    word-wrap: break-word;
    font-size: 0.813rem;


    @media(max-width: 768px) {
      width: 20%;
    }
  `;
   
  const data = React.useMemo(
    () => [
      {
        col1: 'Vai na Web',
        col2: '123.456.789-54',
        col3: 'Evelyn Mendes Ribeiro',
        col4: 'email.email@gmail.com',
        col5: '(21) 1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',

      },
      {
        col1: 'Precuisa ser',
        col2: '987.654.321-89',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '(21) 1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      },
      {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '(21) 1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      },
      {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      },
      {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      },
      {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      },
      {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      }, {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      }, {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      }, {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      }, {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      }, {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      }, {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      }, {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      }, {
        col1: '1sti',
        col2: '852.963.741-87',
        col3: 'Fulano da Silva',
        col4: 'email.email@gmail.com',
        col5: '1234-5678',
        col6: '12/12/2012',
        col7: '12/12/2012',
        col8: '12/12/2013',
        col9: 'Pago',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Organização',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'CPF',
        accessor: 'col2',
      },
      {
        Header: 'Usuário',
        accessor: 'col3',
      },
      {
        Header: 'Email',
        accessor: 'col4',
      },
      {
        Header: 'Telefone',
        accessor: 'col5',
      },
      {
        Header: 'Criado em',
        accessor: 'col6',
      },
      {
        Header: 'Autorização',
        accessor: 'col7',
      },
      {
        Header: 'Vencimento',
        accessor: 'col8',
      },
      {
        Header: 'Status',
        accessor: 'col9',
      },
    ],
    []
  )

  const renderTable = () => {
    return (
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <Th
                  {...column.getHeaderProps()}
                  width={column.Header === 'Email' && '12%' ||
                  column.Header === 'Status' && '7%' || 
                  column.Header === 'Organização' && '12%' ||
                  column.Header === 'Usuário' && '12%' ||
                  column.Header === 'Telefone' && '11%' ||
                  column.Header === 'Criado Em' && '11%' ||
                  column.Header === 'Autorização' && '12%'
                }
                >
                  {column.render('Header')}
                </Th>
              ))}
            </tr>
          ))}
        </Thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <Td
                      {...cell.getCellProps()}
                    >
                      {cell.render('Cell')}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </tbody>
      </Table>
    )
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <div>
      <Title>Table Responsive</Title>
      <ContainerTable>
        {renderTable()}
      </ContainerTable>
    </div>
  )
}

export default App;
