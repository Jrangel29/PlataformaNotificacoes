import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loading from '../../Pages/Loading';
import { getEventsList } from '../../Store/Eventos/Actions';

const EventCards = (props) => {

    const dispatch = useDispatch();

    const eventsList = useSelector(({ eventos }) => eventos.data)
    const isLoadingEvents = useSelector(({ eventos }) => eventos.isLoading)

    useEffect(() => {
        dispatch(getEventsList())
    }, [])

    if (isLoadingEvents) {
        return (
            <Loading />
        )
    }

    return(            
        <div className='container m-0 p-0'>
            <div className='row cartasMainBody'>
                {eventsList.map((item, index) => {
                    //console.log(item)
                    if(props.pesquisa === ''){
                        return(
                            <Accordion defaultActiveKey="0" key={index} className='col-3 pb-3'>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header className='m-0'>
                                        <span>
                                            <p className='tituloUserCartaSmall mb-2'>
                                                {item.nome}
                                            </p>
                                            <p className='textoSmall mb-0'>
                                                {item.tipologia}
                                            </p>
                                            <p className='textoSmall mb-0'>
                                                Regularidade
                                            </p>
                                        </span>
                                    </Accordion.Header>
                                    <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                        <Button as={Link} to={`/events/${item.id_eventos}`} className='textoBtnUser col-9 mx-2' variant='flat'>Mais informação</Button>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    } else {
                        let pesquisado = props.pesquisa.toLowerCase();
                        let nomes = item.nome.toLowerCase();
                        if(item.nome.startsWith(props.pesquisa) || nomes.startsWith(pesquisado)){
                            return(
                                <Accordion defaultActiveKey="0" key={index} className='col-3 pb-3'>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header className='m-0'>
                                            <span>
                                                <p className='tituloUserCartaSmall mb-2'>
                                                    {item.nome}
                                                </p>
                                                <p className='textoSmall mb-0'>
                                                    {item.tipologia}
                                                </p>
                                                <p className='textoSmall mb-0'>
                                                    Regularidade
                                                </p>
                                            </span>
                                        </Accordion.Header>
                                        <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                            <Button as={Link} to={`/events/${item.id_eventos}`} className='textoBtnUser col-9 mx-2' variant='flat'>Mais informação</Button>
                                        </Accordion.Body>
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

export default EventCards;