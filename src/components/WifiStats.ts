import * as nodeWifi from 'node-wifi';

interface INetworkScanResp {
  ssid: string,
  bssid: string,
  mac: string, // equals to bssid (for retrocompatibility)
  channel: number,
  frequency: number, // in MHz
  signal_level: number, // in dB
  quality: number, // same as signal level but in %
  security: string, //'WPA WPA2' // format depending on locale for open networks in Windows
  security_flags: string // encryption protocols (format currently depending of the OS)
  mode: string // network mode like Infra (format currently depending of the OS)
}

export class WifiStats {
  constructor() {
    // Initialize wifi module
    // Absolutely necessary even to set interface to null
    nodeWifi.init({
      iface: null // network interface, choose a random wifi interface if set to null
    });
  }

  async scan() {
    let result;

    result = await nodeWifi.scan();
        /*
        networks = [
            {
              ssid: '...',
              bssid: '...',
              mac: '...', // equals to bssid (for retrocompatibility)
              channel: <number>,
              frequency: <number>, // in MHz
              signal_level: <number>, // in dB
              quality: <number>, // same as signal level but in %
              security: 'WPA WPA2' // format depending on locale for open networks in Windows
              security_flags: '...' // encryption protocols (format currently depending of the OS)
              mode: '...' // network mode like Infra (format currently depending of the OS)
            },
            ...
        ];
        */

    return result;
  }
}
