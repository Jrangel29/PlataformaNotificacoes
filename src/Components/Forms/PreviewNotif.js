import React, { useEffect, useState } from 'react';
import iconeAgenda from '../../Images/iconeAgenda.png';
import iconeConteudo from '../../Images/iconeConteudo.png';
import iconeInfo from '../../Images/iconeInfo.png';
import iconeSaude from '../../Images/iconeSaude.png';
import iconeServico from '../../Images/iconeServico.png';
import { Carousel } from 'react-bootstrap';

export const PreviewNotif = (props) => {

    const [offset, setOffset] = useState(0);
    const [carrocas, setCarrocas] = useState(false);
    let contagem = 0;

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() =>{
        Object.keys(props.mensagens).map((item, index) => {
            if(props.mensagens[item].active === true && carrocas === false){
                setCarrocas(true)
            }
            if(props.mensagens[item].active === true && carrocas === true){
                contagem++;
            }
        })
        if(contagem === 0 && carrocas === true){
            setCarrocas(false)
        }
    }, [props.mensagens])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <>
            <div className='prevSeccao ms-0'>
                <h1 className='tituloSeccaoPaginaNotifs'>Pré-visualização das notificações</h1>
            </div>
            <div style={{padding: "0 40px"}} className={offset >= 175 ? 'stickyTop row m-0' : 'row m-0'}>
                {carrocas === true ? 
                    <Carousel 
                    interval={null} activeIndex={index} variant='dark'
                    onSelect={handleSelect} className='divPreview col-5'>
                    {Object.keys(props.mensagens).map((item, index) => {
                        if(props.mensagens[item].active === true){
                            return(
                                <Carousel.Item>
                                    <span key={index} className='notiPreview'>
                                        {props.tipo !== 'Personalizada' ?
                                        <img src={
                                            props.tipo === "Agenda" ?
                                            iconeAgenda
                                            :
                                            props.tipo === "Programas" ?
                                            iconeConteudo
                                            :
                                            props.tipo === "Informação" ?
                                            iconeInfo
                                            :
                                            props.tipo === "Saúde" ?
                                            iconeSaude
                                            :
                                            iconeServico
                                            } className="imgPreview"/>
                                        :
                                        props.tipo === 'Personalizada' && props.personalizado.usaIcone === 'Sim' ?
                                        <img src={
                                            props.personalizado.icone === "Agenda" ?
                                            iconeAgenda
                                            :
                                            props.personalizado.icone === "Programas" ?
                                            iconeConteudo
                                            :
                                            props.personalizado.icone === "Informação" ?
                                            iconeInfo
                                            :
                                            props.personalizado.icone === "Saúde" ?
                                            iconeSaude
                                            :
                                            iconeServico
                                            } className="imgPreview"/>
                                            :
                                            <></>
                                        }
                                        <p className='textPreview'>{props.mensagens[item].message !== '' ? props.mensagens[item].message : "Esta é uma mensagem de exemplo."}</p>
                                    </span>
                                </Carousel.Item>
                            )
                        }
                    })}
                </Carousel>
                :
                <div className='divPreview col-5'>
                    <span className='notiPreview'>
                        {props.tipo !== 'Personalizada' ?
                            <img src={
                                props.tipo === "Agenda" ?
                                iconeAgenda
                                :
                                props.tipo === "Programas" ?
                                iconeConteudo
                                :
                                props.tipo === "Informação" ?
                                iconeInfo
                                :
                                props.tipo === "Saúde" ?
                                iconeSaude
                                :
                                iconeServico
                                } className="imgPreview"/>
                            :
                            props.tipo === 'Personalizada' && props.personalizado.usaIcone === 'Sim' ?
                            <img src={
                                props.personalizado.icone === "Agenda" ?
                                iconeAgenda
                                :
                                props.personalizado.icone === "Programas" ?
                                iconeConteudo
                                :
                                props.personalizado.icone === "Informação" ?
                                iconeInfo
                                :
                                props.personalizado.icone === "Saúde" ?
                                iconeSaude
                                :
                                iconeServico
                                } className="imgPreview"/>
                                :
                                <></>
                            }
                        <p className='textPreview'>Esta é uma mensagem de exemplo.</p>
                    </span>
                </div>
                }
                <div className='col-4'>
                    <p className='subtituloSeccaoPagina mb-0 mt-2'>Definições</p>
                    <p className='textoPrefsUser m-0'>
                        <span className='itensPreview'>Titulo do Evento: </span>{props.titulo === '' ? 'Por definir' : props.titulo}
                    </p>
                    <p className='textoPrefsUser m-0'>
                        <span className='itensPreview'>Categoria: </span>{props.tipo}
                    </p>
                    <p className='textoPrefsUser m-0'>
                        <span className='itensPreview'>Subcategoria: </span>{props.sub !== '' ? props.sub : 'Sem subcategoria'}
                    </p>
                    <p className='textoPrefsUser m-0'>
                        <span className='itensPreview'>Notificações geradas: </span>
                        {
                            Object.keys(props.mensagens).map((item, index) => {
                                if(props.mensagens[item].active === true){
                                    contagem++;
                                }
                                if(index+1 === Object.keys(props.mensagens).length){
                                    if(contagem === 0){
                                        return(
                                            'Este evento não gera mensagens'
                                        )
                                    }
                                    if(contagem === 1){
                                        return(
                                            'Este evento gera 1 mensagem'
                                        )
                                    } else {
                                        return(
                                            `Este evento gera ${contagem} mensagens`
                                        )
                                    }
                                }
                            })
                        }
                    </p>
                    <p className='textoPrefsUser m-0 mb-2'>
                        <span className='itensPreview'>Momentos de envio: </span>
                        {carrocas === true ? 
                        Object.keys(props.mensagens).map((item, index) => {
                            if(props.mensagens[item].active === true){
                                if(item === 'semanaAntes'){
                                    return(
                                        <>1 semana antes, </>
                                    )
                                }
                                if(item === 'dias3'){
                                    return(
                                        <>3 dias antes, </>
                                    )
                                }
                                if(item === 'diaAnterior'){
                                    return(
                                        <>Rotina de boa noite, </>
                                    )
                                }
                                if(item === 'diaProprio'){
                                    return(
                                        <>Rotina de bom dia, </>
                                    )
                                }
                                if(item === 'horaEspecifica'){
                                    return(
                                        <>Hora específica, </>
                                    )
                                }
                                if(item === 'imediato'){
                                    return(
                                        <>Imediatamente, </>
                                    )
                                }
                                if(item === 'intervaloHoras'){
                                    return(
                                        <>Intervalo de horas, </>
                                    )
                                }
                                if(item === 'horaAntes'){
                                    return(
                                        <>1 hora antes, </>
                                    )
                                }
                                if(item === 'meiaHora'){
                                    return(
                                        <>30 minutos antes, </>
                                    )
                                }
                                if(item === 'quartoHora'){
                                    return(
                                        <>15 minutos antes, </>
                                    )
                                }
                                if(item === 'minutos5'){
                                    return(
                                        <>5 minutos antes, </>
                                    )
                                }
                                if(item === 'momentoAcontecimento'){
                                    return(
                                        <>No momento do acontecimento do item</>
                                    )
                                }
                            }
                        })
                        :
                        <>Por definir</>
                        }
                    </p>
                </div>
                <div className='col-3'>
                    <p className='subtituloSeccaoPagina mb-0 mt-2'>Recetores</p>
                    <span className='m-0 mb-2'>
                        <p className='textoPrefsUser m-0' style={{maxHeight: '80px', overflowY: 'scroll'}}>Ricardo Lima, Patrícia Silva, Marco Costa, Bruno Costa, Maria Costa </p>
                    </span>
                </div>
            </div>
        </>                      
    ) 
}