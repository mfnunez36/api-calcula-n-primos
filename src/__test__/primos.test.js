import request from 'supertest';
import operations from '../utils/operations'
import server from '../index';


describe('Listar Primos descendentes', () => {
    it('enviamos el numero 11', () => {
        expect(operations(11)).toEqual([11,7,5,3,2]);
    });
})

describe('POST /api/listarprimos', () => {
    it('Listar Primos descendentes', async () => {
        let num = { num:11 };
        const resp = await request(server).post('/api/listarprimos').send(num);
        expect(resp.error).toBe(false);
        expect(resp.status).toBe(200);
    });
})
