import React from 'react';
import '../../Styles/App.css';
import BackArrow from './BackArrow';
import Lixo from '../../Images/LixoPreto.svg';
import Editar from '../../Images/EditarPreto.svg';
import DeleteUser from '../Modal/DeleteUser';
import DeleteGroup from '../Modal/DeleteGroup';
import DeleteHouse from '../Modal/DeleteHouse';
import SuccessModal from '../Modal/SuccessModal';
import {Link} from 'react-router-dom';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showDelete: false,
            showSuccessModal: false,
            tipoNoti: ""
        }
    }

    onOpen = () => this.setState({showDelete: true});
    onClose = (resposta, tipo) => {
        if(resposta === "Cancela"){
            this.setState({showDelete: false, showSuccessModal: false})
        } else {
            this.setState({showDelete: false, showSuccessModal: true, tipoNoti: tipo})
        };
    }
    onCloseSuccess = () => this.setState({showSuccessModal: false});

    render(){
        return(
            <>
            {this.props.detalhe == "sim" ?
            <div className='m-0 p-0 row inicioPagina'>
                <span className="col-2 d-flex align-items-center">
                    <BackArrow nome={this.props.nome}/>
                </span>
                <h1 className='tituloPagina col-8'>{this.props.nome}</h1>
                {this.props.apagaMuda !== "nao" ?
                    <span className="col-2 d-flex align-items-center justify-content-end">
                        {this.props.nome === "Grupos" ?
                        <Link to="/groups/edit">
                            <img className="topIcons px-4" src={Editar}/>    
                        </Link>
                        :
                        <Link to="/users/edit">
                            <img className="topIcons px-4" src={Editar}/>    
                        </Link>
                        }
                        <img className="topIcons" style={{marginRight: "40px", cursor: "pointer"}} onClick={() => this.onOpen()} src={Lixo}/>
                        {this.props.nome === "Utilizadores" ?
                        <DeleteUser show={this.state.showDelete} onHide={this.onClose}/>
                        :
                        this.props.nome === "Casas" ?
                        <DeleteHouse show={this.state.showDelete} onHide={this.onClose}/>
                        :
                        <DeleteGroup show={this.state.showDelete} onHide={this.onClose}/>
                        }
                    </span>
                :
                <></>
                }
            <SuccessModal show={this.state.showSuccessModal} onHide={this.onCloseSuccess} tiponotif={this.state.tipoNoti}/>
            </div>
            :
            <div className='m-0 p-0 inicioPagina'>
                <h1 className='tituloPagina'>{this.props.nome}</h1>
            </div>
            }
            </>
        )
    } 
}

export default Header;