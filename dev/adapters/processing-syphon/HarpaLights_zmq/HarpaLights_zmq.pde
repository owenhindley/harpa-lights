int harpaWidth = 77;
int harpaHeight = 13;

import codeanticode.syphon.*;

PImage img;
SyphonClient client;

HarpaImageSender sender;

void settings() {
  size(harpaWidth, harpaHeight, P3D);
  PJOGL.profile = 1;
  sender = new HarpaImageSender(3100, harpaWidth, harpaHeight);
  //byteBuffer = ByteBuffer.allocate(harpaWidth*harpaHeight * 4);
  //imgData = new int[harpaWidth * harpaHeight]; 
}

void setup() {
  //frameRate(1);
   client = new SyphonClient(this);
}

int colourIndex = 0;
int movementIndex =0;
void draw() {
  
   background(0);
  
   if (client.newFrame()) {
    img = client.getImage(img); // load the pixels array with the updated image info (slow)    
  }
  if (img != null) {
    image(img, 0, 0, width, height);  
  }
  
  // We need a buffered image to do the JPG encoding
 
  BufferedImage b = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);

  // Transfer pixels from localFrame to the BufferedImage
  loadPixels();
  b.setRGB( 0, 0, width, height, pixels, 0, width);
  
  sender.sendImage(b);

  //// Need these output streams to get image as bytes for UDP
  //ByteArrayOutputStream baStream = new ByteArrayOutputStream();
  //BufferedOutputStream bos = new BufferedOutputStream(baStream);

  //// JPG compression into BufferedOutputStream
  //// Requires try/catch
  //try {
  //  ImageIO.write(b, "png", bos);
  //} catch (IOException e) {
  //  e.printStackTrace();
  //}
  
  //sock.send(baStream.toByteArray(),0);
  
}

void keyPressed() {
  if (key == ' ') {
    client.stop();  
  } else if (key == 'd') {
    println(client.getServerName());
  }
}