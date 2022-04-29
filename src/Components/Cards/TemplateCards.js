import React from 'react';
import '../../Styles/Cards.css';
import {Card, Button} from 'react-bootstrap';
import Lixo from '../../Images/LixoBranco.svg';
import Editar from '../../Images/EditarBranco.svg';
import {Link} from 'react-router-dom';

class TemplateCards extends React.Component {

    render(){
        return(
            <div className='container m-0'>
                <div className='row cartasMainBody'>
                    <Card className='col-4 p-0'>
                        <Card.Header className='row headerCarta m-0 gx-1'>
                            <span className='col-10 p-0 tituloNotificacao'>Titulo do template</span>
                            <span className='col-1'>
                                <Link to="/templates/edit">
                                    <img className='iconeCard' src={Editar}/>
                                </Link>
                            </span>
                            <span className='col-1 px-2'>
                                <img className='iconeCard' style={{cursor: "pointer"}} onClick={() => this.props.abreModal()} src={Lixo}/>
                            </span>
                        </Card.Header>
                        <Card.Body className='bodyCartaTemplate m-0'>
                            <Button className='textoBtnUser col-5 mx-2' variant='flat'>Utilizar Template</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    } 
}

export default TemplateCards;