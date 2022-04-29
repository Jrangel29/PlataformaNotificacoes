import React from 'react';
import '../../Styles/Filters.css';
import {Button, Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Filters extends React.Component {

    render(){
        return(
            <div className='container m-0'>
                <div className='row'>
                    <input type="text" placeholder="Pesquisa" className='barraPesquisa col-3'/>
                    {this.props.tipo == "Histórico" ?
                    <>
                    </>
                    :
                    <Button as={Link} 
                        to={this.props.tipo === "Notificação" || this.props.tipo === "Rotina" ? "/notifications/create" 
                        : this.props.tipo === "Grupo" ? "/groups/create" 
                        : this.props.tipo === "Utilizador" ? "/users/create" 
                        : "/templates/create"} className='col-2 offset-2' variant="flat">Criar {this.props.tipo}</Button>
                    }
                </div>
                {this.props.tipo == "Histórico" ?
                <div className='row d-flex flex-row segundaLinhaFiltro'>
                    <span className='FiltrarPor col-1 p-0'>Filtrar por:</span>
                    
                    <Dropdown className='col-2 divMargem m-0 ps-2 pe-0'>
                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                            Idade
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='dropdownFiltro'>
                            <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">20</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                : this.props.tipo == "Utilizador" ?
                <div className='row d-flex flex-row segundaLinhaFiltro'>
                    <span className='FiltrarPor col-1 p-0'>Filtrar por:</span>
                    
                    <Dropdown className='col-2 divMargem m-0 ps-2 pe-0'>
                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                            Idade
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='dropdownFiltro'>
                            <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">20</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className='col-2 divMargem m-0 ps-2 pe-0'>
                        <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                            Localização
                        </Dropdown.Toggle>

                        <Dropdown.Menu className='dropdownFiltro'>
                            <Dropdown.Item href="#/action-1">10</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">20</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                :
                <></>
                }
            </div>
        )
    } 
}

export default Filters;