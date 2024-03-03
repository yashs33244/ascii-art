// const density = '        .:░▒▓█';     
const density = 'Ñ@#W$9876543210?!abc;:+=-,._              ';      
// const density = '         .:-i|=+%O#@';

let video;
let asciiDiv;

function setup() {
  noCanvas();
  video = createCapture(video);
  video.size(200,100);
  asciiDiv = createDiv();
}

function draw(){
  video.loadPixels();
  let asciiImage = '';
  for(let j = 0; j< video.height; j++){
    for(let i = 0; i<video.width; i++){
      let pixelIndex = (i+ j*video.width)*4; // RGBA 4th value is alpha(transparency)
      let r = video.pixels[pixelIndex + 0];
      let g = video.pixels[pixelIndex + 1];
      let b = video.pixels[pixelIndex + 2];
      let avg = (r+g+b)/3;
      let len = density.length;
      let charIndex = floor(map(avg, 0, 255, 0, len));
      let c = density.charAt(charIndex);
      if(c == ' '){
        asciiImage += "&nbsp;";
      }else{
        asciiImage += c;
      }
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}