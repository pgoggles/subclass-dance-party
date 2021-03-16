var makeMovingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="movingDancer dancer"></span>');
  this.setPosition(top, left);
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;
makeMovingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};