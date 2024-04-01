const request = require('supertest');
const app = require('../index');

describe('POST', () => {
    test('ingresar datos a post', async () => {
        const response = await request(app)
        .post('/api/posts')
        .send({
    
            "title" :"parqueaderoNuevo",
            "content":"Parqueadero lindo y amigable",
            "horarios":"24h",
            "tarifaCarro":6486,
            "tarifaMoto":2589,
            "telefono":"3108661265",
            "nosotros":"Bonito",
            "latitud":"34.052235",
            "longitud":"-118.243683",
            "puestos":2
        })
    
    });
});

