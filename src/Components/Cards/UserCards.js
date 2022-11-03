import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersList } from '../../Store/Users/Actions';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Loading from '../../Pages/Loading';
import Pagination from '../Geral/Pagination';

const UserCards = (props) => {

    const dispatch = useDispatch();

    const usersList = useSelector(({ utilizadores }) => utilizadores.data)
    const isLoadingUsers = useSelector(({ utilizadores }) => utilizadores.isLoading)

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const [currentItems, setCurrentItems] = useState({todos: [], current: []});

    useEffect(() => {
        dispatch(getUsersList())
    }, [])

    useEffect(() => {
        let array = [];
        if(!isLoadingUsers){
            usersList.sort((a, b) => a.utilizador.localeCompare(b.utilizador))
            usersList.map((item) => {
                if(props.pesquisa === ''){
                    array.push(item);
                } else {
                    let pesquisado = props.pesquisa.toLowerCase();
                    let nomes = item.utilizador.toLowerCase();
                    if(item.utilizador.startsWith(props.pesquisa) || nomes.startsWith(pesquisado)){
                        array.push(item)
                    }
                }
            })
            setCurrentItems({todos: array, current: array.slice(indexOfFirstPost, indexOfLastPost)});
        }
    }, [currentPage, isLoadingUsers, props.pesquisa])

    useEffect(() => {
        setCurrentPage(1)
    }, [props.pesquisa])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    if (isLoadingUsers) {
        return (
            <Loading />
        )
    }

    return(            
        <div className='container m-0 p-0'>
            <div className={props.pagina === "criaGrupo" ? 'row cartasForm' : 'row cartasMainBody'}>
                {currentItems.current.map((item, index) => {
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
                })}
                {currentItems.todos.length > 15 ? 
                    <Pagination itemsPerPage={itemsPerPage} totalItems={currentItems.todos.length} paginate={paginate} currentPage={currentPage}/>
                :
                <></>
                }
            </div>
        </div>    
    ) 
}

export default UserCards;