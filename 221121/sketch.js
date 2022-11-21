var face_x = []
var face_y =[]
var face_size =[]
var face_num
var song
var songIsplay=false//音樂沒有撥放，true放音樂
var amp

//function preload(){
  //song = loadSound("Poolside Radio - Dyalla.mp3");
//}


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  // face_size = 400
  // face_x = width/2
  // face_y = height/2
  face_num =6
  for (var i =0;i<face_num;i++){
    face_size[i] = random(200,300)
    face_x[i] = random(100,width)
    face_y[i] = random(100,height)
  }

}



function draw() {
  background(220);
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++)
  {
    push()  
      // fill(255,0,0)
      translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
      let f_s = face_size[j]
      ellipse(0,0,f_s)  //臉
      fill("#BBFF66")
      ellipse(0,0,f_s/2,f_s/4) //鼻子橢圓
      fill("#CC6600")
      ellipse(-f_s/10,0,f_s/12) //左鼻孔
      fill("#0088A8")
      ellipse(f_s/10,0,f_s/12) //右鼻孔
      fill("#FF3EFF")
      //左眼
      ellipse(-f_s/5,-f_s/5,f_s/7)
      fill("#007799")
      ellipse(-f_s/4.5+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/4.5+map(mouseY,0,height,-f_s/40,f_s/12),f_s/20)
      noFill()
      //右眼
      ellipse(f_s/5,-f_s/5,f_s/7)
      fill("#5599FF")
      ellipse(f_s/5.8+map(mouseX,0,width,-f_s/40,f_s/12),-f_s/4.5+map(mouseY,0,height,-f_s/40,f_s/12),f_s/20)
      
      fill(255,0,0)
      arc(0,f_s/4,f_s/2,f_s/4,0,180)  //下弧
      fill(255)
      if(mouseIsPressed)
      {   //mouseIsPressed為true，代表有按下滑鼠
        // arc(0,f_s/4-1,f_s/2,f_s/10,0,180)   //上弧
      }
      else
      {   //mouseIsPressed為false，代表沒有按下滑鼠
        arc(0,f_s/4-1,f_s/2,f_s/4-10,0,180) //上弧
      }
      
      noFill()
    pop()
  }
}
function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}