import panya
import time
import serial

directions = {'forward': 'w', 'reverse': 's', 'left': 'a', 'right': 'd'}
ser = None

def init():
    global ser
    try:
        ser = serial.Serial('/dev/ttyUSB0', 9600)
        return True
    except:
        return False

def endit():
    global ser
    ser.close()
    ser = None

def PanyaMove(dire,temp):
    global directions
    if init():
        ser.write(directions[dire])
    else:
        return False
    endit()
    time.sleep(temp)
    if init():
        ser.write('q')
        endit()
        return True
    else:
        return False

def PanyaTurn(dire):
    global directions
    if init():
        ser.write(directions[dire])
        endit()
        return True
    else:
        return False

def PanyaSetSpeed(vel):
    if init():
       #Will implement this spec once arduino s/w is working
        pass
        return True
    else:
        return False

def PanyaStop():
    if init():
        ser.write('q')
        endit()
        return True
    else:
        return False
