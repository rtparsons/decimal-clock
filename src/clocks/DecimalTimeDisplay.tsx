import React from "react";

interface IProps {
    date?: Date;
}

interface IState {
}

export class DecimalTimeDisplay extends React.Component<IProps, IState> {

    getDecimalTime(toConvert?: Date): string {
        if (!toConvert) {
            return '';
        }

        var hours = toConvert.getHours();
        var minutes = toConvert.getMinutes();
        var seconds = toConvert.getSeconds();
        var milliseconds = toConvert.getMilliseconds();
        
        var totalMs = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000) + milliseconds;
        var totalDecimalMs = (totalMs / 86400000) * 100000000;

        var decimalHours = Math.floor(totalDecimalMs / 10000000);
        var decimalMinutes = Math.floor((totalDecimalMs / 100000) % 100);
        var decimalSeconds = Math.floor((totalDecimalMs / 1000) % 100);

        // 86400 seconds in normal day
        // 100000 seconds in decimal day
        return `${this.padWithZero(decimalHours)}:${this.padWithZero(decimalMinutes)}:${this.padWithZero(decimalSeconds)}`;
    }

    padWithZero(toPad: number): string {
        return toPad.toString().padStart(2, '0');
    }

    render() {
        const timeString = this.getDecimalTime(this.props.date);
        return (
            <span className="clock">{ timeString }</span>
        );
    }
}