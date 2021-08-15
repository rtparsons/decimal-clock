function FractionalTimeDisplay(props: any) {
    const date: Date = props.date;
    const totalMs = (date.getHours() * 60 * 60 * 1000) + 
        (date.getMinutes() * 60 * 1000) + 
        (date.getSeconds() * 1000) +
        date.getMilliseconds();
    const fractional = totalMs / (24 * 60 * 60 * 1000);
    return (
        <span className="clock">{`${fractional.toFixed(5)}`}</span>
    );
}

export default FractionalTimeDisplay;