import { Component } from "react";
import moment from 'moment';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import AuthenticationService from '../services/AuthenticationService';
import TodoService from '../api/todo/TodoService';

class UpdateTodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: 'Test',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName();
        TodoService.getTodo(username, this.state.id).then(
            response => {
                this.setState({description: response.data.description})
                this.setState({targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')})
            }
        )
    }

    onSubmit(values) {
        console.log(values);
    }

    validate(values) {
        let errors = {}
        if(!values.description) {
            errors.description = 'Enter a description'
        } else if(values.description.length<5) {
            errors.description = 'Enter atleast 5 Chars in Description'
        }

        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = 'Enter a valid Date'
        }
        return errors
    }

    render() {
        let {description, targetDate} = this.state
        return (
            <div>
                <h1>Update Todo</h1>
                <div className="container">
                    <Formik 
                        initialValues = {{description, targetDate}}
                        onSubmit={this.onSubmit}
                        validateOnChange = {false}
                        validateOnBlur = {false}
                        validate={this.validate}
                        enableReinitialize
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" 
                                        component="div"
                                        className="alert alert-warning"
                                    />
                                    <ErrorMessage name="targetDate" 
                                        component="div"
                                        className="alert alert-warning"
                                    />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"></Field>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>TargetDate</label>
                                        <Field className="form-control" type="date" name="targetDate"></Field>
                                    </fieldset>
                                    <button type="submit" className="btn btn-success">Update</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default UpdateTodoComponent;