d3.csv("https://raw.githubusercontent.com/briceleborgne/data/master/etat_np_lastvalues.csv").then(data => {


// Objet date et heure iso_fr

const localeTime = {
    'dateTime': '%A %e %B %Y Ã  %X',
    'date': '%d/%m/%Y',
    'time': '%H:%M:%S',
    'periods': ['AM', 'PM'],
    'days': ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
    'shortDays': ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
    'months': ['janvier', 'fÃ©vrier', 'mars', 'avril', 'mai', 'juin', 'juillet', 'aoÃ»t', 'septembre', 'octobre', 'novembre', 'dÃ©cembre'],
    'shortMonths': ['janv.', 'fÃ©vr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'aoÃ»t', 'sept.', 'oct.', 'nov.', 'dÃ©c.'],
}


    // DONNÃ‰ES DU JOUR
    const dataValues = data.map(d => {
        return {
            'date': new Date(d.date), // ATTENTION Ã€ TRANSPOSER EN FORMAT DATE
            'value_2023': +d.value_2023, // ATTENTION STRING A TRANSPOSER EN FLOAT
        }
    })[0];

        // EDITION DE LA DATE

        const dayMonth = dataValues['date'].getDate();
        console.log(dayMonth)
    
        const monthLabel = localeTime['months'][dataValues['date'].getMonth()];
        console.log(monthLabel)
   



    // Insertion des données

    

d3
    .select('#np_lastvalue')
    .html(`Au ${dayMonth} ${monthLabel}, environ <strong>${dataValues['value_2023']}%</strong> des nappes étaient en dessous des normales.`)


})
