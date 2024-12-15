export default {
    name: "DeviceCard",
    props: {
      device: {
        type: Object,
        required: true,
      },
    },
    methods: {
      toggleStatus() {
        this.device.status = this.device.status === "on" ? "off" : "on";
        this.$emit("status-changed", this.device); // Emit-Event für Änderungen
      },
    },
  };
  