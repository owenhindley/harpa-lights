int harpaWidth = 77;
int harpaHeight = 13;

import org.apache.commons.codec.binary.Base64;  
import org.zeromq.*;
import java.io.ByteArrayOutputStream;
import java.io.BufferedOutputStream;
import java.awt.image.BufferedImage;
import java.awt.image.WritableRaster;
import java.awt.Robot;
import java.awt.Rectangle;
import javax.imageio.ImageIO;
import java.net.*;
import java.io.*;
import java.nio.*;
  

ZMQ.Context context = ZMQ.context(1);
ZMQ.Socket sock = context.socket(ZMQ.PUSH);

ByteBuffer byteBuffer;
IntBuffer intBuffer;

void setup() {
  //frameRate(1);
}

void settings() {
  size(harpaWidth, harpaHeight, P3D);
  
  sock.bind("tcp://127.0.0.1:3100");
  byteBuffer = ByteBuffer.allocate(harpaWidth*harpaHeight * 4);
  //imgData = new int[harpaWidth * harpaHeight]; 
}

int colourIndex = 0;

void draw() {
  
  colourIndex++;
  colourIndex = colourIndex % 255;
  background(255, colourIndex, 255 - colourIndex); 
  
  // We need a buffered image to do the JPG encoding
 
  BufferedImage b = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);

  // Transfer pixels from localFrame to the BufferedImage
  loadPixels();
  b.setRGB( 0, 0, width, height, pixels, 0, width);

  // Need these output streams to get image as bytes for UDP
  ByteArrayOutputStream baStream = new ByteArrayOutputStream();
  BufferedOutputStream bos = new BufferedOutputStream(baStream);

  // JPG compression into BufferedOutputStream
  // Requires try/catch
  try {
    ImageIO.write(b, "png", bos);
  } catch (IOException e) {
    e.printStackTrace();
  }
  
  sock.send(baStream.toByteArray(),0);
  
}