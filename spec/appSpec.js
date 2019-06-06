describe(' App Testing DOM manipulation', function(){
    let app, item, item2;
    beforeEach(function(){
        todo = new ToDo();
        item = {
          id: 1,
          title: "get milk 1",
          complete: false
         }
         item2 = {
          id: 2,
          title: "get milk 2",
          complete: false
         }   
      })
   xit("should initialize HTML", ()=>{
        const form = document.createElement('form');
   });
});