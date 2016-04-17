from socketIO_client import SocketIO
from time import sleep

with SocketIO('localhost', 3000) as socketIO:
	while True:
		socketIO.emit('lighting', {'level': 'DARK'})
		sleep(5)
		socketIO.emit('lighting', {'level': 'BRIGHT'})
		sleep(5)
