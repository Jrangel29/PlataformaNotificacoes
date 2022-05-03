import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTipologiasList } from '../../Store/Tipologias/Actions';
import { getDistritosList } from '../../Store/Distritos/Actions';
import { getConcelhos } from '../../Store/Concelhos/Actions';
import { Form, Dropdown } from 'react-bootstrap';
import Loading from '../../Pages/Loading';
import LoadingComponent from '../../Components/Geral/LoadingComponent';

const HookFilters = () => {
    const dispatch = useDispatch();

    const [distritoVal, setDistritoVal] = useState('');
    const [concelhoVal, setConcelhoVal] = useState('');
    
    const distritosList = useSelector(({ distritos }) => distritos.data)
    const isLoadingDistrito = useSelector(({ distritos }) => distritos.isLoading)

    const concelhosList = useSelector(({ concelhos }) => concelhos.data)
    const isLoadingConcelhos = useSelector(({ concelhos }) => concelhos.isLoading)

    useEffect(() => {
        dispatch(getDistritosList())
    }, []);

    const concelhoSearch = (id) => {
        dispatch(getConcelhos(id));
        setDistritoVal(id);
    }

    const addConcelho = (id) => {
        setConcelhoVal(id);
    }

    if (isLoadingDistrito) {
        return (
            <span className='col-2 divMargem m-0 ps-2 pe-0'>
                <LoadingComponent comp="filters"/>
            </span>
        )
    }


    if (isLoadingConcelhos || distritoVal == '') {
    return(
    <>
        <Dropdown className='col-2 divMargem m-0 ps-2 pe-0' value={distritoVal} onSelect={concelhoSearch}>
            {distritoVal !== '' ?
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    {distritosList.map(item => {
                        return(
                            <>
                            {distritoVal == item.id_localidade ?
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

        <Dropdown disabled className='col-2 divMargem m-0 ps-2 pe-0'>
            <Dropdown.Toggle variant="flat" disabled className='dropdownFiltro'>
                Concelho
            </Dropdown.Toggle>
        </Dropdown>
    </>
    )
    }

    return(
        <>
        <Dropdown className='col-2 divMargem m-0 ps-2 pe-0' value={distritoVal} onSelect={concelhoSearch}>
            {distritoVal !== '' ?
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    {distritosList.map(item => {
                        return(
                            <>
                            {distritoVal == item.id_localidade ?
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

        <Dropdown className='col-2 divMargem m-0 ps-2 pe-0' value={concelhoVal} onSelect={addConcelho}>
            {concelhoVal !== '' ?
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    {concelhosList.map(item => {
                        return(
                            <>
                            {concelhoVal == item.id_localidade ?
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
                    Concelho
                </Dropdown.Toggle>
            }

            <Dropdown.Menu className='dropdownFiltro'>
                {concelhosList.map(item => {
                    return(
                        <Dropdown.Item eventKey={item.id_localidade}>{item.nome}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
        </>
    )

}

export default HookFilters;