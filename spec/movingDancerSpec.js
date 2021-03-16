describe('blinkyDancer', function() {

  var movingDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sizeDancer = new makeSizeDancer(10, 20, timeBetweenSteps)
    movingDancer = new makeMovingDancer(10, 20, timeBetweenSteps, [sizeDancer]);
    movingDancer2 = new makeMovingDancer(10, 20, timeBetweenSteps, []);
  });

  it('should have a jQuery $node object', function() {
    expect(movingDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(movingDancer.$node, 'toggle');
    movingDancer.step();
    expect(movingDancer.$node.toggle.called).to.be.true;
  });

  it('should find the nearest dancer', function() {
    sinon.spy(movingDancer.$node, 'toggle');
    movingDancer.step();
    expect(movingDancer.updateColor()).to.be.equal(sizeDancer);
  });

  it('should produce a ghost image if no other dancers are present', function() {
    sinon.spy(movingDancer2.$node, 'toggle');
    movingDancer2.step();
    expect(movingDancer2.$node.css('background-image')).to.be.equal('url("/imgs/ghost.png")');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(movingDancer, 'step');
      expect(movingDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(movingDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(movingDancer.step.callCount).to.be.equal(2);
    });
  });
});
