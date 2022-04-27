import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getTipologiasList } from '../../Store/Tipologias/Actions';
import { Form } from 'react-bootstrap';
import Loading from '../../Pages/Loading';

export const BuscaTipologias = (props) => {
    const dispatch = useDispatch();
    const tipologiaList = useSelector(({ tipologias }) => tipologias.data)
    const isLoading = useSelector(({ tipologias }) => tipologias.isLoading)
    
    useEffect(() => {
        dispatch(getTipologiasList())
    }, [])

    if (isLoading) {
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