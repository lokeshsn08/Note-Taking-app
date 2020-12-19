

import viewimg from '../img/5293.jpg';
import React, { Component } from 'react';
import Swal from 'sweetalert2';
import { withSwalInstance } from 'sweetalert2-react';
const randNum = Math.floor(Math.random() * Math.floor(1000));

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            note:'',
            note_content:'',
            note_url:randNum
        }

        this.addNote = this.addNote.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {  
          this.setState({
              [event.target.name]: event.target.value}); 
 }

    addNote(event){
        event.preventDefault();
               fetch('http://localhost:8000/api/notedata/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify(this.state)
            }).then(function(response) {

                    Swal.fire({
                        title: 'Your Note Submitted Successfully ..!!',
                        text: "Show Your Submitted Note on : localhost:3000/ViewNote/"+randNum+'',
                        showDenyButton: true,
                        confirmButtonText: `Ok`,
                        icon: 'info',
                        }).then((result) => {
                            window.location.href="";
                            })

            });
    }
    hideAlert() {
    console.log('Hiding alert...');
    
  }
    render() {
        return (
            <div>
                <div className="container">
   <div className="row mt-5 pt-5 mb-5">
  
      <div className="col-md-8">
      
         <img src={viewimg} className="img-fluid" />
         
      </div>
      <div className="col-md-4">
      <div className="form-box">
      <h3>Add Notes Free</h3>
      <form onSubmit={this.addNote}>
            <div class="row mb-4">
               
               <div class="col-md-12 mt-2">
                  <div class="form-outline text-left">
                     <label class="form-label" for="form3Example2">Enter Note Title</label>
                     <input type="text"
                      placeholder="Enter Note Title" class="form-control"
                      name="note"
                      onChange={this.handleChange} 
                      value={this.state.note}
                      required />
                  </div>
               </div>
               <div class="col-md-12 mt-2">
                  <div class="form-outline text-left">
                     <label class="form-label" for="form3Example2">Enter Your Note</label>
                     <textarea class="form-control" placeholder="Enter your Note"
                     name="note_content"
                     value={this.state.note_content} 
                     onChange={this.handleChange} 
                     required></textarea>
                  </div>
               </div>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">Submit</button>
            <div class="text-center">
               <p>Follow Us on:</p>
               <button type="button" class="btn btn-primary btn-floating mx-1">
               <i class="fab fa fa-facebook-f"></i>
               </button>
               <button type="button" class="btn btn-primary btn-floating mx-1">
               <i class="fab fa fa-google"></i>
               </button>
               <button type="button" class="btn btn-primary btn-floating mx-1">
               <i class="fab fa fa-twitter"></i>
               </button>
               <button type="button" class="btn btn-primary btn-floating mx-1">
               <i class="fab fa fa-github"></i>
               </button>
            </div>
         </form>
               </div>
         
      </div>
   </div>
</div>
            </div>
        )
    }
}

