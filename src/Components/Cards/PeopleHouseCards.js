import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHousePeopleList } from '../../Store/Casas/Actions';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';

const PeopleHouseCards = (props) => {
    const dispatch = useDispatch();

    const casaInfo = useSelector(({ casas }) => casas.singleCasa)
    const isLoadingCasaInfo = useSelector(({ casas }) => casas.isLoadingPeople)

    useEffect(() => {
        dispatch(getHousePeopleList(props.idCasa))
    }, [props.idCasa])

    useEffect(() => {
        props.funcao(casaInfo)
    }, [casaInfo]) 

    if (isLoadingCasaInfo) {
        return (
            <p className='mb-1 textHouseCards'>
                A carregar pessoas...
            </p>
        )
    }

    return(
        <p className='mb-1 textHouseCards'>
            {props.users.map((item, index) => {
                return(
                    <span className='m-0 p-0' key={index}>
                        {item.id_casa === props.idCasa ? 
                            item.utilizadores.length !== 0 ?
                                item.utilizadores.map((value, index) => {
                                    return(
                                        <span key={index}>{value.nome}{index + 1 === item.utilizadores.length ? '' : ', ' }</span>
                                    )
                                })
                                :
                                <span>Esta casa ainda não tem utilizadores.</span>
                            :
                            <></>
                        }
                    </span>
                )
            })}
        </p>
    )
    
}

export default PeopleHouseCards;