import React, {useState, useEffect} from 'react';
import Navbar from '../../Components/Geral/Navbar';
import Header from '../../Components/Geral/Header';
import {Button, Dropdown} from 'react-bootstrap';
import { useParams } from 'react-router';
import SuccessModal from '../../Components/Modal/SuccessModal';
import SubmitButton from '../../Components/Geral/SubmitButton';
import { BuscaTipologias, BuscaDistritosConcelhos } from '../../Components/Forms/Hooks';
import { ListaCasasPesquisa, MostraCasaEscolhida } from '../../Components/Forms/ListaPesquisa';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleUser } from '../../Store/Users/Actions';
import Loading from '../../Pages/Loading';

const EditUser = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const [mostraModal, setMostraModal] = useState(false)
    const [info, setInfo] = useState({
        infoUser: {
            nomeUser: '',
            idade: "",
            infoAdicional: "",
            idCasa: '',
        },
        tipologias: []
    })

    const user = useSelector(({ utilizadores }) => utilizadores.userUnique)
    const isLoadingUser = useSelector(({ utilizadores }) => utilizadores.isLoadingUser)

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
        if(!isLoadingUser){
            setInfo({
                infoUser: {
                    nomeUser: user.nome,
                    idade: user.idade,
                    infoAdicional: user.info,
                    idCasa: user.id_casa,
                    userId: id
                },
                tipologias: user.blacklist
            })
        }
    }, [isLoadingUser])
    
    const onOpen = () => setMostraModal(true);
    const onClose = () => setMostraModal(false);

    const atualizaInfo = (e) => {
        setInfo({
            infoUser: {
                ...info.infoUser,
                [e.currentTarget.id]: e.currentTarget.value,
            },
            tipologias: info.tipologias
        })
    }

    const mudaCasa = (val, tipo) => {
        if(tipo === 'adiciona'){
            setInfo({
                infoUser: {
                    ...info.infoUser,
                    idCasa: val
                },
                tipologias: info.tipologias
            })
        } else{
            setInfo({
                infoUser: {
                    ...info.infoUser,
                    idCasa: ''
                },
                tipologias: info.tipologias
            })
        }
    }

    const handleTipologia = (valor) => {
        let contagem = 0;
        info.tipologias.map((nr, index) => {
            if(nr === valor.target.value){
                contagem++;
                let arrayMuda = [...info.tipologias];
                arrayMuda.splice(index);
                setInfo({
                    ...info,
                    tipologias: arrayMuda
                })
            }
        })
        if(contagem === 0){
            let arrayAnterior = [...info.tipologias];
            arrayAnterior.push(valor.target.value);
            setInfo({
                ...info,
                tipologias: arrayAnterior
            })
        }
    }

    if (isLoadingUser) {
        return (
            <Loading />
        )
    }

    return(
        <div>
            <div className='mainBodyForm container px-0'>
                <Navbar/>
                <Header nome="Criar Utilizador" detalhe="sim" apagaMuda="nao" criaUser="sim"/>
                <div>
                    <div className='prevSeccao ms-0'>
                        <h1 className='tituloSeccaoPaginaNotifs'>Informação Geral</h1>
                    </div>
                    <div className='row m-0' style={{padding: "0 40px"}}>
                        <span className='col-12 m-0 mt-2'>
                            <p className='subtituloSeccaoPagina'>Nome do Utilizador <span className='obrigatorio'>*</span></p>
                            <input type="text" className='inputsForms w-100' value={info.infoUser.nomeUser} id='nomeUser' onChange={atualizaInfo}/>
                        </span>
                    </div>
                    <div className='row col-12 m-0' style={{padding: "0 40px"}}>
                        <span className='col-3 mt-3'>
                            <p className='subtituloSeccaoPagina'>Idade <span className='obrigatorio'>*</span></p>
                            <input type="number" min="1" value={info.infoUser.idade} id='idade' onChange={atualizaInfo} className='inputsForms w-100'/>
                        </span>
                    </div>


                    <div className='row col-12 m-0' style={{padding: "0 40px"}}>
                        <span className='col-6 row m-0 divMargem'>
                            <p className='subtituloSeccaoPagina mt-3 p-0 mb-0'>Notificações que o utilizador não quer receber</p>
                            <p className='bigSmall p-0 mb-1'>Seleciona os tipos de notificações que o utilizador não quer receber</p>
                            <BuscaTipologias funcao={handleTipologia}/>
                        </span>
                    </div>

                    <div className='prevSeccao ms-0 mt-2'>
                        <p className='tituloSeccaoPaginaNotifs'>Informações Adicionais</p>
                    </div>
                    <div className='row col-12 m-0' style={{padding: "0 40px"}}>
                        <p className='subtituloSeccaoPagina mt-2'>Informações que possam ser úteis na criação de eventos/notificações</p>
                        <textarea rows="4" className='inputsForms w-100 mx-2' value={info.infoUser.infoAdicional} id='infoAdicional' onChange={atualizaInfo}/>
                    </div>

                    <div className='prevSeccao ms-0 mt-3'>
                        <p className='tituloSeccaoPaginaNotifs'>Casa</p>
                    </div>
                    <span className='col-12 m-0'>
                        <div className='row col-12 m-0 mt-2' style={{padding: "0 40px"}}>
                            <span className='col-6 row m-0'>
                                <p className='subtituloSeccaoPagina p-0'>Adicionar a casa</p>
                            </span>
                            <span className='col-6 row m-0'>
                                <p className='subtituloSeccaoPagina p-0'>Casa escolhida</p>
                            </span>
                        </div>

                        <div className='row col-12 m-0' style={{padding: "0 40px"}}>
                            <div className='col-6 ms-0'>
                                <ListaCasasPesquisa casa={info.infoUser.idCasa} muda={mudaCasa}/>
                            </div>
                            <div className='col-6 ms-0'>
                                <MostraCasaEscolhida casa={info.infoUser.idCasa} muda={mudaCasa}/>
                            </div>
                        </div>
                    </span>
                    
                    <span className='row m-0 mt-2 justify-content-end' style={{padding: "0 40px"}}>
                        <p className='col-2 indicaObrigatorio'>*Obrigatório</p>
                        <SubmitButton params={info} openModal={onOpen} tipoForm="UserEdit"/>
                    </span>
                </div>
            </div>
            <SuccessModal show={mostraModal} onHide={onClose} tiponotif="CriarUtilizador"/>
        </div>
    )
}

export default EditUser;