from socketIO_client import SocketIO
import serial
import sys
import re

ser = serial.Serial('/dev/tty.usbmodemFD121', 9600)
light_level = ''

with SocketIO('localhost', 3000) as socketIO:
	while True:
		line = ser.readline().replace('\r\n','')
		print line
		
		if (re.match('LIGHTING.*', line)):
			level = line.replace('LIGHTING ','')
			if level != light_level:
				light_level = level
				socketIO.emit('lighting', {'level': light_level})

