import React from "react";
import Moment from 'react-moment';
import Comments from "../Comments";

const Saved = props => {
  return (

    <div className="container">
      <div className="row">
        <div className="col-md-10 col-md-offset-1">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1>Saved</h1>
            </div>
            <div className="panel-body">

              {props.saved.map( (saved , i) => (
                <div className="article-wrapper" key={i}>
                  <div className="panel panel-default" style={{marginBottom: '5px'}}>
                    <div className="panel-body">
                      
                      <button className="btn btn-md btn-primary pull-right change-saved" data-id="" onClick={() => props.deleteArticle(saved._id)}>Remove Article</button>
                      
                      {/*<button className="btn btn-md btn-primary pull-right change-saved" data-id="" style={{marginRight: '10px'}}>Add Annotation</button>*/}
                      <button type='button' className="btn btn-md btn-primary pull-right change-saved" style={{marginRight: '10px'}} onClick={() => props.openModal(saved._id, saved.title)}>Add Annotation</button>

                      <h4>{saved.title}</h4>

                      <p>
                        <a href={saved.url} target="_blank">Read Article</a>
                      </p>

                      {/* <p>Publish Date: {results.pub_date}</p> */}
                      <p>Publish Date: &nbsp;
                        <Moment format="MMMM Do, YYYY, h:mma">
                          {saved.date}
                        </Moment>
                      </p>

                    </div>
                  </div>
                  
                  {/* ONLY RENDERS COMMENTS COMPONENT WHEN ARTICLES.COMMENT STATE NOT EMPTY */}
                
                  {saved.comment.map( (comments , i) => (
                    <div className="panel panel-default" style={{marginBottom: '5px'}} key={i}>
                      <div className="panel-body">

                        <button className="btn btn-sm btn-danger pull-right change-saved" data-id="" onClick={() => props.deleteComment(comments._id)}>X</button>

                        <p>{comments.body}</p>

                      </div>
                    </div>
                  ))}

                  <Comments />

                </div>
              ))}

            </div>{/* end panel body */}

          </div>
        </div>
      </div>
    </div>

)};

export default Saved;
