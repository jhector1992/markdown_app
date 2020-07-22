var Util = {
    formatDate: function(date=new Date()){
        let month = {
            0: 'Ene', 1: 'Feb', 2: 'Mar',
            3: 'Abr', 4: 'May', 5: 'Jun',
            6: 'Jul', 7: 'Ago', 8: 'Sep',
            9: 'Oct', 10: 'Nov', 11: 'Dic'
        }

        return `${ date.getDay() }/${ month[date.getMonth()] }/${ date.getFullYear() } 
            ${ date.getHours() }:${ date.getMinutes() } hrs.`;
    }
}


module.exports = Util;