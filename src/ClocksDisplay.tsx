import React from 'react';
import './App.css';
import { DecimalTimeDisplay } from './clocks/DecimalTimeDisplay';
import DateDisplay from './clocks/DateDisplay';
import FractionalTimeDisplay from './clocks/FractionalTimeDisplay';
import TwentyFourHourTimeDisplay from './clocks/TwentyFourHourTimeDisplay';
import TwelveHourTimeDisplay from './clocks/TwelveHourTimeDisplay';
import { Route, Switch } from 'react-router-dom';

interface IProps {
}

interface IState {
  date?: Date;
}

export default class ClocksDisplay extends React.Component<IProps, IState> {
    private timerId: any;

    constructor(props: IProps) {
        super(props);
        this.state = { 
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            //864 // length of a sec in decimal time
            100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
          <div className="App">
              <Switch>
                <Route path="/fractional">
                  <FractionalTimeDisplay date={ this.state.date }></FractionalTimeDisplay>
                </Route>
                <Route path="/twentyfour">
                  <TwentyFourHourTimeDisplay date={ this.state.date }></TwentyFourHourTimeDisplay>
                </Route>
                <Route path="/twelve">
                  <TwelveHourTimeDisplay date={ this.state.date }></TwelveHourTimeDisplay>
                </Route>
                <Route path={["/decimal", "/"]}>
                  <DecimalTimeDisplay date={ this.state.date }></DecimalTimeDisplay>
                </Route>
              </Switch>

              <DateDisplay date={ this.state.date }></DateDisplay>
          </div>
        );
    }
}
