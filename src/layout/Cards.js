import { Link } from 'react-router-dom'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import './Cards.css'

function Cards({ persons }) {
  const urlBase = 'http://localhost:3001/images/'
  return (
    <div className='row'>
      {persons.map((person) => (
        <div className='col-sm-6' key={person.id}>
          <div className='card m-2'>
            <img
              src={urlBase + person.foto}
              className='card-img-top'
              alt='foto'
            />
            <div className='card-body'>
              <h5 className='card-title'>{person.nome}</h5>
              <p className='card-text address'>
                <i className='bi bi-geo-alt'></i> {person.endereco}
              </p>
              <p className='card-text'>
                <i className='bi bi-phone'></i>{' '}
                <a href={`tel:${person.numero}`}>{person.numero}</a>
              </p>
              <p className='card-text'>
                <i className='bi bi-envelope'></i>{' '}
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </p>
              <p className='card-text'>
                <i className='bi bi-calendar'></i>{' '}
                {format(new Date(person.data_nascimento), 'dd/MM/yyyy', {
                  locale: ptBR,
                })}
              </p>
            </div>
            <div className='card-footer text-muted'>
              <Link to={`/${person.id}`} className='btn btn-success'>
                <i className='bi bi-pencil'></i> Editar
              </Link>
              <button className='btn btn-danger mx-2'>
                <i className='bi bi-trash3'></i> Excluir
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
