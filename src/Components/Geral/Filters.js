import React from 'react';
import '../../Styles/Filters.css';
import {Button, Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import HookFilters from './HookFilters';

const Filters = (props) => {

    const atualizaPesquisa = (e) => {
        props.change(e)
    }

    return(
        <div className='container m-0'>
            <div className='row'>
                <input type="text" placeholder="Pesquisa por nome" className='barraPesquisa col-3' value={props.valorMuda} onChange={atualizaPesquisa}/>
                {props.tipo == "Histórico" ?
                <>
                </>
                :
                <Button as={Link} 
                    to={props.tipo === "Notificações" || props.tipo === "Rotina" || props.tipo === "Evento"  ? "/notifications/create" 
                    : props.tipo === "Grupo" ? "/groups/create" 
                    : props.tipo === "Utilizador" ? "/users/create" 
                    : props.tipo === "Casa" ? "/houses/create" 
                    : "/templates/create"} className='col-2 offset-2' variant="flat">Criar {props.tipo}</Button>
                }
            </div>
            {/*props.tipo == "Histórico" ?
            <div className='row d-flex flex-row segundaLinhaFiltro'>
                <span className='FiltrarPor col-1 p-0'>Filtrar por:</span>
                <input type="date" className='col-2 FiltroInput divMargem m-0 ps-2 pe-0'/>
            </div>
            : props.tipo == "Utilizador" ?
            <div className='row d-flex flex-row segundaLinhaFiltro'>
                <span className='FiltrarPor col-1 p-0'>Filtrar por:</span>
                
                <input type="number" min="0" placeholder="Idade" className='col-2 FiltroInput divMargem m-0 ps-2 pe-0'/>

                <HookFilters/>
            </div>
            :
            <></>
            */}
        </div>
    )

}

export default Filters;