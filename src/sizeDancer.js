var makeSizeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="sizeDancer dancer"></span>');
  this.setPosition(top, left);
};

makeSizeDancer.prototype = Object.create(makeDancer.prototype);
makeSizeDancer.prototype.constructor = makeSizeDancer;
makeSizeDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};