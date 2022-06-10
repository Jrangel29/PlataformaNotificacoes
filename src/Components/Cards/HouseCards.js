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

const HouseCards = () => {
    const dispatch = useDispatch();

    const casasList = useSelector(({ casas }) => casas.data)
    const isLoadingCasas = useSelector(({ casas }) => casas.isLoading)

    const [array, setArray] = useState([]);
    let contagem = 0;

    useEffect(() => {
        dispatch(getHousesList())
    }, [])

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

    if (isLoadingCasas) {
        return (
            <Loading />
        )
    }

    return(            
        <div className='container m-0 p-0'>
            <div className='row cartasMainBody'>
                {casasList.map((item, index) => {
                    return(
                    <Accordion defaultActiveKey="0" className='col-3 pb-3'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloGrupoCarta mb-2'>
                                        {item.nome}
                                    </p>
                                    <p className='mb-1' style={{fontSize: '14px'}}>
                                        {item.localidade}
                                    </p>
                                    <PeopleHouseCards idCasa={item.id_casa} funcao={showUsers} users={array}/>
                                    <p className='mb-0 textHouseCards'>
                                        <span className={item.ativa.data[0] === 0 ? 'redDot' : 'greenDot'}></span>
                                        {item.ativa.data[0] === 0 ? ' Box Desligada' : ' Box Ligada'}
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
            </div>
        </div>    
    )
}

export default HouseCards;