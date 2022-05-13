import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHousesList } from '../../Store/Casas/Actions';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';
import {Accordion, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LoadingComponent from '../../Components/Geral/LoadingComponent';

const HouseCards = () => {
    const dispatch = useDispatch();

    const casasList = useSelector(({ casas }) => casas.data)
    const isLoadingCasas = useSelector(({ casas }) => casas.isLoading)

    useEffect(() => {
        dispatch(getHousesList())
    }, [])

    if (isLoadingCasas) {
        return (
            <LoadingComponent />
        )
    }

    return(            
        <div className='container m-0 p-0'>
            <div className='row cartasMainBody'>
                {casasList.map((item, index) => {
                    return(
                    <Accordion defaultActiveKey="0" className='col-4 pb-3'>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className='m-0'>
                                <span>
                                    <p className='tituloGrupoCarta mb-2'>
                                        {item.nome}
                                    </p>
                                    <p className='mb-0'>
                                        {item.localidade}
                                    </p>
                                    <p className='mb-0 textHouseCards'>
                                        José Lima, Maria Lima
                                    </p>
                                    <p className='mb-0 textHouseCards'>
                                        <span className={item.ativa.data[0] === 0 ? 'redDot' : 'greenDot'}></span>
                                        {item.ativa.data[0] === 0 ? ' Desligada' : ' Ligada'}
                                    </p>
                                </span>
                            </Accordion.Header>
                            <Accordion.Body className='footerUser row mx-0 justify-content-center'>
                                <Button as={Link} to="/houses/house" className='textoBtnUser col-5 mx-2' variant='flat'>Ver mais informação</Button>
                                <Button as={Link} to="/notifications/create" className='textoBtnUser col-5 mx-2' variant='flat'>Enviar notificação</Button>
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