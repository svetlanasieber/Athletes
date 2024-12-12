function solve(athletes) {
   
    function getAthletesBySport(sport) {
        return athletes.filter(athlete => athlete.sport === sport);
    }

 
    function addAthlete(id, name, sport, medals, country) {
        athletes.push({ id, name, sport, medals, country });
        return athletes;
    }


    function getAthleteById(id) {
        const athlete = athletes.find(athlete => athlete.id === id);
        return athlete ? athlete : `Athlete with ID ${id} not found`;
    }

  
    function removeAthleteById(id) {
        const index = athletes.findIndex(athlete => athlete.id === id);
        if (index !== -1) {
            athletes.splice(index, 1);
            return athletes;
        }
        return `Athlete with ID ${id} not found`;
    }

   
    function updateAthleteMedals(id, newMedals) {
        const athlete = athletes.find(athlete => athlete.id === id);
        if (athlete) {
            athlete.medals = newMedals;
            return athletes;
        }
        return `Athlete with ID ${id} not found`;
    }

  
    function updateAthleteCountry(id, newCountry) {
        const athlete = athletes.find(athlete => athlete.id === id);
        if (athlete) {
            athlete.country = newCountry;
            return athletes;
        }
        return `Athlete with ID ${id} not found`;
    }

 
    return {
        getAthletesBySport,
        addAthlete,
        getAthleteById,
        removeAthleteById,
        updateAthleteMedals,
        updateAthleteCountry
    };
}
