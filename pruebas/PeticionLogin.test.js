const request = require('supertest');
const app = require('../index'); // Reemplaza 'tu_app' con la ruta correcta a tu aplicación Express

describe('GET', () => {
    test('la peticiones del get son correctas', async () => {
        const response = await request(app)
            .get('/') 
            .send({});

        expect(response.status).toBe(200);
        
    });

    test('la respusta del point es correcta', async () => {
        
        const response = await request(app)
        .get('/') 
        .send({});

       
        expect(response.status).toBe(200);
       
       
    });

    describe('POST', () => {
        test('ingresar datos a login', async () => {
            const response = await request(app)
            .post('/api/login')
            .send({
                "gmail": "marialuisaalonso850@gmail.com",
                "password": "Fernanda5892"
            })
    
            expect(response.statusCode).toBe(201);

            
        });
    });

})