import React, { useEffect, useState } from 'react';
import iconeAgenda from '../../Images/iconeAgenda.png';
import iconeConteudo from '../../Images/iconeProgramas.png';
import iconeInfo from '../../Images/iconeInformacao.png';
import iconeSaude from '../../Images/iconeSaude.png';
import iconeServico from '../../Images/iconeServicos.png';
import { Carousel } from 'react-bootstrap';

export const PreviewNotif = (props) => {

    const [offset, setOffset] = useState(0);
    const [carrocas, setCarrocas] = useState([false, 0]);
    let contagem = 0;
    let contaMsg = 0;

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() =>{
        Object.keys(props.mensagens).map((item, index) => {
            if(props.mensagens[item].active === true && carrocas[0] === false){
                contaMsg++;
                setCarrocas([true, contaMsg])
            }
            if(props.mensagens[item].active === true && carrocas[0] === true){
                contaMsg++;
                contagem++;
                setCarrocas([true, contaMsg])
            }
        })
        if(contagem === 0 && carrocas[0] === true){
            setCarrocas([false, 0])
        }
    }, [props.mensagens])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    console.log(carrocas)

    return(
        <>
            <div className='prevSeccao ms-0'>
                <h1 className='tituloSeccaoPaginaNotifs'>Pré-visualização das notificações</h1>
            </div>
            <div style={{padding: "0 40px"}} className={offset >= 230 ? 'stickyTop row m-0' : 'row m-0'}>
                {carrocas[0] === true ? 
                    carrocas[1] !== 1 ?
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
                        {Object.keys(props.mensagens).map((item, index) => {
                            if(props.mensagens[item].active === true){
                                return(
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
                                        <p className='textPreview'>{props.mensagens[item].message !== '' ? props.mensagens[item].message : "Esta é uma mensagem de exemplo."}</p>
                                    </span>
                                )
                            }
                        })}
                    </div>
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
                                            <span className='m-0 p-0' key={index}>Este evento não gera notificações</span>
                                        )
                                    }
                                    if(contagem === 1){
                                        return(
                                            <span className='m-0 p-0' key={index}>Este evento gera 1 notificação</span>
                                        )
                                    } else {
                                        return(
                                            <span className='m-0 p-0' key={index}>{`Este evento gera ${contagem} notificações`}</span>
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
                                        <span className='m-0 p-0' key={index}>1 semana antes, </span>
                                    )
                                }
                                if(item === 'dias3'){
                                    return(
                                        <span className='m-0 p-0' key={index}>3 dias antes, </span>
                                    )
                                }
                                if(item === 'diaAnterior'){
                                    return(
                                        <span className='m-0 p-0' key={index}>Rotina de boa noite, </span>
                                    )
                                }
                                if(item === 'diaProprio'){
                                    return(
                                        <span className='m-0 p-0' key={index}>Rotina de bom dia, </span>
                                    )
                                }
                                if(item === 'horaEspecifica'){
                                    return(
                                        <span className='m-0 p-0' key={index}>Hora específica, </span>
                                    )
                                }
                                if(item === 'imediato'){
                                    return(
                                        <span className='m-0 p-0' key={index}>Imediatamente, </span>
                                    )
                                }
                                if(item === 'intervaloHoras'){
                                    return(
                                        <span className='m-0 p-0' key={index}>Intervalo de horas, </span>
                                    )
                                }
                                if(item === 'horaAntes'){
                                    return(
                                        <span className='m-0 p-0' key={index}>1 hora antes, </span>
                                    )
                                }
                                if(item === 'meiaHora'){
                                    return(
                                        <span className='m-0 p-0' key={index}>30 minutos antes, </span>
                                    )
                                }
                                if(item === 'quartoHora'){
                                    return(
                                        <span className='m-0 p-0' key={index}>15 minutos antes, </span>
                                    )
                                }
                                if(item === 'minutos5'){
                                    return(
                                        <span className='m-0 p-0' key={index}>5 minutos antes, </span>
                                    )
                                }
                                if(item === 'momentoAcontecimento'){
                                    return(
                                        <span className='m-0 p-0' key={index}>No momento do acontecimento do item</span>
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
                        <p className='textoPrefsUser m-0' style={{maxHeight: '80px', overflowY: 'auto'}}>
                            {props.tipo === 'Agenda' || props.tipo === 'Programas' || props.tipo === 'Saúde' || props.tipo === 'Personalizada' && props.tipoPers === 'Recetores Individuais' ?
                                props.users.length > 0 ? 
                                    props.users.map((item, index) => {
                                        return(
                                            <span className='m-0 p-0' key={index}>{item.nome}{index + 1 === props.users.length ? '' : ', '}</span>
                                        )
                                    })
                                    : 'Ainda não escolheu recetores'
                            :
                            props.casas.length > 0 ? 
                                    props.casas.map((item, index) => {
                                        return(
                                            <span className='m-0 p-0' key={index}>{item.nome}{index + 1 === props.casas.length ? '' : ', '}</span>
                                        )
                                    })
                                    : 'Ainda não escolheu casas'
                            }
                        </p>
                    </span>
                </div>
            </div>
        </>                      
    ) 
}