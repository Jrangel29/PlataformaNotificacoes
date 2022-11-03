import React from "react";
import { Dropdown } from "react-bootstrap";

export const HouseSelectDropdown = (props) => {

    return(
        <>
            <Dropdown style={{width: '20%', margin: 'auto', paddingBottom: '20px'}}>
                <Dropdown.Toggle variant="flat" className='dropdownFiltro'>
                    {props.atual.nome}
                </Dropdown.Toggle>

                <Dropdown.Menu className='dropdownFiltro'>
                    {props.casas.map((item, index) => {
                        return <Dropdown.Item key={index} onClick={() => props.atualiza(item)}>{item.nome}</Dropdown.Item>
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </>
    );
}