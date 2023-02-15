import React from 'react';
import '../../Styles/App.css';
import {Button} from 'react-bootstrap';
import { EnviaNotification } from '../../API/Requests';


const Demo = () => {
    return(
        <div>
            <span className='col-2 m-0 justify-content-end'>
                <Button 
                    variant='flat' 
                    onClick={
                        () => EnviaNotification(
                            {
                                tipo: 1,
                                id: 'aa916fcf-0f2b-46d8-9a75-657db142cee3',
                                mensagem: 'Bom dia! Sexta, 20 de Janeiro',
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/new_icon_Bom_dia.png?alt=media&token=2f0566e7-5870-4293-840f-adf288a5e16b',
                            }
                        )
                        }>Rotina Bom Dia</Button>
            </span>
            <span className='col-2 m-0 mx-2 justify-content-end'>
                <Button 
                    variant='flat' 
                    onClick={
                        () => EnviaNotification(
                            {
                                tipo: 1,
                                id: 'aa916fcf-0f2b-46d8-9a75-657db142cee3',
                                mensagem: 'Boa Noite! Amanhã, 21 de Janeiro',
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/new_icon_Boa_Noite.png?alt=media&token=13769f50-5280-4789-92f7-a358b95dc4e8',
                            }
                        )
                        }>Rotina Boa Noite</Button>
            </span>
            <span className='col-2 m-0 justify-content-end'>
                <Button 
                    variant='flat' 
                    onClick={
                        () => EnviaNotification(
                            {
                                tipo: 2,
                                id: 'aa916fcf-0f2b-46d8-9a75-657db142cee3',
                                mensagem: 'Olá José! Tem uma consulta amanhã às 17 horas.',
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeAgenda.png?alt=media&token=38fb87cc-f8fa-4015-a775-b4da0e6b9a77',
                            }
                        )
                        }>Agenda</Button>
            </span>
            <span className='col-2 m-0 mx-2 justify-content-end'>
                <Button 
                    variant='flat' 
                    onClick={
                        () => EnviaNotification(
                            {
                                tipo: 2,
                                id: 'aa916fcf-0f2b-46d8-9a75-657db142cee3',
                                mensagem: 'Maria, o seu programa favorito vai começar!',
                                titulo: 'Ir para RTP?',
                                descricao: 'Maria, o seu programa favorito na RTP vai começar daqui a 5 minutos.',
                                botao_titulo: 'Ver programa',
                                botao_navigate: 'tune:1',
                                url_icone: 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeProgramas.png?alt=media&token=3e89e385-5379-403a-93b5-d05f9efda5a6',
                            }
                        )
                        }>Programas</Button>
            </span>
            <span className='col-2 m-0 justify-content-end'>
                <Button 
                    variant='flat' 
                    onClick={
                        () => EnviaNotification(
                            {
                                tipo: 2,
                                id: 'aa916fcf-0f2b-46d8-9a75-657db142cee3',
                                mensagem: 'Subida de 5 cêntimos no gasóleo.',
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeInformacao.png?alt=media&token=e706c143-43d2-4625-af36-22a1a658ee30',
                            }
                        )
                        }>Informação</Button>
            </span>
            <span className='col-2 m-0 mx-2 justify-content-end'>
                <Button 
                    variant='flat' 
                    onClick={
                        () => EnviaNotification(
                            {
                                tipo: 2,
                                id: 'aa916fcf-0f2b-46d8-9a75-657db142cee3',
                                mensagem: 'Tiago, está na hora de tomar a sua medicação.',
                                titulo: 'Medicação matinal',
                                descricao: 'Tiago, está na hora de tomar a sua medicação matinal para os diabetes.',
                                botao_titulo: 'Relembrar',
                                botao_navigate: '',
                                url_icone: 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeSaude.png?alt=media&token=fd1ae805-eea2-4dce-b4f8-4d904c4e65b4',
                            }
                        )
                        }>Saúde</Button>
            </span>
            <span className='col-2 m-0 justify-content-end'>
                <Button 
                    variant='flat' 
                    onClick={
                        () => EnviaNotification(
                            {
                                tipo: 2,
                                id: 'aa916fcf-0f2b-46d8-9a75-657db142cee3',
                                mensagem: 'Luísa, quer encomendar uma pizza?',
                                titulo: null,
                                descricao: null,
                                botao_titulo: null,
                                botao_navigate: null,
                                url_icone: 'https://firebasestorage.googleapis.com/v0/b/tdi-rangel.appspot.com/o/iconeServicos.png?alt=media&token=2d858888-6925-482c-b2e5-2c89722e5626',
                            }
                        )
                        }>Serviços</Button>
            </span>
        </div>
    )
}

export default Demo;