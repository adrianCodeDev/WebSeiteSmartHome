import DeviceCard from "../../components/DeviceCard/DeviceCard.vue";
import devicesData from "../../data/devices.json";

export default {
  name: "Dashboard",
  components: {
    DeviceCard,
  },
  data() {
    return {
      devices: devicesData, // Daten aus der JSON-Datei
      newDeviceName: "", // Speichert den Eingabewert für neue Geräte
    };
  },
  mounted() {
    const savedDevices = localStorage.getItem("devices");
    if (savedDevices) {
      this.devices = JSON.parse(savedDevices);
    }
  },
  methods: {
    addDevice() {
      if (this.newDeviceName.trim() !== "") {
        const newDevice = {
          id: Date.now(), // Einzigartige ID
          name: this.newDeviceName,
          status: "off",
        };
        this.devices.push(newDevice); // Neues Gerät hinzufügen
        this.saveDevices(); // Liste speichern
        this.newDeviceName = ""; // Eingabefeld leeren
      }
    },
    removeDevice(deviceId) {
      this.devices = this.devices.filter((device) => device.id !== deviceId);
    },
    handleStatusChange(updatedDevice) {
      console.log("Status geändert:", updatedDevice);
    },
    saveDevices() {
      localStorage.setItem("devices", JSON.stringify(this.devices));
    },
  },
};
