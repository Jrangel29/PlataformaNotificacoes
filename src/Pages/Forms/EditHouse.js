import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaDistritosConcelhosEdit } from '../../Components/Forms/Hooks';
import { getHousePeopleList } from '../../Store/Casas/Actions';
import Loading from '../../Pages/Loading';

const EditHouse = () => {

    const dispatch = useDispatch();
    const {id} = useParams();
    
    const casaInfo = useSelector(({ casas }) => casas.singleCasa)
    const isLoadingCasaInfo = useSelector(({ casas }) => casas.isLoadingPeople)

    const [mostraModal, setMostraModal] = useState(false);
    const [info, setInfo] = useState({
        infoUser: {
            nomeCasa: "",
            idBox: "",
            distrito: "",
            concelho: "",
            idHouse: id
        }
    })

    useEffect(() => {
        dispatch(getHousePeopleList(id))
    }, [])

    useEffect(() => {
        if(!isLoadingCasaInfo){
            setInfo({
                infoUser: {
                    nomeCasa: casaInfo.nome,
                    distrito: casaInfo.parent_id,
                    idBox: casaInfo.id_box,
                    concelho: casaInfo.id_localidade,
                    idHouse: id
                }
            })
        }
    }, [isLoadingCasaInfo])
    
    const onOpen = () => setMostraModal(true);
    const onClose = () => setMostraModal(false);

    const atualizaInfo = (e) => {
        setInfo({
            infoUser: {
                ...info.infoUser,
                [e.currentTarget.id]: e.currentTarget.value
            }
        })
    }

    const atualizaDistrito = (e) => {
        setInfo({
            infoUser: {
                ...info.infoUser,
                distrito: e,
                concelho: ''
            }
        })
    }

    const atualizaConcelho = (e) => {
        setInfo({
            infoUser: {
                ...info.infoUser,
                concelho: e
            }
        })
    }

    if (isLoadingCasaInfo) {
        return (
            <Loading />
        )
    }

    return(
        <div>
            <div className='mainBodyForm container px-0'>
                {/*console.log(info.infoUser)*/}
                <Navbar/>
                <Header nome="Editar Casa" detalhe="sim" apagaMuda="nao"/>
                <div className='row m-0 p-0'>
                    <div className='prevSeccao ms-0'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Informação Geral</h1>
                    </div>
                    <span className='col-12 mx-3 mt-2' style={{padding: "0 40px"}}>
                        <p className='subtituloSeccaoPagina'>Nome da Casa <span className='obrigatorio'>*</span></p>
                        <input type="text" className='inputsForms w-100' value={info.infoUser.nomeCasa} id='nomeCasa' onChange={atualizaInfo}/>
                    </span>
                    <div className='row col-12 mx-3' style={{padding: "0 40px"}}>
                        <span className='col-4 p-0 mt-3'>
                            <p className='subtituloSeccaoPagina'>ID da box <span className='obrigatorio'>*</span></p>
                            <input type="text" value={info.infoUser.idBox} id='idBox' onChange={atualizaInfo} className='inputsForms w-100'/>
                        </span>
                    </div>

                    <div className='row col-12 mx-3' style={{padding: "0 40px"}}>
                        <BuscaDistritosConcelhosEdit valor={info.infoUser.distrito} atualiza={atualizaDistrito} valorConcelho={info.infoUser.concelho} atualizaConcelho={atualizaConcelho}/>
                    </div>

                    <span className='row m-0 mt-2 justify-content-end' style={{padding: "0 40px"}}>
                        <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                    </span>
                    <div style={{padding: "0 40px"}}>
                        <SubmitButton params={info} openModal={onOpen} tipoForm="CasaEdit"/>
                    </div>
                </div>
            </div>
            <SuccessModal show={mostraModal} onHide={onClose} tiponotif="CriarCasa"/>
        </div>
    )
}

export default EditHouse;