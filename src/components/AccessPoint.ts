import { WifiStats } from "./WifiStats";


export class AccessPoint {
	setup () {

	}

	run () {

	}

	async scanWifi (...args) {
		let wifiStats = new WifiStats();
		return await wifiStats.scan();
	}
}
