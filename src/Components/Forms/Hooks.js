import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTipologiasList } from '../../Store/Tipologias/Actions';
import { getDistritosList } from '../../Store/Distritos/Actions';
import { getConcelhos } from '../../Store/Concelhos/Actions';
import { Form, Dropdown, Table } from 'react-bootstrap';
import Loading from '../../Pages/Loading';
import LoadingComponent from '../../Components/Geral/LoadingComponent';

export const BuscaTipologias = (props) => {
    const dispatch = useDispatch();
    
    const tipologiaList = useSelector(({ tipologias }) => tipologias.data)
    const isLoadingTipologia = useSelector(({ tipologias }) => tipologias.isLoading)
    
    useEffect(() => {
        dispatch(getTipologiasList())
    }, [])

    if (isLoadingTipologia) {
        return (
            <LoadingComponent />
        )
    }

    return(
        <Table striped bordered style={{textAlign: "center", width: "50%"}}>
            <thead>
                <tr>
                {tipologiaList.map((item) => {
                    if(item.id_tipologia !== 6){
                        return(
                            <th>{item.nome}</th>
                        )
                    }
                })}
                </tr>
            </thead>
            <tbody>
                <tr>
                {tipologiaList.map((item) => {
                    if(item.id_tipologia !== 6){
                        return(
                            <td style={{textAlign: 'center'}}>
                                <Form.Check 
                                    type="checkbox" 
                                    inline 
                                    id={`check${item.id_tipologia}`} 
                                    key={item.id_tipologia} 
                                    value={item.id_tipologia} 
                                    onChange={props.funcao}
                                    style={item.id_tipologia == 6 ? {display: "none"} : {display: "block", margin: 'auto'}}/>
                            </td>
                        )
                    }
                    })}
                </tr>
            </tbody>
        </Table>
    );
}

export const BuscaTipologiasNotificacoes = (props) => {
    const dispatch = useDispatch();
    
    const tipologiaList = useSelector(({ tipologias }) => tipologias.data)
    const isLoadingTipologia = useSelector(({ tipologias }) => tipologias.isLoading)
    
    useEffect(() => {
        dispatch(getTipologiasList())
    }, [])

    if (isLoadingTipologia) {
        return (
            <LoadingComponent />
        )
    }

    return(
        <>
            <Dropdown>
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    {props.tipo}
                </Dropdown.Toggle>

                <Dropdown.Menu className='dropdownFiltro'>
                    {tipologiaList.map((item, index) => {
                        return(
                            <Dropdown.Item key={index} onClick={
                                item.nome === "Informação" ?
                                () => props.mudaForm(item.nome, item.id_tipologia, "Combustíveis")
                                :
                                item.nome === "Saúde" ?
                                () => props.mudaForm(item.nome, item.id_tipologia, "Inatividade")
                                :
                                () => props.mudaForm(item.nome, item.id_tipologia, "nao")
                            }>{item.nome}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}

export const BuscaDistritosConcelhos = (props) => {
    const dispatch = useDispatch();
    
    const distritosList = useSelector(({ distritos }) => distritos.data)
    const isLoadingDistrito = useSelector(({ distritos }) => distritos.isLoading)

    const concelhosList = useSelector(({ concelhos }) => concelhos.data)
    const isLoadingConcelhos = useSelector(({ concelhos }) => concelhos.isLoading)

    useEffect(() => {
        dispatch(getDistritosList())
    }, []) 

    const concelhoSearch = (id) => {
        props.atualiza(id)
        dispatch(getConcelhos(id))
    }

    if (isLoadingDistrito) {
        return (
            <LoadingComponent />
        )
    }

    if (isLoadingConcelhos || props.concelho == '') {
        return (
            <>
            <span className='col-3 ps-0'>
                <p className='subtituloSeccaoPagina p-0 mt-3'>Distrito <span className='obrigatorio'>*</span></p>
                <Dropdown value={props.valor} onSelect={concelhoSearch}>
                    {props.valor !== '' ?
                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                        {distritosList.map((item, index) => {
                            return(
                                <>
                                {props.valor == item.id_localidade ?
                                <span className="m-0 p-0" key={index}>{item.nome}</span>
                                :
                                <span key={index}></span>
                                }
                                </>
                            )
                        })}
                    </Dropdown.Toggle>
                    :
                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                        Distrito
                    </Dropdown.Toggle>
                    }

                    <Dropdown.Menu className='dropdownFiltro'>
                        {distritosList.map((item, index) => {
                            return(
                                <Dropdown.Item eventKey={item.id_localidade} key={index}>{item.nome}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>  
            </span>

            <span className='col-3 ps-0'>
                <p className='subtituloSeccaoPagina p-0 mt-3'>Concelho <span className='obrigatorio'>*</span></p>
                <Dropdown>
                    <Dropdown.Toggle variant="flat" disabled className='dropdownFiltro'>
                        Concelho
                    </Dropdown.Toggle>
                </Dropdown>
            </span>
            </>
        )
    }

    return(
        <>
        <span className='col-3 ps-0'>
            <p className='subtituloSeccaoPagina p-0 mt-3'>Distrito <span className='obrigatorio'>*</span></p>
            <Dropdown value={props.valor} onSelect={concelhoSearch}>
                {props.valor !== '' ?
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    {distritosList.map((item, index) => {
                        return(
                            <>
                            {props.valor == item.id_localidade ?
                            <span className="m-0 p-0" key={index}>{item.nome}</span>
                            :
                            <span key={index}></span>
                            }
                            </>
                        )
                    })}
                </Dropdown.Toggle>
                :
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    Distrito
                </Dropdown.Toggle>
                }

                <Dropdown.Menu className='dropdownFiltro'>
                    {distritosList.map((item, index) => {
                        return(
                            <Dropdown.Item eventKey={item.id_localidade} key={index}>{item.nome}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>  
        </span>

        <span className='col-3 ps-0'>
            <p className='subtituloSeccaoPagina p-0 mt-3'>Concelho <span className='obrigatorio'>*</span></p>
            <Dropdown value={props.valorConcelho} onSelect={props.atualizaConcelho}>
                {props.valorConcelho !== '' ?
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    {concelhosList.map((item, index) => {
                        return(
                            <>
                            {props.valorConcelho == item.id_localidade ?
                            <span className="m-0 p-0" key={index}>{item.nome}</span>
                            :
                            <span key={index}></span>
                            }
                            </>
                        )
                    })}
                </Dropdown.Toggle>
                :
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    Concelho
                </Dropdown.Toggle>
                }

                <Dropdown.Menu className='dropdownFiltro'>
                    {concelhosList.map((item, index) => {
                        return(
                            <Dropdown.Item eventKey={item.id_localidade} key={index}>{item.nome}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </span> 
        </>
    );
}