import ShareStrategy from "./ShareStrategy";

abstract class PhoneCameraApp {
  abstract edit(): string;
  shareType!: ShareStrategy;

  share(): string {
    return this.shareType.share();
  }

  take(): string {
    return "Taking photo...";
  }

  save(): string {
    return "Saving photo...";
  }
}

export default PhoneCameraApp;
