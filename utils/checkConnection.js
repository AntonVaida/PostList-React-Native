import NetInfo from "@react-native-community/netinfo";

export const checkConnection = (handlerResult) => {
    NetInfo.addEventListener(state => {
        if (state.isConnected !== null) {
            handlerResult(state.isConnected);
        }
    });
}