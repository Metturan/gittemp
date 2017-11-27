export function effect() {

	if (!window.requestAnimationFrame) {
	 window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||
	 window.mozRequestAnimationFrame ||
	 window.oRequestAnimationFrame ||
	 window.msRequestAnimationFrame ||
	 function (callback) {
	 return window.setTimeout(callback, 1000/60);
	 });
	} 

	var canvas = document.getElementById('bubble');
	var ctx = canvas.getContext('2d');

	// var divider = 4;
	var cw = canvas.width = window.innerWidth;
	var canvasWidth = window.innerWidth * 0.6;
	var ch = canvas.height = window.innerHeight;

	var pi2 = Math.PI * 2;
	var blips = [];
	// var initialBlips = 30;
	var globalTick = 0;

	var rand = function(min, max){
		return Math.floor((Math.random() * (max - min + 1))  + min);
	};

	var Blip = function(x, y) {
		this.x = x;
		this.y = y;
		this.r = 0.1;
		this.rGrowthBase = 1;
		this.rGrowth = this.rGrowthBase;
		this.rMax = (cw + ch) / 21;
		return this.alpha = 1;
	};

	Blip.prototype.update = function(i) {
		var percent;
		percent = (this.rMax - this.r) / this.rMax;
		this.rGrowth = 0.1 + this.rGrowthBase * percent;
		this.r += this.rGrowth;
		this.alpha = percent;
		if (this.r > this.rMax) {
			return blips.splice(i, 1);
		}
	}

	Blip.prototype.render = function(i) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.r, 0, pi2, false);
		ctx.fillStyle = 'hsla(' + rand(globalTick - 80, globalTick + 80) + ', 50%, 1%, ' + this.alpha + ')';
		return ctx.fill();
	}

	var clear = function() {
		ctx.globalCompositeOperation = 'destination-out';
		ctx.fillStyle = 'hsla(0, 0%, 0%, 0.05)';
		ctx.fillRect(0,0,cw,ch);
		return ctx.globalCompositeOperation = 'lighter';
	}

  var run = function() {
    var i;
    window.requestAnimationFrame(run, canvas);
    clear();
    i = blips.length;
    while (i--) {
      blips[i].update(i);
    }
    i = blips.length;
    while (i--) {
      blips[i].render(i);
    }
    blips.push(new Blip(rand(0, canvasWidth), rand(0, ch)));
    return globalTick++;
  };

  window.addEventListener('resize', function() {
    cw = canvas.width = window.innerWidth;
    return ch = canvas.height = window.innerHeight;
  })

  run();
}