import PhoneCameraApp from "./PhoneCameraApp";
import WhatsAppShare from "./WhatsAppShare";

class CameraPlusApp extends PhoneCameraApp {
  constructor() {
    super();
    this.shareType = new WhatsAppShare();
  }
  edit(): string {
    return "CameraPlusApp: Edit...";
  }
}

export default CameraPlusApp;
