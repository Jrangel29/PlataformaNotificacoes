import React from 'react';
import '../../Styles/App.css';

const RespostasUser = (props) => {
    return(
        <>
            {props.valor === "Agenda" || props.valor === "Saúde" ?
                <div className='row m-0 mt-2'>
                    <div className='col-12 p-0'>
                        <p className='textoSeccaoPagina'>
                            <b>Resposta do utilizador: </b>Pode escolher ser relembrado da notificação 15 minutos depois de a receber.
                        </p>
                    </div>
                </div>
            :
            props.valor === "Serviços" ?
                <div className='row m-0 mt-2'>
                    <div className='col-12 p-0'>
                        <p className='textoSeccaoPagina'>
                            <b>Resposta do utilizador: </b>Pode escolher abrir o menu das apps da box MEO.
                        </p>
                    </div>
                </div>
            :
            props.valor === "Programas" ?
                <div className='row m-0 mt-2'>
                    <div className='col-12 p-0'>
                        <p className='textoSeccaoPagina'>
                            <b>Resposta do utilizador: </b>Pode mudar de canal.
                        </p>
                    </div>
                </div>
            :
            <></>
            }
        </>
    )
}

export default RespostasUser;