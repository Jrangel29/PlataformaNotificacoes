import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHousesList, getHousePeopleList } from '../../Store/Casas/Actions';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LoadingComponent from '../../Components/Geral/LoadingComponent';
import Loading from '../../Pages/Loading';
import PeopleHouseCards from './PeopleHouseCards';
import Pagination from '../Geral/Pagination';

const HouseCards = (props) => {
    const dispatch = useDispatch();
    let contagem = 0;

    const casasList = useSelector(({ casas }) => casas.data)
    const isLoadingCasas = useSelector(({ casas }) => casas.isLoading)

    const [array, setArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(16);
    const indexOfLastPost = currentPage * itemsPerPage;
    const indexOfFirstPost = indexOfLastPost - itemsPerPage;
    const [currentItems, setCurrentItems] = useState({todos: [], current: []});

    useEffect(() => {
        dispatch(getHousesList())
    }, [])

    useEffect(() => {
        let array2 = [];
        if(!isLoadingCasas){
            casasList.sort((a, b) => a.nome.localeCompare(b.nome))
            casasList.map((item) => {
                if(props.pesquisa === ''){
                    array2.push(item);
                } else {
                    let pesquisado = props.pesquisa.toLowerCase();
                    let nomes = item.nome.toLowerCase();
                    if(item.nome.startsWith(props.pesquisa) || nomes.startsWith(pesquisado)){
                        array2.push(item)
                    }
                }
            })
            setCurrentItems({todos: array2, current: array2.slice(indexOfFirstPost, indexOfLastPost)});
        }
    }, [currentPage, isLoadingCasas, props.pesquisa])

    useEffect(() => {
        setCurrentPage(1)
    }, [props.pesquisa])

    const showUsers = (info) => {
        contagem = 0;
        array.map(item => {
            if(info.id_casa === item.id_casa){
                contagem++
            }
        })
        if(contagem === 0){
            setArray([...array, info])
        }
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    if (isLoadingCasas) {
        return (
            <Loading />
        )
    }

    return(            
        <div className='container m-0 p-0'>
            <div className='row cartasMainBody'>
                {currentItems.current.map((item, index) => {
                    return(
                    <Accordion key={index} defaultActiveKey="0" className='col-3 pb-3'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloGrupoCarta mb-2'>
                                        {item.nome}
                                    </p>
                                    <PeopleHouseCards idCasa={item.id_casa} funcao={showUsers} users={array}/>
                                    <p className='mb-2' style={{fontSize: '14px'}}>
                                        {item.localidade}
                                    </p>
                                    <p className='mb-1 textHouseCards'>
                                        <span className={item.ativa.data[0] === 0 ? 'redDot' : 'greenDot'}></span>
                                        {item.ativa.data[0] === 0 ? ' Box Desligada' : ' Box Ligada'}
                                    </p>
                                    <p className='mb-0 textHouseCards'>
                                        {item.casa_recebe.data[0] === 0 ? 'Não Recebe Notificações' : 'Recebe Notificações'}
                                    </p>
                                </span>
                            </Accordion.Header>
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to={`/houses/${item.id_casa}`} className='textoBtnUser col-10 mx-2' variant='flat'>Mais informação</Button>
                            </Accordion.Body>
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

export default HouseCards;