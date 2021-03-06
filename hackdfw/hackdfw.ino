
int lightPin = A1;  //init pins
int motionPin = A0;
int pressurePin = A2;

int lightVal = 0;   // variable to store the light value read
int motionVal = 0;  // variable to store the motion value read
int pressureVal = 0; // variable to store the pressure value read

int burst_length = 15; // number of readings to average

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  pressureVal = 0;
  lightVal = 0;
  for (int i = 0; i < burst_length; ++i) {
    pressureVal += analogRead(pressurePin);
    lightVal += analogRead(lightPin);
  }
  
  pressureVal = pressureVal / burst_length;
  lightVal = lightVal / burst_length;
  
  if (pressureVal > 300) {
    Serial.println("PRESS ON");
  } else {
    Serial.println("PRESS OFF");
  }
  delay(10);
  
  motionVal = analogRead(motionPin);
  if (motionVal > 0) {
    Serial.println("MOTION");
  }
  delay(10);

//  //Interrpret Light values
  if (lightVal <= 10) {
    Serial.println("LIGHTING DARK");
  } else if (lightVal <= 20) {
    Serial.println("LIGHTING DIM");
  } else if (lightVal <= 100) {
    Serial.println("LIGHTING MODERATE");
  } else {
    Serial.println("LIGHTING BRIGHT");
  }
  delay(500);
}
