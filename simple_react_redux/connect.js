/**
 * Created by zay on 2017/6/29.
 */
import React from 'react';
import PropTypes from 'prop-types';

let connect =(mapStateToProps,mapDispatchToProps)=>(WrappedComponent)=>{
    class Connect extends React.Component {
        static contextTypes={
            store:PropTypes.object
        };

        constructor(props){
            super(props);
            this.state={allProps:{}};
        }

        componentWillMount(){
            this._updateState();
            const {store}=this.context;
            store.subscribe(()=>this._updateState());
        }

        _updateState(){
            const {store}=this.context;
            let stateProps=mapStateToProps?mapStateToProps(store.getState()):{};
            let actionProps=mapDispatchToProps?mapDispatchToProps(store.dispatch):{};
            this.setState({allProps:{...stateProps,...actionProps,...this.props}});
        }

        render(){
            return <WrappedComponent {...this.state.allProps}/>
        }
    }

    return Connect;
};

export class Provider extends React.Component {
    static PropTypes={
        store:PropTypes.object,
        children:PropTypes.any
    };

    static childContextTypes={
        store:PropTypes.object
    };

    getChildContext(){
        return {
            store:this.props.store
        };
    }

    render(){
        return (
        <div>
            {this.props.children}
        </div>
        );
    }
}

export default connect;