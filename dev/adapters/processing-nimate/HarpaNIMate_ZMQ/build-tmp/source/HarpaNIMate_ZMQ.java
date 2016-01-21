import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import processing.opengl.*; 
import oscP5.*; 
import netP5.*; 
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

public class HarpaNIMate_ZMQ extends PApplet {






int harpaWidth = 77;
int harpaHeight = 13;

OscP5 oscP5;

float ballSize = 0.01f;
PImage sendImage;



Skeleton s = new Skeleton(1);

public void settings(){
  size(harpaWidth, harpaHeight, P2D); 
  
}

public void setup() {
    oscP5 = new OscP5(this, 7000);
    noStroke();
    translate(width/2.0f, height/2.0f);
    frameRate(25);
}



/* incoming osc message are forwarded to the oscEvent method. */
// Here you can easily see the format of the OSC messages sent. For each user, the joints are named with 
// the joint named followed by user ID (head0, neck0 .... r_foot0; head1, neck1.....)
public void oscEvent(OscMessage msg) {
  msg.print();
  
  if (true) {
    if (msg.addrPattern().equals("Head")) {
      s.headCoords[0] = msg.get(0).floatValue();
      s.headCoords[1] = msg.get(1).floatValue();
      s.headCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Neck")) {
      s.neckCoords[0] = msg.get(0).floatValue();
      s.neckCoords[1] = msg.get(1).floatValue();
      s.neckCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Right_Collar")) {
      s.rCollarCoords[0] = msg.get(0).floatValue();
      s.rCollarCoords[1] = msg.get(1).floatValue();
      s.rCollarCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Right_Shoulder")) {
      s.rShoulderCoords[0] = msg.get(0).floatValue();
      s.rShoulderCoords[1] = msg.get(1).floatValue();
      s.rShoulderCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Right_Elbow")) {
      s.rElbowCoords[0] = msg.get(0).floatValue();
      s.rElbowCoords[1] = msg.get(1).floatValue();
      s.rElbowCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Right_Wrist")) {
      s.rWristCoords[0] = msg.get(0).floatValue();
      s.rWristCoords[1] = msg.get(1).floatValue();
      s.rWristCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Right_Hand")) {
      s.rHandCoords[0] = msg.get(0).floatValue();
      s.rHandCoords[1] = msg.get(1).floatValue();
      s.rHandCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Right_Finger")) {
      s.rFingerCoords[0] = msg.get(0).floatValue();
      s.rFingerCoords[1] = msg.get(1).floatValue();
      s.rFingerCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Right_Collar")) {
      s.lCollarCoords[0] = msg.get(0).floatValue();
      s.lCollarCoords[1] = msg.get(1).floatValue();
      s.lCollarCoords[2] = msg.get(2).floatValue();
    }  
    else if (msg.addrPattern().equals("Left_Shoulder")) {
      s.lShoulderCoords[0] = msg.get(0).floatValue();
      s.lShoulderCoords[1] = msg.get(1).floatValue();
      s.lShoulderCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Left_Elbow")) {
      s.lElbowCoords[0] = msg.get(0).floatValue();
      s.lElbowCoords[1] = msg.get(1).floatValue();
      s.lElbowCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Left_Wrist")) {
      s.lWristCoords[0] = msg.get(0).floatValue();
      s.lWristCoords[1] = msg.get(1).floatValue();
      s.lWristCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Left_Hand")) {
      s.lHandCoords[0] = msg.get(0).floatValue();
      s.lHandCoords[1] = msg.get(1).floatValue();
      s.lHandCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Left_Finger")) {
      s.lFingerCoords[0] = msg.get(0).floatValue();
      s.lFingerCoords[1] = msg.get(1).floatValue();
      s.lFingerCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Torso")) {
      s.torsoCoords[0] = msg.get(0).floatValue();
      s.torsoCoords[1] = msg.get(1).floatValue();
      s.torsoCoords[2] = msg.get(2).floatValue();
    }
    else if (msg.addrPattern().equals("Right_Hip")) {
      s.rHipCoords[0] = msg.get(0).floatValue();
      s.rHipCoords[1] = msg.get(1).floatValue();
      s.rHipCoords[2] = msg.get(2).floatValue();
    } 
    else if (msg.addrPattern().equals("Right_Knee")) {
      s.rKneeCoords[0] = msg.get(0).floatValue();
      s.rKneeCoords[1] = msg.get(1).floatValue();
      s.rKneeCoords[2] = msg.get(2).floatValue();
    } 
    else if (msg.addrPattern().equals("Right_Ankle")) {
      s.rAnkleCoords[0] = msg.get(0).floatValue();
      s.rAnkleCoords[1] = msg.get(1).floatValue();
      s.rAnkleCoords[2] = msg.get(2).floatValue();
    } 
    else if (msg.addrPattern().equals("Right_Foot")) {
      s.rFootCoords[0] = msg.get(0).floatValue();
      s.rFootCoords[1] = msg.get(1).floatValue();
      s.rFootCoords[2] = msg.get(2).floatValue();
    } 
    else if (msg.addrPattern().equals("Left_Hip")) {
      s.lHipCoords[0] = msg.get(0).floatValue();
      s.lHipCoords[1] = msg.get(1).floatValue();
      s.lHipCoords[2] = msg.get(2).floatValue();
    } 
    else if (msg.addrPattern().equals("Left_Knee")) {
      s.lKneeCoords[0] = msg.get(0).floatValue();
      s.lKneeCoords[1] = msg.get(1).floatValue();
      s.lKneeCoords[2] = msg.get(2).floatValue();
    } 
    else if (msg.addrPattern().equals("Left_Ankle")) {
      s.lAnkleCoords[0] = msg.get(0).floatValue();
      s.lAnkleCoords[1] = msg.get(1).floatValue();
      s.lAnkleCoords[2] = msg.get(2).floatValue();
    } 
    else if (msg.addrPattern().equals("Left_Foot")) {
      s.lFootCoords[0] = msg.get(0).floatValue();
      s.lFootCoords[1] = msg.get(1).floatValue();
      s.lFootCoords[2] = msg.get(2).floatValue();
    } 
  }
}



public void draw()
{
  background(255,0,255);  
 
  fill(255);
  
  for (float[] j: s.allCoords) {
    ellipse((j[0] * width), ( j[1]*height), width * ballSize, width * ballSize);
  }
  
  BufferedImage b = new BufferedImage(harpaWidth,harpaHeight,BufferedImage.TYPE_INT_RGB);
  
  loadPixels();
  
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
class Skeleton {
  // We just use this class as a structure to store the joint coordinates sent by OSC.
  // The format is {x, y, z}, where x and y are in the [0.0, 1.0] interval, 
  // and z is in the [0.0, 7.0] interval.
  float headCoords[] = new float[3];
  float neckCoords[] = new float[3];
  float rCollarCoords[] = new float[3];
  float rShoulderCoords[] = new float[3];
  float rElbowCoords[] = new float[3];
  float rWristCoords[] = new float[3];
  float rHandCoords[] = new float[3];
  float rFingerCoords[] = new float[3];
  float lCollarCoords[] = new float[3];
  float lShoulderCoords[] = new float[3];
  float lElbowCoords[] = new float[3];
  float lWristCoords[] = new float[3];
  float lHandCoords[] = new float[3];
  float lFingerCoords[] = new float[3];
  float torsoCoords[] = new float[3];
  float rHipCoords[] = new float[3];
  float rKneeCoords[] = new float[3];
  float rAnkleCoords[] = new float[3];
  float rFootCoords[] = new float[3];
  float lHipCoords[] = new float[3];
  float lKneeCoords[] = new float[3];
  float lAnkleCoords[] = new float[3];
  float lFootCoords[] = new float[3];
  float[] allCoords[] = {headCoords, neckCoords, rCollarCoords, rShoulderCoords, rElbowCoords, rWristCoords,
                       rHandCoords, rFingerCoords, lCollarCoords, lShoulderCoords, lElbowCoords, lWristCoords,
                       lHandCoords, lFingerCoords, torsoCoords, rHipCoords, rKneeCoords, rAnkleCoords,
                       rFootCoords, lHipCoords, lKneeCoords, lAnkleCoords, lFootCoords};
                    
  int id; //here we store the skeleton's ID as assigned by OpenNI and sent through OSC.
  float colors[] = {255, 255, 255};// The color of this skeleton

  Skeleton(int id) {
    this.id = id;
    colors[0] = random(128, 255);
    colors[1] = random(128, 255);
    colors[2] = random(128, 255);
  }
}
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "HarpaNIMate_ZMQ" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
