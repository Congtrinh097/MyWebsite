import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as StatisticStore from '../store/Statistic';
import * as WeatherForecasts from '../store/WeatherForecasts';
import { TodoModel, StatusEnums } from '../models/TodoModel'

type StatisticProps =
    StatisticStore.TodoListState
    & typeof StatisticStore.actionCreators
    & RouteComponentProps<{}>;
type thisState = {
    TodoList: TodoModel[],
    TodoValue: TodoModel
}

class Statistic extends React.Component<StatisticProps, thisState> {

    componentWillMount() {
        this.setState({
            TodoList: [],
            TodoValue: { Status: StatusEnums.New, Value: "" }
        });
    }

    add() {
        this.state.TodoList.push(this.state.TodoValue);
        this.setState({ TodoValue: { Status: StatusEnums.New, Value: "" } });
    }

    delete(item: TodoModel) {
        let index = this.state.TodoList.indexOf(item);
        this.state.TodoList.splice(index, 1);
        this.setState({ TodoValue: { Status: StatusEnums.New, Value: "" } });
    }

    renderMark(item: TodoModel) {
        return <input type="checkbox" checked={item.Status == StatusEnums.Done} aria-label="..." />
    }

    renderStatus(item: TodoModel) {
        switch (item.Status) {
            case StatusEnums.New:
                return <span className="label label-danger">Mới</span>
            case StatusEnums.Doing:
                return <span className="label label-warning">Đang làm</span>
            case StatusEnums.Done:
                return <span className="label label-success">Hoàn thành</span>
            default: return "Không biết";
        }
    }

    renderAction(item: TodoModel) {
        return <button type="button" className="btn btn-danger"
            onClick={() => {this.delete(item);}}
        >Xóa </button>
    }
    public render() {
        return <div>
            <h1>Todo list</h1>
            <div className="alert alert-info" role="alert">
                <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                <span className="sr-only">Todo:</span>
               This is list of todo
            </div>
            <div className="input-group">
                <input type="text" className="form-control" aria-label="..."
                    value={this.state.TodoValue.Value || ""}
                    onChange={(e) => {
                        this.state.TodoValue.Value = e.target.value;
                        this.forceUpdate();
                    }
                    }
                 
                />
                <div className="input-group-btn">
                    <button type="button" className="btn btn-default"
                        onClick={() => {
                            this.add();
                        }}
                     >Add </button>
                  </div>
            </div>
            {
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Đánh dấu</th>
                            <th>Trạng thái</th>
                            <th>Công việc</th>
                            <th>Thao tác</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.TodoList.map((item, index) =>
                            <tr key={index}>
                                <td>{this.renderMark(item)}</td>
                                <td>{this.renderStatus(item)}</td>
                                <td>{item.Value}</td>
                                <td>{this.renderAction(item)}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            
            }
        </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.todo, // Selects which state properties are merged into the component's props
    StatisticStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Statistic) as typeof Statistic;