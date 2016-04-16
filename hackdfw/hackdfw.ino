
int lightPin = A1;  //init pins
int motionPin = A0;
int pressurePin = A2;

int lightVal = 0;   // variable to store the light value read
int motionVal = 0;  // variable to store the motion value read
int pressureVal = 0; // variable to store the pressure value read


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {

  pressureVal = analogRead(pressurePin);
  motionVal = analogRead(motionPin);
  lightVal = analogRead(lightPin);    // read the input pin
  if (pressureVal > 300) {
    Serial.println("SENSOR PRESSED");
  }
  if (motionVal > 0) {
    Serial.println("MOTION DETECTED");
  }

  //Interrpret Light values
  if (lightVal <= 5) {
    Serial.println("DARK LIGHTING");       
  } else if (lightVal <= 20 && lightVal > 5) {
    Serial.println("DIM LIGHTING");
  } else if (lightVal <= 50 && lightVal > 20) {
    Serial.println("MODERATE LIGHTING");
  } else {
    Serial.println("BRIGHT LIGHTING");
  }
  delay(500);
  
}
