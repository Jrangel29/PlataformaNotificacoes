import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersList } from '../../Store/Users/Actions';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loading from '../../Pages/Loading';

const UserCards = (props) => {

    const dispatch = useDispatch();

    const usersList = useSelector(({ utilizadores }) => utilizadores.data)
    const isLoadingUsers = useSelector(({ utilizadores }) => utilizadores.isLoading)

    useEffect(() => {
        dispatch(getUsersList())
    }, [])

    if (isLoadingUsers) {
        return (
            <Loading />
        )
    }

    return(            
        <div className='container m-0 p-0'>
            <div className={props.pagina === "criaGrupo" ? 'row cartasForm' : 'row cartasMainBody'}>
                {usersList.map((item, index) => {
                    if(props.pesquisa === ''){
                        return(
                            <Accordion key={index} defaultActiveKey="0" className={props.pagina === "criaGrupo" ? 'col-6 pb-1' : 'col-3 pb-3'}>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className='m-0'>
                                        <span>
                                            <p className='tituloUserCartaSmall mb-2'>
                                                {item.utilizador}
                                            </p>
                                            <p className='textoSmall mb-0'>
                                                {item.idade} anos
                                            </p>
                                            <p className='textoSmall mb-0'>
                                                {item.casa}
                                            </p>
                                        </span>
                                    </Accordion.Header>
                                    {props.pagina === "criaGrupo" ?
                                    <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                        <Button className='textoBtnUser col-7 mx-2' variant='flat'>Eliminar</Button>
                                    </Accordion.Body>
                                    :
                                    <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                        <Button as={Link} to={`/users/${item.id_utilizador}`} className='textoBtnUser col-9 mx-2' variant='flat'>Mais informação</Button>
                                    </Accordion.Body>
                                    }
                                </Accordion.Item>
                            </Accordion>
                        )
                    } else {
                        let pesquisado = props.pesquisa.toLowerCase();
                        let nomes = item.utilizador.toLowerCase();
                        if(item.utilizador.startsWith(props.pesquisa) || nomes.startsWith(pesquisado)){
                            return(
                                <Accordion key={index} defaultActiveKey="0" className={props.pagina === "criaGrupo" ? 'col-6 pb-1' : 'col-3 pb-3'}>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className='m-0'>
                                            <span>
                                                <p className='tituloUserCartaSmall mb-2'>
                                                    {item.utilizador}
                                                </p>
                                                <p className='textoSmall mb-0'>
                                                    {item.idade} anos
                                                </p>
                                                <p className='textoSmall mb-0'>
                                                    {item.casa}
                                                </p>
                                            </span>
                                        </Accordion.Header>
                                        {props.pagina === "criaGrupo" ?
                                        <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                            <Button className='textoBtnUser col-7 mx-2' variant='flat'>Eliminar</Button>
                                        </Accordion.Body>
                                        :
                                        <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                            <Button as={Link} to={`/users/${item.id_utilizador}`} className='textoBtnUser col-9 mx-2' variant='flat'>Mais informação</Button>
                                        </Accordion.Body>
                                        }
                                    </Accordion.Item>
                                </Accordion>
                            )
                        }
                    }
                })}
            </div>
        </div>    
    ) 
}

export default UserCards;