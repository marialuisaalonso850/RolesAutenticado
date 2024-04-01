const request = require('supertest');
const app = require('../index'); 
const User = require('../src/models/user');

describe('createUser', () => {
  test('debería crear un nuevo usuario y devolverlo', async () => {
    const newUser = {
      username: 'testuser',
      gmail: 'test@example.com',
      password: 'Testpassword1',
      role: 'cliente',
    };

    const response = await request(app)
      .post('/api/user') // Reemplaza 'ruta_de_tu_api' con la ruta correcta a tu endpoint createUser
      .send(newUser)
      .expect(200);

    // Verifica que el usuario devuelto tenga los mismos datos que el usuario enviado
    expect(response.body).toMatchObject(newUser);

    // Verifica que el usuario fue creado en la base de datos
    const createdUser = await User.findOne({ gmail: 'test@example.com' });
    expect(createdUser).toBeTruthy();
  });

  // Puedes agregar más pruebas para casos de error, como enviar datos incorrectos o faltantes
});
