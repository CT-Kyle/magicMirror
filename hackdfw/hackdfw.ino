
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
  if (pressureVal > 1000) {
    Serial.println("PRESS ON");
  } else {
    Serial.println("PRESS OFF");
  }
  
  motionVal = analogRead(motionPin);
  if (motionVal > 0) {
    Serial.println("MOTION");
  }

  lightVal = analogRead(lightPin);    // read the input pin
  //Interrpret Light values
  if (lightVal <= 5) {
    Serial.println("LIGHTING DARK");
  } else if (lightVal <= 20) {
    Serial.println("LIGHTING DIM");
  } else if (lightVal <= 100) {
    Serial.println("LIGHTING MODERATE");
  } else {
    Serial.println("LIGHTING BRIGHT");
  }
  Serial.println(lightVal);
  delay(500);
}
