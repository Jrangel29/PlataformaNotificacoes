import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTipologiasList } from '../../Store/Tipologias/Actions';
import { getDistritosList } from '../../Store/Distritos/Actions';
import { getConcelhos } from '../../Store/Concelhos/Actions';
import { Form, Dropdown } from 'react-bootstrap';
import Loading from '../../Pages/Loading';

export const BuscaTipologias = (props) => {
    const dispatch = useDispatch();
    
    const tipologiaList = useSelector(({ tipologias }) => tipologias.data)
    const isLoadingTipologia = useSelector(({ tipologias }) => tipologias.isLoading)
    
    const distritosList = useSelector(({ distritos }) => distritos.data)
    const isLoadingDistrito = useSelector(({ distritos }) => distritos.isLoading)
    
    useEffect(() => {
        dispatch(getTipologiasList())
    }, [])

    useEffect(() => {
        dispatch(getDistritosList())
    }, [])

    if (isLoadingTipologia || isLoadingDistrito) {
        return (
            <Loading />
        )
    }

    return(
        <>
        <Form className='col-6 m-0 ps-0'>
            {tipologiaList.map((item) => {
                    return(
                        <Form.Check 
                        type="checkbox" 
                        inline 
                        id={`check${item.id_tipologia}`} 
                        key={item.id_tipologia} 
                        value={item.id_tipologia} 
                        label={item.nome}
                        onChange={props.funcao}/>
                    )
                })}
        </Form>
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
            <Loading />
        )
    }

    if (isLoadingConcelhos || props.concelho == '') {
        return (
            <>
            <span className='col-3 divMargem'>
                <p className='subtituloSeccaoPagina p-0 mt-3'>Distrito <span className='obrigatorio'>*</span></p>
                <Dropdown value={props.valor} onSelect={concelhoSearch}>
                    {props.valor !== '' ?
                    <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                        {distritosList.map(item => {
                            return(
                                <>
                                {props.valor == item.id_localidade ?
                                <>{item.nome}</>
                                :
                                <></>
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
                        {distritosList.map(item => {
                            return(
                                <Dropdown.Item eventKey={item.id_localidade}>{item.nome}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </Dropdown>  
            </span>

            <span className='col-3 divMargem'>
                <p className='subtituloSeccaoPagina p-0 mt-3'>Concelho <span className='obrigatorio'>*</span></p>
                <Dropdown>
                    <Dropdown.Toggle variant="flat" disabled className='dropdownFiltro'>
                        Escolhe um distrito
                    </Dropdown.Toggle>
                </Dropdown>
            </span>
            </>
        )
    }

    return(
        <>
        <span className='col-3 divMargem'>
            <p className='subtituloSeccaoPagina p-0 mt-3'>Distrito <span className='obrigatorio'>*</span></p>
            <Dropdown value={props.valor} onSelect={concelhoSearch}>
                {props.valor !== '' ?
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    {distritosList.map(item => {
                        return(
                            <>
                            {props.valor == item.id_localidade ?
                            <>{item.nome}</>
                            :
                            <></>
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
                    {distritosList.map(item => {
                        return(
                            <Dropdown.Item eventKey={item.id_localidade}>{item.nome}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>  
        </span>

        <span className='col-3 divMargem'>
            <p className='subtituloSeccaoPagina p-0 mt-3'>Concelho <span className='obrigatorio'>*</span></p>
            <Dropdown value={props.valorConcelho} onSelect={props.atualizaConcelho}>
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    Concelhos
                </Dropdown.Toggle>

                <Dropdown.Menu className='dropdownFiltro'>
                    {concelhosList.map(item => {
                        return(
                            <Dropdown.Item eventKey={item.id_localidade}>{item.nome}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </span> 
        </>
    );
}