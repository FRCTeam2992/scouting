import { useWidgetsStore } from "./stores";
const widgets = useWidgetsStore();

export async function onlineCheck() {
    if (navigator.onLine) {
        const response = await fetch("https://dummy-data-api-server.fly.dev");
        return (response.status === 200) && ((await response.json()).status === "OK");
    }
    return false
}

export async function sendUnsyncedData() {
    console.log("checking...")
    if (await onlineCheck()) {
        console.log(widgets.values)
    }
    else {
        console.log("offline")
    }
}

setInterval(sendUnsyncedData, 5000);