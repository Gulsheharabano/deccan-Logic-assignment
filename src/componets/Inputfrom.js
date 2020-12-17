import React, { Component } from 'react'
import RichTextEditor from 'react-rte';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUserFriends,faToggleOn, faBell, faSms, faAlignRight } from '@fortawesome/free-solid-svg-icons'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, NavLink} from 'react-router-dom'

export class Inputfrom extends Component {
  constructor(props) {
    super(props)

    this.state = {
      AddEventin: '',
      Title: '',
      Categories: '',
      ShortSummery: '',
      Regiseter: '',
      Link: '',
      SelectTimeZone: '',
      startDate: new Date(),
      startTime: '',
      endDate: new Date(),
      EndTime: '',

      AddEventinError:'',
      TitleError:'',
      CategoriesError:'',
      ShortSummeryError:''

    }
  }

  validForm = () => {
    var isValid = true
    if (this.state.AddEventin.length === 0) {
      this.setState({ AddEventinError: "Please fill mandatory fields "});
      isValid = false;
    }
    else if (this.state.AddEventin.length > 0) {
      this.setState({ AddEventinError: "" });
      isValid = true;
    }
    if (this.state.Title.length === 0) {
      this.setState({ TitleError: "Please fill mandatory fields "});
      isValid = false;
    }
    else if (this.state.Title.length > 0) {
      this.setState({ TitleError: "" });
      isValid = true;
    }
    if (this.state.Categories.length === 0) {
      this.setState({ CategoriesError: "Please fill mandatory fields "});
      isValid = false;
    }
    else if (this.state.Categories.length > 0) {
      this.setState({ CategoriesError: "" });
      isValid = true;
    }
    if (this.state.ShortSummery.length === 0) {
      this.setState({ ShortSummeryError: "Please fill mandatory fields "});
      isValid = false;
    }
    else if (this.state.ShortSummery.length > 0) {
      this.setState({ ShortSummeryError: "" });
      isValid = true;
    }

   
    return isValid;
}

  onchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  submit = () => {
    const validForm = this.validForm()
    if (validForm == true) {
    alert("From is Submitted Successfully.....")
    }
  }

  render() {
    return (
          <div>
        <div className='container-fluid' >
          <center>
            <BrowserRouter  >

              <navbar className="navbar navbar-expand-xm navbar-primary  bg-warning" >

                <NavLink className="btn  btn-third btn-outline-white" to="/"> <ul className="left">
                  <FontAwesomeIcon icon={faAlignRight} ></FontAwesomeIcon>
                  <i class="fas">Advancing for Humality</i> </ul>
                </NavLink>

                <NavLink className="btn  btn-third btn-outline-white" to="/ContactUs">
                  <input className="br_rds" type="search" placeholder="Search" aria-label="Search" />
                  <FontAwesomeIcon icon={faSearch}  ></FontAwesomeIcon>&nbsp;&nbsp;&nbsp;

                  <FontAwesomeIcon style={{ textAlign: 'right ', marginRight: '15px' }} icon={faUserFriends} color='white'></FontAwesomeIcon>
                  <FontAwesomeIcon style={{ textAlign: 'right ', marginRight: '15px' }} icon={faBell} color='white' ></FontAwesomeIcon>
                  <FontAwesomeIcon style={{ textAlign: 'right ', marginRight: '15px' }} icon={faSms} color='white' ></FontAwesomeIcon>

                </NavLink>

              </navbar>
              <hr></hr>

              <b><span style={{ textAlign: 'left', color:'blue' }}>Create Event</span></b>

              <span style={{ textAlign: 'right' }}>
                <button style={{ marginLeft: '1100px', color: 'white', backgroundColor: 'blue' }} >create</button>&nbsp;
                <button style={{ color: 'black', backgroundColor: 'white' }}>cancel</button>
              </span>
              <hr></hr>
            </BrowserRouter>
            <form>
              
              <div className='col-md-8 form-group container' >
                <label className='float-left block-text text-darken-2 s'>
                  Add Event In<span aria-hidden='true' style={{ color: 'red' }}>*</span>
                </label>
                <select value={this.state.option} class="md-form" onChange={this.handleChange} className='form-control' required>
                  <option option=''>Select...</option>
                  <option option='A'>java</option>
                  <option option='B'>python</option>
                  <option option='C'>SQL</option>
                  <option option='C'>Ruby</option>
                </select><pre style={{ color: 'red' }}>{this.state.AddEventinError}</pre>

                <label className='float-left block-text text-darken-2 s' > Title: <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                <input type="text" name='Title' value={this.state.Title} onChange={this.onchange} className='form-control' required/><pre style={{ color: 'red' }}>{this.state.TitleError}</pre>

                <label className='float-left block-text text-darken-2 s'>
                  Categories<span aria-hidden='true' style={{ color: 'red' }}>*</span>
                </label>

                <select value={this.state.option} onChange={this.handleChange} className='form-control' required>
                  <option option=''>Select...</option>
                  <option option='1'>Pune</option>
                  <option option='2'>Mumbai</option>
                  <option option='3'>Goa</option>
                  <option option='4'>Hydarbad</option>
                </select><pre style={{ color: 'red' }}>{this.state.CategoriesError}</pre>

                <label className='float-left block-text text-darken-2 s' > Short Summery: <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                <input type='text' name='ShortSummery' value={this.state.ShortSummery} onChange={this.onchange} className='form-control' required />
                <pre style={{ color: 'red' }}>{this.state.ShortSummeryError}</pre>

                <b>  <p style={{ textAlign: 'left' }}>Type:  Public</p></b>

                <label className='float-left block-text text-darken-2 s' > </label>
                <input type='text' name='Regiseter' value={this.state.Regiseter} onChange={this.onchange} placeholder="Registration Site" className='form-control' required />
                &nbsp;
               <b>  <p style={{ textAlign: 'left' }}>Is The Virtual Event ?  &nbsp;  &nbsp; Yes <FontAwesomeIcon icon={faToggleOn} color='blue' /> </p></b>

                <label className='float-left block-text text-darken-2 s' > </label>
                <input type='text' name='Link' value={this.state.Link} onChange={this.onchange} placeholder="Online Link" className='form-control' required />


                <label className='float-left block-text text-darken-2 s' > Select Time Zone:<span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                <input type="text" name='SelectTimeZone' value={this.state.SelectTimeZone} placeholder='pune' onChange={this.onchange} className='form-control' required />

                <pre style={{ color: 'red' }}> </pre>

                <div class="row">
                  <div class="col">
                    <label className='float-left block-text text-darken-2 s' > Start Date:<span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                    <DatePicker
                      selected={this.state.startDate}
                      onChange={this.handleChange}
                      name="startDate"
                      dateFormat="MM/dd/yyyy"/>
                  </div>

                  <div class="col">
                    <label className='float-left block-text text-darken-2 s' > Start Time:<span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                    <DatePicker
                      onChange={this.handleChange}
                      selected={this.state.startDate}
                      showTimeSelect
                      dateFormat="  EE hh:mm a"/>
                  </div>

                </div>

                <div class="row">
                  <div class="col">
                    <label className='float-left block-text text-darken-2 s' > End Date:<span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                    <DatePicker
                      selected={this.state.endDate}
                      onChange={this.handleChange}
                      name="endDate"
                      dateFormat="MM/dd/yyyy"/>
                  </div>

                  <div class="col">
                    <label className='float-left block-text text-darken-2 s' > End Time:<span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                    <DatePicker
                      onChange={this.handleChange}
                      selected={this.state.startDate}
                      showTimeSelect
                      dateFormat="  EE hh:mm a" />
                  </div>
                </div>

              
              <div>
                <br></br>

                <RichTextEditor
                  style={{ height: "300px" }}
                  value={RichTextEditor.createEmptyValue()}>
                </RichTextEditor>

              </div>
              </div>
              <b>  <label >File upload</label> </b>
              <input type='file'></input>
              <br></br>
              <br></br>
              <button className='btn btn-primary m-2' onClick={this.submit}>Create Event</button>
            </form>
          </center>
        </div>

      </div>
    )
  }
}

export default Inputfrom
