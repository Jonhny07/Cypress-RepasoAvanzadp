describe("Crear Producto", () => {
  const texto = "abcdefghijklmnoo";
  const posicion = texto.lastIndexOf("o");
  const directorioName = __dirname;
  const module = directorioName.split(/[/]/)[2]; // ["", "home", "usuario", "proyecto"]
  const scenarioName = directorioName
  .slice(directorioName.lastIndexOf("/") + 1)
  .split("-")
  .slice(0, -1)
  .join("-");

const texto1 = "Hola, mundo!";
const resultado = texto1.slice(0, 5);


 // cypress\e2e\online-shop\create-product-1034

  it("passes", () => {
    //cy.log(posicion); // 20
    cy.log(directorioName)
    cy.log(module)
    cy.log(scenarioName)
    cy.log(posicion)

    //cy.log(resultado)
  });
});
