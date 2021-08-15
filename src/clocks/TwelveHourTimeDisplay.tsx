function TwelveHourTimeDisplay(props: any) {
    const date: Date = props.date;
    let hours = date.getHours() % 12;
    const mins = padWithZero(date.getMinutes());
    const secs = padWithZero(date.getSeconds());
    const isPm = date.getHours() > 11;
    hours = hours === 0 ? 12 : hours;

    return (
        <span className="clock">{`${hours}:${mins}:${secs} ${isPm ? 'PM' : 'AM'}`}</span>
    );
}

function padWithZero(toPad: number): string {
    return toPad.toString().padStart(2, '0');
}

export default TwelveHourTimeDisplay;