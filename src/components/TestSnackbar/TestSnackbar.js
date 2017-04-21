import React from 'react'
import PropTypes from 'prop-types'
import createReactClass from 'create-react-class'
import RaisedButton from 'material-ui/RaisedButton'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TestSnackbarActions from './actions'

let TestSnackbar = createReactClass({
    getInitialState: () => {
        return {
            open: false
        }
    },
    componentWillMount() {
        this.props.actions.helloSnackbar()
    },
    handleOpen: function() {
        this.setState({
            open: true
        })
    },
    handleClose: function() {
        this.setState({
            open: false
        })
    },
    render: function() {
        return (
            <div>
                <RaisedButton
                    onTouchTap={this.handleOpen}
                    label='open Snackbar'
                >
                </RaisedButton>
                <Snackbar
                    open={this.state.open}
                    message='The Snackbar is working.'
                    autoHideDuration={3000}
                    onRequestClose={this.handleClose}
                    bodyStyle={{backgroundColor: '#FF8CB3'}}
                >
                </Snackbar>
            </div>
        )
    }
})

TestSnackbar.propTypes = {
    acitons: PropTypes.shape({
        helloSnackbar: PropTypes.func.isRequired
    })
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TestSnackbarActions, dispatch)
})

TestSnackbar = connect(mapStateToProps, mapDispatchToProps)(TestSnackbar)

export default TestSnackbar
