function DateDisplay(props: any) {
    return (
        <span className="date">{`${props.date.toDateString()}`}</span>
    );
}

export default DateDisplay;