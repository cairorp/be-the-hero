const connection = require('../database/connection')

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await connection('incident')
        .select('*')
        .where('ong_id', ong_id);

        return response.json(incidents);
    }
}