
it('GET / Devuelve un código 200', (done) => {
 chai.request(mainURL)
 .get('')
 .end( function(err,res){
 expect(res).to.have.status(200);
 done();
 });
});