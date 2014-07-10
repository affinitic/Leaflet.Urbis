
describe('Urbis Map', function(){
    var expect = chai.expect, elem, map;
    beforeEach(function () {
        elem = $('<div> </div>')[0];
        map = new L.UrbisMap(elem);
    });
    it('should init', function(){
        expect(map).to.have.property('_container');
        expect($(elem).hasClass('leaflet-container')).equal(true);
        expect(map._container).equal(elem);
    });

    it('should load a layer', function(){
        map.loadLayer('base-map-fr');
    });
});
