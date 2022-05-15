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
            if(contagem === 0 && carrocas === true){
                setCarrocas(false)
            }
        })
    }, [props.mensagens])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return(
        <>
            <div className='prevSeccao ms-0'>
                <h1 className='tituloSeccaoPaginaNotifs'>Pré-visualização da notificação</h1>
            </div>
            <div style={{padding: "0 40px"}} className={offset >= 175 ? 'stickyTop row m-0' : 'row m-0'}>
                {carrocas === true ? 
                    <Carousel 
                    interval={null} activeIndex={index} variant='dark'
                    onSelect={handleSelect} className='divPreview col-5'>
                    {Object.keys(props.mensagens).map((item, index) => {
                        if(props.mensagens[item].active === true){
                            contagem++;
                            return(
                                <Carousel.Item>
                                    <span className='notiPreview'>
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
                        <p className='textPreview'>Esta é uma mensagem de exemplo.</p>
                    </span>
                </div>
                }
                <div className='col-4'>
                    <p className='subtituloSeccaoPagina mb-0 mt-2'>Definições</p>
                    <p className='textoPrefsUser m-0'>
                        <span className='itensPreview'>Titulo do Item: </span>{props.titulo === '' ? 'Por definir' : props.titulo}
                    </p>
                    <p className='textoPrefsUser m-0'>
                        <span className='itensPreview'>Categoria: </span>{props.tipo}
                    </p>
                    <p className='textoPrefsUser m-0'>
                        <span className='itensPreview'>Subcategoria: </span>{props.sub !== '' ? props.sub : 'Sem subcategoria'}
                    </p>
                    <p className='textoPrefsUser m-0 mb-2'>
                        <span className='itensPreview'>Momento de envio: </span>Por definir
                    </p>
                </div>
                <div className='col-3'>
                    <p className='subtituloSeccaoPagina mb-0 mt-2'>Recetores</p>
                    <span className='m-0 mb-2' style={{maxHeight: '200px'}}>
                        <p className='textoPrefsUser m-0'>Recetores</p>
                    </span>
                </div>
            </div>
        </>                      
    ) 
}