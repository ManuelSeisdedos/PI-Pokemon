const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({ name: "Pikachu" });
      });
      it("should throw an error if name is not a string", async () => {
        try {
          await Pokemon.create({
            name: 123,
            image: "",
            type: ["Normal"],
            vida: "1",
            ataque: "1",
            defensa: "1",
            velocidad: "1",
            altura: "1",
            peso: "1",
          });
        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});
