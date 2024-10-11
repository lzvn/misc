#include <SoftwareSerial.h>

#define ESP_BAUD 115200
#define SERIAL_BAUD 115200
 
//RX pino 2, TX pino 3
SoftwareSerial esp8266(2, 3);
 
void setup() {
	Serial.begin(SERIAL_BAUD);
	esp8266.begin(ESP_BAUD);

	Serial.println(F("Inicio do teste, digite o comando AT para interagir com o ESP8266"));
}
 
void loop() {
	if(Serial.available()) {
		String command = "";
		while(Serial.available()) {
      command+=Serial.readStringUntil('\n');
		}
		command+="\r\n";
    Serial.print(command);
		esp8266.print(command);
		esp8266.flush();
    Serial.println(F("Comando enviado"));
	}
	if(esp8266.available()) {
    Serial.println(F("Resposta recebida"));
		String response = "";
		while(esp8266.available()) response+=Serial.read();
		Serial.println(response);
		Serial.flush();
	}
}
