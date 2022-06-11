import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import { getEventSingle } from '../Store/Eventos/Actions';
import EventNotifications from '../Components/Cards/EventNotifications';
import Loading from '../Pages/Loading';
import { Button } from 'react-bootstrap';
import UserDetailCards from '../Components/Cards/UserDetailCards';
import '../Styles/User.css';

function Event(props) {

    const dispatch = useDispatch();
    const {id} = useParams();
    
    const event = useSelector(({ eventos }) => eventos.singleEvent)
    const isLoadingEvent = useSelector(({ eventos }) => eventos.isLoadingEvent)

    const [seccao, setSeccao] = useState('Por enviar');

    useEffect(() => {
        dispatch(getEventSingle(id))
        setSeccao('Por Enviar')
    }, [])

    if (isLoadingEvent) {
        return (
            <Loading />
        )
    }

    return(
        <div>
            <div className='mainBodyForm container px-0'>
                <Navbar/>
                <Header nome="Eventos" detalhe="sim" apagaMuda="sim" id={id}/>
                <div>
                    <div className='prevSeccao ms-0'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Informação geral</h1>
                    </div>
                    <div className='mx-3' style={{padding: "10px 40px"}}>
                        <p className='textoSeccaoPagina'><b>Nome:</b> {event.nome}</p>
                        <p className='textoSeccaoPagina'><b>Tipologia do evento:</b> {event.tipologia}</p>
                        <p className='textoSeccaoPagina'><b>Regularidade:</b> {event.regularidade}</p>
                    </div>
                </div>
                <div className='p-0 m-0 mt-3'>
                    <div className='prevSeccao ms-0'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Destinatários</h1>
                    </div>
                    <div className='mx-3' style={{padding: "10px 40px"}}>
                        <UserDetailCards users={event.users}/>
                    </div>
                </div>
                <div className='p-0 m-0 mt-3'>
                    <div className='prevSeccao ms-0'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Notificações</h1>
                    </div>
                    <div className='mx-3' style={{padding: "10px 40px"}}>
                        <div className='row offset-1 mt-4 col-10 justify-content-center'>
                            <Button onClick={() => setSeccao('Por Enviar')} className='seccaoBtn col-3 mx-2' variant={seccao == "Por Enviar" ? 'flat' : 'custom'}>Por Enviar</Button>
                            <Button onClick={() => setSeccao('Enviadas')} className='seccaoBtn col-3 mx-2' variant={seccao == "Enviadas" ? 'flat' : 'custom'}>Enviadas</Button>
                        </div>
                        <EventNotifications notificacoes={event.notificacoes} seccao={seccao}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event;