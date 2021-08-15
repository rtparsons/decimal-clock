function TwentyFourHourTimeDisplay(props: any) {
    const date: Date = props.date;
    const hours = padWithZero(date.getHours());
    const mins = padWithZero(date.getMinutes());
    const secs = padWithZero(date.getSeconds());

    return (
        <span className="clock">{`${hours}:${mins}:${secs}`}</span>
    );
}

function padWithZero(toPad: number): string {
    return toPad.toString().padStart(2, '0');
}

export default TwentyFourHourTimeDisplay;