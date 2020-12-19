import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useParams } from 'react-router-dom'

const GetNote = () => {
    const [note, updatenote] = React.useState(null);
    const [noteContent, updatenoteContent] = React.useState(null);

  let { id } = useParams()
  React.useEffect(() => {
      
    fetch('http://localhost:8000/api/notedata/'+id)
      .then(results => results.json())
      .then(data => {
          console.log()
        updatenote(data.data.note_title);
        updatenoteContent(data.data.note_content);
      });
  }, []); 
    return (
        <div>
            <div className="row mt-5 py-5 justify-content-center">
                <div class="col-md-8">
                  <div class="card card-pad">
                     <h5 class="card-header bg-primary info-color white-text text-center py-4-web">
                        <strong className="text-white">Note Summary</strong>
                     </h5>
                     <div class="card-body px-lg-5 pt-0 text-center">
                        <div class="row">
                                 <div className="col-md-12 text-center mt-3">
                                        <h3>{note}</h3>
                                 </div>
                                 <div className="col-md-12 text-left mt-3">
                                        <p>{noteContent}</p>
                                 </div>
                        </div>                         
                     </div>
                  </div>
               </div>
            </div>
        </div>
    )
}

export default GetNote
