
describe('Urbis Map', function(){
    var expect = chai.expect;
    it('should init', function(){
        var elem = $('<div> </div>');
        var map = new L.UrbisMap(elem[0]);
        map.loadUrbisLayer();

        // ...
        // expect(map).to.have.property('...');
    });
});
