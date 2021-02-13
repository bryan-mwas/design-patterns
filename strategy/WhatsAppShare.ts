import ShareStrategy from "./ShareStrategy";

class WhatsAppShare implements ShareStrategy {
  share(): string {
    return "Whatsapp sharing...";
  }
}

export default WhatsAppShare;
