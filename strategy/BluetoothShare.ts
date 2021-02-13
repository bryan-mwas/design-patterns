import ShareStrategy from "./ShareStrategy";

class BluetoothShare implements ShareStrategy {
  share(): string {
    return "Bluetooth: Sharing...";
  }
}

export default BluetoothShare;
