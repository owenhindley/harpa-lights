import processing.opengl.*;

import oscP5.*;
import netP5.*;

int harpaWidth = 77;
int harpaHeight = 13;

OscP5 oscP5;

float ballSize = 0.02;
PImage sendImage;

HarpaImageSender sender;

Skeleton s = new Skeleton(1);

void settings(){
  size(harpaWidth, harpaHeight, P2D); 
  
}

void setup() {
    oscP5 = new OscP5(this, 7000);
    noStroke();
    translate(width/2.0, height/2.0);
    frameRate(50);
    //scale(1,-1);
    sender = new HarpaImageSender(3100, width, height);
}



/* incoming osc message are forwarded to the oscEvent method. */
// Here you can easily see the format of the OSC messages sent. For each user, the joints are named with 
// the joint named followed by user ID (head0, neck0 .... r_foot0; head1, neck1.....)
void oscEvent(OscMessage msg) {
  //msg.print();
  
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



void draw()
{
  background(0,0,0);  
 
  fill(255);
  
  pushMatrix();
  scale(1.0,-1.0);
  for (float[] j: s.allCoords) {
    ellipse((j[2] * width), ( j[1]*height), 2,2);
    //rect((j[0] * width), ( j[1]*height), 1,1);
  }
  
  popMatrix();
  //rotateZ(180);
  BufferedImage b = new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
  
  loadPixels();
  b.setRGB( 0, 0, width, height, pixels, 0, width);
  
  sender.sendImage(b);
  
}