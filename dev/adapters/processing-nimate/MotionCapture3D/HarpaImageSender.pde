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
  
  void sendImage(BufferedImage img) {
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