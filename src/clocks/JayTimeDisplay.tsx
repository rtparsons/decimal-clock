function JayTimeDisplay(props: any) {
    let date: Date = props.date;
    const secondsInDay = (24 * 60 * 60 );
    const secondsSoFar = (date.getHours() * 60 * 60) + (date.getMinutes() * 60) + (date.getSeconds()); 
    const msOffset = (secondsInDay - secondsSoFar) * 6.6;
    date =  new Date(date.getTime() - msOffset);
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

//6.6 ms per second

export default JayTimeDisplay;