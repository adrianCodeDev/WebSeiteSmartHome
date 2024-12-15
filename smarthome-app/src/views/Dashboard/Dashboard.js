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
    };
  },
  methods: {
    handleStatusChange(updatedDevice) {
      console.log("Status geändert:", updatedDevice);
    },
  },
};
