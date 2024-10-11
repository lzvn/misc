#define LED 13
#define DELAY 1000

void setup() {
	Serial.begin(9600);
	pinMode(LED, HIGH);
}

void loop() {
	Serial.println("Hello, World!");
	digitalWrite(LED, !digitalRead(LED));
	delay(DELAY);
}
