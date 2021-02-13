import BluetoothShare from "./BluetoothShare";
import PhoneCameraApp from "./PhoneCameraApp";

class BasicCameraApp extends PhoneCameraApp {
  constructor() {
    super();
    this.shareType = new BluetoothShare();
  }

  edit(): string {
    return "BasicCameraApp: Editing...";
  }
}

export default BasicCameraApp;
