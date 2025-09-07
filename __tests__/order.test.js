/**
 * Esse trabalho é do grupo G7 (Lucas, Jaine e Pedro)
 */

const { Order, Item } = require("../src/order");

describe("Teste 1:  criar item", () => {
  test("deve criar um pedido vazio", () => {
    // Cria um pedido simples
    const pedido = new Order(1);
    
    // Verifica se foi criado corretamente
    expect(pedido.id).toBe(1);
    expect(pedido.items).toEqual([]); // Lista vazia
    expect(pedido.status).toBe("created"); // Status inicial
    expect(pedido.total).toBe(0); // Total zerado
  });
});

//TESTE 2: Classe Item
describe("Teste 2: criar Item", () => {
  test("deve criar um item", () => {
    const pizza = new Item(1, "Pizza", 25.50);
    
    expect(pizza.id).toBe(1);
    expect(pizza.name).toBe("Pizza");
    expect(pizza.price).toBe(25.50);
  });
});

//TESTE 3: Adicionar Item
describe("Teste 3: Adicionar Item", () => {
  test("deve adicionar item ao pedido", () => {
    const pedido = new Order(1);
    const pizza = new Item(1, "Pizza", 25.50);
    
    pedido.addItem(pizza);
    
    expect(pedido.items.length).toBe(1);
    expect(pedido.total).toBe(25.50);
  });
});

//TESTE 4: Remover Item
describe("Teste 4: Remover Item", () => {
  test("deve remover item do pedido", () => {
    const pedido = new Order(1);
    const pizza = new Item(1, "Pizza", 25.50);
    
    pedido.addItem(pizza);
    pedido.removeItem(1);  // Remove pizza
    
    expect(pedido.items.length).toBe(0);
    expect(pedido.total).toBe(0);
  });
});
//TESTE 5: Pagamento - Sucesso
describe("Teste 5: Pagamento - Sucesso", () => {
  test("deve pagar pedido criado", () => {
    const pedido = new Order(1);
    
    pedido.pay();  // Deve funcionar
    
    expect(pedido.status).toBe("paid");
  });
});

//TESTE 6: Pagamento - Erro
describe("Teste 6: Pagamento - Erro", () => {
  test("deve dar erro ao pagar pedido já pago", () => {
    const pedido = new Order(1);
    pedido.pay();  // Paga primeiro
    
    // Tenta pagar novamente - deve dar erro
    expect(() => pedido.pay()).toThrow("Order cannot be paid");
  });
});

//TESTE 7: Completar Pedido - Sucesso
describe("Teste 7: Completar Pedido - Sucesso", () => {
  test("deve completar pedido pago", () => {
    const pedido = new Order(1);
    pedido.pay();        // Paga primeiro
    
    pedido.complete();   // Agora pode completar
    
    expect(pedido.status).toBe("completed");
  });
});


