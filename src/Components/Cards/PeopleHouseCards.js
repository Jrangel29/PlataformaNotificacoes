import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHousePeopleList } from '../../Store/Casas/Actions';
import '../../Styles/Cards.css';
import '../../Styles/Filters.css';

const PeopleHouseCards = (props) => {
    const dispatch = useDispatch();

    const peopleList = useSelector(({ casas }) => casas.singleCasa)
    const isLoadingPeople = useSelector(({ casas }) => casas.isLoadingPeople)

    useEffect(() => {
        dispatch(getHousePeopleList(props.idCasa))
    }, [])

    if (isLoadingPeople || !props.idCasa) {
        return (
            <p className='mb-0 textHouseCards'>
                {console.log(peopleList)}
                A carregar pessoas...
            </p>
        )
    }

    return(
        <p className='mb-0 textHouseCards'>
            {peopleList.map((item) => {
                console.log(item.nome)
            })}
            {console.log(peopleList)}José Lima, Maria Lima
        </p>
    )
    
}

export default PeopleHouseCards;