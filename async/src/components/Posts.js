import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions';

class Posts extends Component{
    componentDidMount(){
        const {dispatch,selectedReddit}=this.props;
        dispatch(getPosts(selectedReddit));
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedReddit !== this.props.selectedReddit) {
            const { dispatch, selectedReddit } = nextProps;
            dispatch(getPosts(selectedReddit))
        }
    }

    render() {
        const {postsInfo, dispatch,selectedReddit} = this.props;
        const {lastUpdate,posts,isFetching}=postsInfo||{isFetching:true,posts:[]};
        const loading=<div>Loading</div>;
        const postList= (
            <div>
                <p>
                    {'Last updated at '+(new Date(lastUpdate)).toLocaleTimeString()+'.'}
                    <button onClick={()=>dispatch(getPosts(selectedReddit))}>Refresh</button>
                </p>
                <ul>
                    {posts.map((post,id)=><li key={id}>{post.title}</li>)}
                </ul>
            </div>
        );
        return isFetching?loading:postList;
    }

}

const mapStateToProps=state=>{
    const {selectedReddit,postByReddit} =state;
    return {selectedReddit,postsInfo:postByReddit[selectedReddit]}
};

export default connect(mapStateToProps)(Posts);