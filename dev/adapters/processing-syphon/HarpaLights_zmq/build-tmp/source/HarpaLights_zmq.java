import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import codeanticode.syphon.*; 
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

import org.apache.commons.codec.binary.*; 
import org.apache.commons.codec.*; 
import org.apache.commons.codec.digest.*; 
import org.apache.commons.codec.language.*; 
import org.apache.commons.codec.language.bm.*; 
import org.apache.commons.codec.net.*; 
import org.zeromq.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class HarpaLights_zmq extends PApplet {

int harpaWidth = 77;
int harpaHeight = 13;



PImage img;
SyphonClient client;

HarpaImageSender sender;

public void settings() {
  size(harpaWidth, harpaHeight, P3D);
  PJOGL.profile = 1;
  sender = new HarpaImageSender(3000, harpaWidth, harpaHeight);
  //byteBuffer = ByteBuffer.allocate(harpaWidth*harpaHeight * 4);
  //imgData = new int[harpaWidth * harpaHeight]; 
}

public void setup() {
  //frameRate(1);
   client = new SyphonClient(this);
}

int colourIndex = 0;
int movementIndex =0;
public void draw() {
  
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

public void keyPressed() {
  if (key == ' ') {
    client.stop();  
  } else if (key == 'd') {
    println(client.getServerName());
  }
}
  












class HarpaImageSender {
  
  ZMQ.Context context;
  ZMQ.Socket sock;
  
  ByteBuffer byteBuffer;
  IntBuffer intBuffer;
  
  // ByteArrayOutputStream baStream;
//   BufferedOutputStream bos;
  
  int portNumber;
  
  HarpaImageSender(int port, int sendWidth, int sendHeight) {
    portNumber = port; 
    context = ZMQ.context(1);
    sock = context.socket(ZMQ.PUSH);
    sock.bind("tcp://127.0.0.1:" + port);
    byteBuffer = ByteBuffer.allocate(sendWidth*sendHeight * 4);
    // Need these output streams to get image as bytes for UDP
  //  baStream = new ByteArrayOutputStream();
    //bos = new BufferedOutputStream(baStream);
  }
  
  public void sendImage(BufferedImage img) {
    // JPG compression into BufferedOutputStream
    // Requires try/catch
    
    ByteArrayOutputStream baStream = new ByteArrayOutputStream();
    BufferedOutputStream bos = new BufferedOutputStream(baStream);
    
    try {
      ImageIO.write(img, "png", bos);
    } catch (IOException e) {
      e.printStackTrace();
    }
    
   sock.send(baStream.toByteArray(),0);
    
  }
  
  
  
  
  
  
  
}
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "HarpaLights_zmq" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
