const request = require('supertest');
const app = require('../index'); // Reemplaza 'tu_app' con la ruta correcta a tu aplicación Express


    describe('POST', () => {
        test('ingresar reserva', async () => {
            const response = await request(app)
            .post('/api//reservasUser')
            .send({
            "date": '01/01/2022', // Aquí debes poner el formato esperado de la fecha
            "time": '12:00 PM',
            "nombre": 'Juan',
            "correo": 'juan@example.com',
            "placa": 'ABC123',
            "telefono": '123456789',
            })
    
            
        });
    });

