let noise;
let playButton, stopButton, chooseNoise, setVolume, toggleOnOff;
let fft;

function setup() {
	createCanvas(400, 200);
	noise = new p5.Noise();
	noise.amp(0);

	fft = new p5.FFT();

	toggleOnOff = createButton('play');
	toggleOnOff.position(10, 10).style('font-family', 'courier');
	toggleOnOff.mousePressed(() => {
		if (noise.started) {
			noise.stop();
			toggleOnOff.html('play');
		} else {
			noise.start();
			toggleOnOff.html('stop');
		}
	})

	chooseNoise = createSelect();
	chooseNoise.position(60, 10).style('font-family', 'courier');
	chooseNoise.option('white');
	chooseNoise.option('pink');
	chooseNoise.option('brown');
	chooseNoise.changed(() => {
		noise.setType(chooseNoise.value());
	});

	setVolume = createSlider(0, 1, 0, 0);
	setVolume.position(130, 10);
	setVolume.input(() => {
		noise.amp(setVolume.value(), 0.01);
	})
}

const draw = () => {
	background(80);
}