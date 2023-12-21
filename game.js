const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: {
    preload: preload,
    create: create,
  },
};

const game = new Phaser.Game(config);
let circle;



function preload() {
  // Load your GIF file
  this.load.image('background', 'background.gif');
}

function create() {
  // Create an image from the loaded GIF
  const backgroundImage = this.add.image(
    window.innerWidth / 2,
    window.innerHeight / 2,
    'background'
  );
    // Create a small circle at the bottom of the screen
    circle = this.add.circle(
      window.innerWidth / 2,
      window.innerHeight - 30,
      10,
      0xff0000
    );
  
    // Set the circle as interactive to respond to user input
    circle.setInteractive();
  
    // Register the device orientation event
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientationabsolute', handleOrientation, false);
    }
  }
  
  function handleOrientation(event) {
    const rotation = event.alpha; // Use alpha for rotation angle in degrees
  
    const radius = window.innerWidth / 4;
  
    const x = window.innerWidth / 2 + radius * Math.sin((rotation * Math.PI) / 180);
    const y = window.innerHeight - 30 - radius * Math.cos((rotation * Math.PI) / 180);
  
    circle.setPosition(x, y);
  }
    // Set the circle as interactive to respond to user input
    circle.setInteractive();

  // Set the display size to fill the screen horizontally while maintaining aspect ratio
  backgroundImage.displayWidth = window.innerWidth;
  backgroundImage.displayHeight = (window.innerWidth / backgroundImage.width) * backgroundImage.height;

  function update() {
    // Update the position of the circle based on device orientation
    if (this.input.manager.touch && this.input.manager.touch.rotationAngle) {
      const rotation = this.input.manager.touch.rotationAngle;
      const radius = window.innerWidth / 4;
  
      const x = window.innerWidth / 2 + radius * Math.sin(rotation);
      const y = window.innerHeight - 30 - radius * Math.cos(rotation);
  
      circle.setPosition(x, y);
    }
  }
 

