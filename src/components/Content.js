

import viewimg from '../img/5293.jpg';
import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
        this.addNote = this.addNote.bind(this);
    }

    addNote(event){
        console.log("working")
        if(this.theTitle.value != ""){
            var newItem = {
                title: this.theTitle.value,
                note: this.theNote.value
            };
        }
        this.setState((prevState) => {
           return {
               items: prevState.items.concat(newItem)
           } 
        });
        this.theNote = "";
        this.theTitle = "";
        console.log(this.state.items)
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <div className="container">
   <div className="row mt-5 pt-5 mb-5">
  
      <div className="col-md-8">
       <ul>
       {this.state.items.map((user) => (
       <div className="user">{user.title} - {user.note}</div>
       ))}

         </ul>
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
                      ref={(title) => this.theTitle = title } />
                  </div>
               </div>
               <div class="col-md-12 mt-2">
                  <div class="form-outline text-left">
                     <label class="form-label" for="form3Example2">Enter Your Note</label>
                     <textarea class="form-control" placeholder="Enter your Note"
                     ref={(note) => this.theNote = note }
                     ></textarea>
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

