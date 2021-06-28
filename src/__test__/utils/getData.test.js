import getData from '../../utils/getData';

describe('Fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks();
    });

    test('Llamar a una API y retornar datos', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        getData('http://192.168.40.2:4600/verificarFConexion')
            .then((response) => {
                expect(response.data).toEqual('12345');
            });
        expect(fetch.mock.calls[0][0]).toEqual('http://192.168.40.2:4600/verificarFConexion');
    });
});