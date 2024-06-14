import Pusher from "pusher";

const pusher = new Pusher({
    appId: import.meta.env.VITE_APP_ID,
    key: import.meta.env.VITE_APP_KEY,
    secret: import.meta.env.VITE_APP_SECRET,
    cluster: import.meta.env.VITE_APP_CLUSTER,
    useTLS: true
});

export default pusher;