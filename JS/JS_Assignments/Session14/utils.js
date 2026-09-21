export function generateOrderId() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let orderId = "";

    for (let i = 0; i < 8; i++) {
        orderId += characters[Math.floor(Math.random() * characters.length)];
    }

    return orderId;
}