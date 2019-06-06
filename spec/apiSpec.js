const frisby = require('frisby');

describe("API Testing",()=>{
    const config = require("./support/testConfig.json");
    const wikiBaseURL = config.integration.wikipediaServiceBaseUrl;
    const singlestoneBaseURL = config.integration.singlestoneBaseURL;

    describe("singlestone website",()=>{
        it("should send a response",()=>{
            frisby
            .get(singlestoneBaseURL)
            .then((response)=>{
                expect(response.status).toBe(200);
                console.log(response.body.getElementById("team-intelligence"));
                //expect(response.body.getElementById("team-intelligence"));
            })
        });
    });
    describe(" WIKI -> GET /page/summary/{title}", function() {
 
        it("should return the summary for the given page title", function(done) {
          frisby
            .get(wikiBaseURL + "/page/summary/Pikachu")
            .then(function(response) {
              expect(response.status).toBe(200);
              expect(response.json.title).toBe("Pikachu");
              expect(response.json.pageid).toBe(269816);
              expect(response.json.extract).toContain("Pokémon");
            })
            .done(done);
        });
     
      });
});
