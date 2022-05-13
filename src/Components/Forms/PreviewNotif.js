import React, { useEffect, useState } from 'react';
import iconeAgenda from '../../Images/iconeAgenda.png';
import iconeConteudo from '../../Images/iconeConteudo.png';
import iconeInfo from '../../Images/iconeInfo.png';
import iconeSaude from '../../Images/iconeSaude.png';
import iconeServico from '../../Images/iconeServico.png';

export const PreviewNotif = (props) => {

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <>
            <div className='prevSeccao ms-0'>
                <h1 className='tituloSeccaoPaginaNotifs'>Pré-visualização da notificação</h1>
            </div>
            <div style={{padding: "0 40px"}} className={offset >= 175 ? 'stickyTop row m-0' : 'row m-0'}>
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
                    <p className='textPreview'>{props.titulo !== '' ? props.titulo : "Esta é uma mensagem de exemplo."}</p>
                    </span>
                </div>
                <div className='col-4'>
                    <p className='subtituloSeccaoPagina mb-0 mt-2'>Definições</p>
                    <p className='textoPrefsUser m-0'>
                        <span className='itensPreview'>Titulo do Item: </span>Por definir
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