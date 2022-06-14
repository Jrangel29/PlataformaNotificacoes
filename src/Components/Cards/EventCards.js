import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loading from '../../Pages/Loading';
import { getEventsList } from '../../Store/Eventos/Actions';
import Pagination from '../Geral/Pagination';

const EventCards = (props) => {

    const dispatch = useDispatch();

    const eventsList = useSelector(({ eventos }) => eventos.data)
    const isLoadingEvents = useSelector(({ eventos }) => eventos.isLoading)

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const [currentItems, setCurrentItems] = useState({todos: [], current: []});

    useEffect(() => {
        dispatch(getEventsList())
    }, [])

    useEffect(() => {
        let array = [];
        if(!isLoadingEvents){
            eventsList.map((item) => {
                if(props.pesquisa === ''){
                    array.push(item);
                } else {
                    let pesquisado = props.pesquisa.toLowerCase();
                    let nomes = item.nome.toLowerCase();
                    if(item.nome.startsWith(props.pesquisa) || nomes.startsWith(pesquisado)){
                        array.push(item)
                    }
                }
            })
            setCurrentItems({todos: array, current: array.slice(indexOfFirstPost, indexOfLastPost)});
        }
    }, [currentPage, isLoadingEvents, props.pesquisa])

    useEffect(() => {
        setCurrentPage(1)
    }, [props.pesquisa])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    if (isLoadingEvents) {
        return (
            <Loading />
        )
    }

    return(            
        <div className='container m-0 p-0'>
            <div className='row cartasMainBody'>
                {currentItems.current.map((item, index) => {
                    //console.log(item)
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
                })}
                {currentItems.todos.length > 12 ? 
                    <Pagination itemsPerPage={itemsPerPage} totalItems={currentItems.todos.length} paginate={paginate}/>
                :
                <></>
                }
            </div>
        </div>    
    ) 
}

export default EventCards;