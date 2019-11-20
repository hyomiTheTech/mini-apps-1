module.exports = {
    makeCsv: (data) => {
        var result = 'firstName,lastName,county,city,role,sales\n';

        var collectData = (person) => {

            var personProfile = ''

            var keys = ['firstName', 'lastName', 'county', 'city', 'role', 'sales']

            for (var i = 0; i < keys.length; i++) {
                personProfile += `${person[keys[i]]},`
            }

            var newPerson = personProfile.substring(0, personProfile.length - 1)

            newPerson += '\n'

            result += newPerson

            if (person['children'].length > 0) {
                for (var j = 0; j < person['children'].length; j++) {
                    collectData(person['children'][j])
                }
            }
        }
        collectData(data)
        return result
    }
}
