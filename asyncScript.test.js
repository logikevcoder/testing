const fetch = require("node-fetch");
const swapi = require("./asyncScript");

it("calls swapi to get people", (done) => {
  expect.assertions(0)
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    done();
  });
});

it("calls swapi to get people", (done) => {
  expect.assertions(0)
  swapi.getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
    done();
  });
});

