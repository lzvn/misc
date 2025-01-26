from enum import Enum
class BuckCircuit:
    def __init__(self, vin=0, outin_ratio=0, frequency=1, capacitor=1, inductor=1, load=1):
        self._vin = vin # V
        self._outin_ratio = outin_ratio # V/V
        self._capacitor = capacitor # pF
        self._inductor = inductor # uH
        self._load = load # ohm
        self._frequency = frequency # kHz

    def getVin(self):
        return self._vin

    def setVin(self, vin):
        self._vin = vin

    def getOutInRatio(self):
        return self._outin_ratio

    def setOutInRatio(self, outin_ratio):
        self._outin_ratio = outin_ratio

    def getCapacitor(self):
        return self._capacitor

    def setCapacitor(self, capacitor):
        self._capacitor = capacitor

    def getInductor(self):
        return self._inductor

    def setInductor(self, inductor):
        self._inductor = inductor

    def getLoad(self):
        return self._load

    def setLoad(self, load):
        self._load = load

    def getFrequency(self):
        return self._frequency

    def setFrequency(self, frequency):
        self._frequency = frequency


    def getVout(self):
        return self._vin*self._outin_ratio # V

    def getIout(self):
        return self.getVout()/self._load # A

    def getVoutRipple(self):
        return (10**6)*self.getIoutRipple()/(8*self._capacitor*self._frequency) # V

    def getIoutRipple(self):
        return 1000*self.getVout()*(1 - self._outin_ratio)/(self._inductor*self._frequency) # A

    def getOperationMode(self):
        condition = (1-self._outin_ratio)*self._outin_ratio/(2*self.getIout()) if self.getIout()>0 else 0
        return OpMode.CONTINUOUS if condition>=1 else OpMode.DISCONTINUOUS


class OpMode(Enum):
    CONTINUOUS = 0
    DISCONTINUOUS = 1
