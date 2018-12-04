import { AccessPoint } from "../src/components/AccessPoint";

class Test {
	constructor() {
	}
	async runTest () {
		let result = await this.scanWifi();

		return result;
	}
	async scanWifi() {
		let ap = new AccessPoint();

		let results = await ap.scanWifi();
		return results;
	}
}

let test = new Test();
test.runTest();