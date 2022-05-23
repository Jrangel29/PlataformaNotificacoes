import React, { useEffect } from 'react';
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

    if (isLoadingCasaInfo || !props.idCasa) {
        return (
            <p className='mb-1 textHouseCards'>
                A carregar pessoas...
            </p>
        )
    }

    return(
        <p className='mb-1 textHouseCards'>
            
            {console.log(casaInfo)}José Lima, Maria Lima
        </p>
    )
    
}

export default PeopleHouseCards;