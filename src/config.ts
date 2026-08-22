import { createMeshConfig } from "@baditaflorin/mesh-common";

export const config = createMeshConfig({
  appName: "Lucky Draw",
  description: "A peer-to-peer lucky draw for a room.",
  accentHex: "#f59e0b",
  version: __APP_VERSION__,
  commit: __GIT_COMMIT__,
});
