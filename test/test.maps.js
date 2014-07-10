/* jshint expr: true */
describe('Urbis Map', function(){
  var expect = chai.expect, elem, map;

  beforeEach(function () {
    elem = $('<div> </div>')[0];
    map = new L.UrbisMap(elem);
  });

  it('should init', function(){
    expect(map.getContainer()).to.exist;
    expect($(elem).hasClass('leaflet-container')).equal(true);
    expect(map._container).equal(elem);
  });

  it('should load a layer', function(){
    expect(map.hasLayer('base-map-fr')).to.be.false;
    map.toggleLayer('base-map-fr');
    expect(map.hasLayer('base-map-fr')).to.be.true;

    map.toggleLayer('base-map-nl');
    expect(map.hasLayer('base-map-nl')).to.be.true;
  });

  it('should hide a layer', function(){
    expect(map.hasLayer('base-map-fr')).to.be.false;
    map.toggleLayer('base-map-fr');
    expect(map.hasLayer('base-map-fr')).to.be.true;

    map.toggleLayer('base-map-fr');
    expect(map.hasLayer('base-map-fr')).to.be.true;
    expect(map.getLayer('base-map-fr')).to.be.ok;
    expect($(map.getLayer('base-map-fr').getContainer()).is(':visible')).to.be.false;
  });
});
