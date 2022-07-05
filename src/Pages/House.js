import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import UserHouseDetailCards from '../Components/Cards/UserHouseDetailCards';
import { getHousePeopleList } from '../Store/Casas/Actions';
import HouseNotifications from '../Components/Cards/HouseNotifications';
import Loading from '../Pages/Loading';
import { Button } from 'react-bootstrap';
import '../Styles/User.css';

function House(props) {

    const dispatch = useDispatch();
    const {id} = useParams();

    const [seccao, setSeccao] = useState('Por Enviar')
    
    const casaInfo = useSelector(({ casas }) => casas.singleCasa)
    const isLoadingCasaInfo = useSelector(({ casas }) => casas.isLoadingPeople)

    useEffect(() => {
        dispatch(getHousePeopleList(id))
    }, [])

    if (isLoadingCasaInfo) {
        return (
            <Loading />
        )
    }

    //console.log(casaInfo)
    
    return(
        <div>
            <div className='mainBodyForm container px-0'>
                <Navbar/>
                <Header nome="Casas" detalhe="sim" apagaMuda="sim" id={id}/>
                <div>
                    <div className='prevSeccao ms-0'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Informação geral</h1>
                    </div>
                    <div className='mx-3' style={{padding: "10px 40px"}}>
                        <p className='textoSeccaoPagina'><b>Nome:</b> {casaInfo.nome}</p>
                        <p className='textoSeccaoPagina'><b>Localidade:</b> {casaInfo.localidade}</p>
                        <p className='textoSeccaoPagina'><b>ID da box:</b> {casaInfo.id_box}</p>
                    </div>
                    <div className='prevSeccao ms-0 mb-3'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Membros da casa</h1>
                    </div>
                    <div className='mt-1 mx-3' style={{padding: "0 40px"}}>
                        <UserHouseDetailCards users={casaInfo.utilizadores} tipo={'casa'}/>
                    </div>
                </div>
                <div className='p-0 m-0 mt-3'>
                    <div className='prevSeccao ms-0'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Notificações</h1>
                    </div>
                    <div className='mt-1 mx-3' style={{padding: "0 40px"}}>
                        <div className='row offset-1 mt-4 col-10 justify-content-center'>
                            <Button onClick={() => setSeccao("Por Enviar")} className='seccaoBtn col-3 mx-2' variant={seccao == "Por Enviar" ? 'flat' : 'custom'}>Por Enviar</Button>
                            <Button onClick={() => setSeccao("Enviadas")} className='seccaoBtn col-3 mx-2' variant={seccao == "Enviadas" ? 'flat' : 'custom'}>Enviadas</Button>
                        </div>
                        <HouseNotifications seccao={seccao} info={casaInfo.notificacoes}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default House;