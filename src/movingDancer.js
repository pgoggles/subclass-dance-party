var makeMovingDancer = function(top, left, timeBetweenSteps, allDancers) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.allDancers = allDancers;
  this.$node = $('<span class="movingDancer dancer"></span>');
  this.setPosition(top, left);
  this.updateColor();
};

makeMovingDancer.prototype = Object.create(makeDancer.prototype);
makeMovingDancer.prototype.constructor = makeMovingDancer;
makeMovingDancer.prototype.step = function () {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

makeMovingDancer.prototype.updateColor = function () {
  if (this.allDancers.length === 0) {
    this.$node.css('border-color', 'white');
  } else {
    var nearestDancer = this.allDancers[0];
    var closestDistance = this.calculateDistance(this.allDancers[0].top, this.allDancers[0].left);
    for (var i = 1; i < this.allDancers.length; i++) {
      newDistance = this.calculateDistance(this.allDancers[i].top, this.allDancers[i].left);
      if (newDistance < closestDistance) {
        closestDistance = newDistance;
        nearestDancer = this.allDancers[i];
      }
    }
    var nearestColor = nearestDancer.$node.css('border-color');
    this.$node.css('border-color', nearestColor);
  }
};

makeMovingDancer.prototype.calculateDistance = function (toTop, toLeft) {
  return Math.sqrt(Math.pow((toTop - this.top), 2) + Math.pow((toLeft - this.left), 2));
};