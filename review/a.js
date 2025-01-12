function generateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const result = [];

    for (let i = 5; i >= 0; i--) {
        const currentHour = (hours - i + 24) % 24;
        result.push(`${currentHour}.${minutes}`);
    }

    return result;
}



console.log(generateTime());
