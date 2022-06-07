// MESES

export const GetMeses = (nrMeses) => {

    let atual = new Date();
    let meses = [];

    for(let i = 0; i <= nrMeses; i++){
        
        let next = new Date();

        next.setDate(1);
        next.setMonth(atual.getMonth() + i);

        meses.push(next);
    }

    return(meses);

}

export const GetMesesDif = (dataInicio, dataFim) => {
    let dataI = dataInicio;
    let dataF = new Date(dataFim);
    return(
        dataF.getMonth() - dataI.getMonth() + 12 * (dataF.getFullYear() - dataI.getFullYear())
    );
}

// MÉTODOS DIAS

export const GetUnique = (dia, msg) => {
    let days = [];
    let atual = new Date();

    if(msg.semanaAntes.active === true){
        let date = new Date(dia.getFullYear(), dia.getMonth(), dia.getDay());
        let diaWeek = dia.getDate() - 7;
        var dataAtualizada = date.setDate(diaWeek);
        let dataNew = new Date(dataAtualizada)
        var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));

        if(dataNew >= atual){
            days.push({name: 'semanaAntes', data: dataFinal});
        }
    }

    if(msg.dias3.active === true){
        let date2 = new Date(dia.getFullYear(), dia.getMonth(), dia.getDay());
        let diaWeek = dia.getDate() - 3;
        var dataAtualizada = date2.setDate(diaWeek);
        let dataNew = new Date(dataAtualizada)
        var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));

        if(dataNew >= atual){
            days.push({name: 'dias3', data: dataFinal});
        }
    }

    if(msg.diaAnterior.active === true){
        let date3 = new Date(dia.getFullYear(), dia.getMonth(), dia.getDay());
        let diaWeek = dia.getDate() - 1;
        var dataAtualizada = date3.setDate(diaWeek);
        let dataNew = new Date(dataAtualizada)
        var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));

        if(dataNew >= atual){
            days.push({name: 'diaAnterior', data: dataFinal});
        }
    }

    return {diasEvento: days};
}

export const GetDiaSemana = (dias, dates, msg, dataFim) => {

    let days = [];
    let messageDays = {
        dias3: [],
        diaAnterior: []
    };

    let diaStart = new Date();
    let diaFim = new Date(dataFim);

    for (let i = 0; i < dates.length; i++) {

        // Evaluate current month
        
        let current = {

            year: dates[i].getFullYear(),
            month: dates[i].getMonth()
        };

        current.days = new Date(current.year, current.month + 1, 0).getDate();
        
        // Loop & evaluate days 
        
        for (let d = 1; d <= current.days; d++) {

            let date = new Date(current.year, current.month, d);

            dias.map(item => {
                
                if (date.getDay() == item && date >= diaStart && date <= diaFim) {
                    var diaFormated = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
                    days.push(diaFormated);
                }
    
                if(date.getDay() == item && date >= diaStart && msg.dias3.active === true && date <= diaFim){
                    let date2 = new Date(current.year, current.month, d);
                    let dataWeek = date.getDate() - 3;
                    var dataAtualizada = date2.setDate(dataWeek);
                    let dataNew = new Date(dataAtualizada)
                    var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));
    
                    if(dataNew >= diaStart){
                        messageDays.dias3.push(dataFinal);
                    }   
                }
    
                if(date.getDay() == item && date >= diaStart && msg.diaAnterior.active === true && date <= diaFim){
                    let date3 = new Date(current.year, current.month, d);
                    let dataWeek = date.getDate() - 1;
                    var dataAtualizada = date3.setDate(dataWeek);
                    let dataNew = new Date(dataAtualizada)
                    var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));
    
                    if(dataNew >= diaStart){
                        messageDays.diaAnterior.push(dataFinal);
                    }
                }

            })

        }
    }
    return {diasEvento: days, diasMensagens: messageDays};
}

export const GetDiaMes = (dia, dates, msg, dataFim) => {

    let days = [];
    let messageDays = {
        semanaAntes: [],
        dias3: [],
        diaAnterior: []
    };

    let diaStart = new Date();
    let diaFim = new Date(dataFim);

    for (let i = 0; i < dates.length; i++) {

        // Evaluate current month
        
        let current = {

            year: dates[i].getFullYear(),
            month: dates[i].getMonth()
        };

        current.days = new Date(current.year, current.month + 1, 0).getDate();
        
        // Loop & evaluate days 
        
        for (let d = 1; d <= current.days; d++) {

            let date = new Date(current.year, current.month, d);
            let dia2 = dia

            if(current.days < dia2){
                dia2 = current.days
            }

            if (d == dia2 && date >= diaStart && date <= diaFim) {
                var diaFormated = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
                days.push(diaFormated);
            }

            if(d == dia2 && date >= diaStart && msg.semanaAntes.active === true && date <= diaFim){
                let date1 = new Date(current.year, current.month, d);
                let dataWeek = date.getDate() - 7;
                var dataAtualizada = date1.setDate(dataWeek);
                let dataNew = new Date(dataAtualizada)
                var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));
                
                if(dataNew > diaStart){
                    messageDays.semanaAntes.push(dataFinal);
                }   
            }

            if(d == dia2 && date >= diaStart && msg.dias3.active === true && date <= diaFim){
                let date2 = new Date(current.year, current.month, d);
                let dataWeek = date.getDate() - 3;
                var dataAtualizada = date2.setDate(dataWeek);
                let dataNew = new Date(dataAtualizada)
                var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));

                if(dataNew > diaStart){
                    messageDays.dias3.push(dataFinal);
                }   
            }

            if(d == dia2 && date >= diaStart && msg.diaAnterior.active === true && date <= diaFim){
                let date3 = new Date(current.year, current.month, d);
                let dataWeek = date.getDate() - 1;
                var dataAtualizada = date3.setDate(dataWeek);
                let dataNew = new Date(dataAtualizada)
                var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));

                if(dataNew > diaStart){
                    messageDays.diaAnterior.push(dataFinal);
                }
            }
        }
    }

    return {diasEvento: days, diasMensagens: messageDays};
}

export const GetEveryday = (dates, dataFim) => {
    let days = [];

    let diaStart = new Date();
    let diaFim = new Date(dataFim);

    for (let i = 0; i < dates.length; i++) {

        // Evaluate current month
        
        let current = {

            year: dates[i].getFullYear(),
            month: dates[i].getMonth()
        };

        current.days = new Date(current.year, current.month + 1, 0).getDate();
        
        // Loop & evaluate days 
        
        for (let d = 1; d <= current.days; d++) {

            let date = new Date(current.year, current.month, d);

            if (date >= diaStart && date <= diaFim) {
                var diaFormated = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
                days.push(diaFormated);
            }
        }
    }
    return {diasEvento: days};
}





// TEMPLATE

export const GetDias = (num_week_day, dates, msg) => {

    let days = [];
    let messageDays = {
        semanaAntes: [],
        dias3: [],
        diaAnterior: []
    };

    let diaStart = new Date();

    for (let i = 0; i < dates.length; i++) {

        // Evaluate current month
        
        let current = {

            year: dates[i].getFullYear(),
            month: dates[i].getMonth()
        };

        current.days = new Date(current.year, current.month + 1, 0).getDate();
        
        // Loop & evaluate days 
        
        for (let d = 1; d <= current.days; d++) {

            let date = new Date(current.year, current.month, d);

            if (date.getDay() == num_week_day && date > diaStart) {
                var diaFormated = date.getFullYear() + '-' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '-' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate()));
                days.push(diaFormated);
            }

            if(date.getDay() == num_week_day && date > diaStart && msg.semanaAntes.active === true){
                let dataWeek = date.getDate() - 7;
                var dataAtualizada = date.setDate(dataWeek);
                let dataNew = new Date(dataAtualizada)
                var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));
                
                if(dataNew >= diaStart){
                    messageDays.semanaAntes.push(dataFinal);
                }   
            }

            if(date.getDay() == num_week_day && date > diaStart && msg.dias3.active === true){
                let dataWeek = date.getDate() - 3;
                var dataAtualizada = date.setDate(dataWeek);
                let dataNew = new Date(dataAtualizada)
                var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));

                if(dataNew >= diaStart){
                    messageDays.dias3.push(dataFinal);
                }   
            }

            if(date.getDay() == num_week_day && date > diaStart && msg.diaAnterior.active === true){
                let dataWeek = date.getDate() - 1;
                var dataAtualizada = date.setDate(dataWeek);
                let dataNew = new Date(dataAtualizada)
                var dataFinal = dataNew.getFullYear() + '-' + ((dataNew.getMonth() > 8) ? (dataNew.getMonth() + 1) : ('0' + (dataNew.getMonth() + 1))) + '-' + ((dataNew.getDate() > 9) ? dataNew.getDate() : ('0' + dataNew.getDate()));

                if(dataNew >= diaStart){
                    messageDays.diaAnterior.push(dataFinal);
                }
            }
        }
    }
    return {diasEvento: days, diasMensagens: messageDays};
}