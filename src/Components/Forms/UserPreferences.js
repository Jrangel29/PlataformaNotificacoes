import React from 'react';

export const UserPreferences = (props) => {
    return(
        <div className='seccaoPrefsUser'>
            <span className='col-12'>
                <p className='subtituloSeccaoPagina p-0' style={{marginTop: "5px"}}>Preferências do utilizador</p>
            </span>
            <span className='col-12'>
                <p className='textoPrefsUser mb-0'><b>Ricardo Lima</b></p>
                <p className='textoPrefsUser mb-2'>O Ricardo não gosta de receber notificações de agenda na sua rotina de bom dia. Também não quer receber nenhuma notificação relativa a serviços.</p>
                <p className='textoPrefsUser mb-0'><b>Maria Costa</b></p>
                <p className='textoPrefsUser'>A Maria não quer receber notificações sobre farmácias. Quer ser notificada de quando o programa 'Casa feliz' vai começar.</p>
            </span>
        </div>                                
    ) 
}