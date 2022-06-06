import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../Components/Geral/Navbar';
import Header from '../Components/Geral/Header';
import GroupDetailCards from '../Components/Cards/GroupDetailCards';
import { getHousePeopleList } from '../Store/Casas/Actions';
import Loading from '../Pages/Loading';
import '../Styles/User.css';

function House(props) {

    const dispatch = useDispatch();
    const {id} = useParams();
    
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
                        <GroupDetailCards users={casaInfo.utilizadores}/>
                    </div>
                </div>
                <div className='p-0 m-0 mt-3'>
                    <div className='prevSeccao ms-0'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Notificações</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default House;