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
    const pizza = new Item(1, "Pizza", 25.5);

    expect(pizza.id).toBe(1);
    expect(pizza.name).toBe("Pizza");
    expect(pizza.price).toBe(25.5);
  });
});

//TESTE 3: Adicionar Item
describe("Teste 3: Adicionar Item", () => {
  test("deve adicionar item ao pedido", () => {
    const pedido = new Order(1);
    const pizza = new Item(1, "Pizza", 25.5);

    pedido.addItem(pizza);

    expect(pedido.items.length).toBe(1);
    expect(pedido.total).toBe(25.5);
  });
});

//TESTE 4: Remover Item
describe("Teste 4: Remover Item", () => {
  test("deve remover item do pedido", () => {
    const pedido = new Order(1);
    const pizza = new Item(1, "Pizza", 25.5);

    pedido.addItem(pizza);
    pedido.removeItem(1); // Remove pizza

    expect(pedido.items.length).toBe(0);
    expect(pedido.total).toBe(0);
  });
});

//TESTE 8: Completar Pedido - Erro
describe("Teste 8: Completar Pedido - Erro", () => {
  test("deve dar erro ao completar pedido não pago", () => {
    const pedido = new Order(1); // Status = "created"

    // Tenta completar sem pagar - deve dar erro
    expect(() => pedido.complete()).toThrow(
      "Order must be paid before it can be completed"
    );
  });
});

//TESTE 9: Cancelar Pedido - Sucesso
describe("Teste 9: Cancelar Pedido - Sucesso", () => {
  test("deve cancelar pedido criado", () => {
    const pedido = new Order(1); // Status = "created"

    pedido.cancel(); // Deve funcionar

    expect(pedido.status).toBe("cancelled");
  });
});

//TESTE 10: Cancelar Pedido completado

describe("Teste 10: Cancelar Pedido completado - Erro", () => {
  test("deve dar erro ao cancelar pedido completado", () => {
    const pedido = new Order(1);
    pedido.pay();
    pedido.complete(); // Status = "completed"

    // Tenta cancelar pedido completado - deve dar erro
    expect(() => pedido.cancel()).toThrow(
      "Completed order cannot be cancelled"
    );
  });
});
