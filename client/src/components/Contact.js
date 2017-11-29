import React, {Component} from 'react';
import Select from 'react-select';
import axios from 'axios';
import './styles/select.scss';
import {withRouter} from 'react-router-dom';
import {TweenMax, Power2, Circ} from 'gsap';
import SplitText from '../utils/SplitText';
import Header from './Header';
import './styles/contact.scss';
import {introContact} from '../utils/contactHelper';
import {budgetOptions, projectOptions, isValidEmail, required, longerThan} from '../utils/formHelper';

const removeElements = (elms) => Array.from(elms).forEach(el => el.remove());

function validate(inputs) {
  return {
    email: 
      !required(inputs.email) ? 'Required' :
      !longerThan(3, inputs.email) ? 'Email is not valid' :
      !isValidEmail(inputs.email) ? 'Email is not valid' : null,
    name: 
      !required(inputs.name) ? 'Required' :
      !longerThan(2, inputs.name) ? 'Name should be longer than 3 characters' : null,
    details:
      !required(inputs.details) ? 'Description of project is required' : null,
  };
}

class Contact extends Component {
	  componentDidMount() {
	  	introContact();
	  	const els = document.getElementsByTagName('label');
	  	console.log(els);
	  }
	  constructor(props) {
	    super(props);
	      this.state = {
	        fields: {
	          name: '',
	          email: '',
	          company: '',
	          phone: '',
	          type: '',
	          budget: '',
	          details: '',
	        },
	        touched: {
	          email: false,
	          name: false,
	          budget: false,
	          details: false,
	        },
	        errors: {
	          email: null,
	          name: null,
	          details: null,
	        }
		  }
	  }

	  handleBudget = (val) => {
	    this.setState({ fields: {...this.state.fields, budget:val.value } })
	  }
	  handleType = (val) => {
	    this.setState({ fields: {...this.state.fields, type:val.value } })
	  }
	  handleNameChange = (e) => {
	    this.setState({ 
	      fields: {...this.state.fields, name: e.target.value},
	      errors: {...this.state.errors, name: null }
	    });
	  }
	  handleEmailChange = (e) => {
	    this.setState({
	      fields: {...this.state.fields, email: e.target.value },
	      errors: {...this.state.errors, email: null}
	    });
	  }
	  handleDescriptionChange = (e) => {
	    this.setState({
	      fields: {...this.state.fields, details:e.target.value},
	      errors: {...this.state.fields, details:null}
	    });
	  }
	  handleChange = (e) => {
	    this.setState({
	      fields: {...this.state.fields, [e.target.id]:[e.target.value]}
	    });
	  }
	  handleSubmit = (e) => {
	    e.preventDefault();
	    const errors = validate({
	      email: this.state.fields.email,
	      name: this.state.fields.name,
	      details: this.state.fields.details,
	    });
	    const anyError = Object.keys(errors).some(x=>errors[x]);
	    if (anyError) {
	      this.setState({errors})
	      this.setState({touched: {...this.state.touched, email: true, name: true, details: true}})
	      return;
	    }

	    const confirmMsg = new SplitText('.confirmMsg', {type: 'words'})

	    document.querySelector('.closeBox').addEventListener('click', function() {
		    TweenMax.to('.confirmStr', 0.5, {autoAlpha: 0, ease:Power2.easeOut});
	    	TweenMax.to('.FormGroup', 0.5, {autoAlpha: 1, ease:Circ, delay: 0.4});
	    });

	    const {email, name, company, phone, budget, type, details} = this.state.fields;
	    axios.post('api/contact', {email, name, company, phone, budget, type, details})
	    .then((response) => {
	    	setTimeout(()=> {
		    	this.setState({
		    		fields: {
			          name: '',
			          email: '',
			          company: '',
			          phone: '',
			          type: '',
			          budget: '',
			          details: '',
			        },
			        touched: {
			          email: false,
			          name: false,
			          budget: false,
			          details: false,
			        },
			        errors: {
			          email: null,
			          name: null,
			          details: null,
			        }
			    });
	    	}, 200)
		    TweenMax.to('.FormGroup', 0.5, {autoAlpha: 0, ease:Circ});
		    TweenMax.to('.confirmStr', 0.5, {autoAlpha: 1});
		    TweenMax.staggerFrom(confirmMsg.words, 0.5, {autoAlpha: 0, delay: 0.5, ease:Power2.easeOut, y: 40, }, 0.05);
		    TweenMax.from('.closeBox', 0.5, {delay: 0.8, autoAlpha: 0, y: 40, ease:Power2.easeOut});

		    setTimeout(() => {
			    const els = document.getElementsByTagName('label');
			    for(var i=0; i< els.length; i++) {
				    els[i].classList.remove('active');
			    }
		    }, 400)
	    });

	    // return this.props.history.push('/');
	  }

	  handleBlur = (e) => {
	    this.setState({ touched: {...this.state.touched, [e.target.id]: true} });

	    if (!e.target.value) {
		    e.target.parentElement.firstChild.classList.remove('active');
	    }

	  }
	  focusLabel = (e) => {	  	
	  	e.target.parentElement.firstChild.classList.add('active');
	  }

	  focusSelect = (e) => {
	  	if (e.target) {
	  		e.target.parentElement.parentElement.parentElement.parentElement.firstChild.classList.add('active');
	  	}
	  }
	  blurOption = (e) => {
	    if (!e.target.value) {
		    e.target.parentElement.firstChild.classList.remove('active');
	    }
	  }
	  blurSelect = (e) => {
	  	const option = document.getElementsByClassName('Select-value-label');

	  	if (option.length === 0) {
	  		e.target.parentElement.parentElement.parentElement.parentElement.firstChild.classList.remove('active');
	  	}
	  }

	render() {
	    const errors = validate({
	      email: this.state.fields.email,
	      name: this.state.fields.name,
	      details: this.state.fields.details,
	    });
		return (
			<div className="contactHead">
				<Header />
				<div className="contactContainer">
					<div className="contactTitle">
						<h1 className="contactH">Start a Project</h1>
						<div className="dash"></div>
					</div>
					<div className="formLayout">
					<div className="submitOver">
						<div className="confirmStr">
							<div className="confirmWrap">
								<div className="closeBox">X</div>
								<span className="confirmMsg">Nice to meet you. We will be in contact with you shortly.</span>
							</div>
						</div>
					    <div className="FormGroup">
					        <form onSubmit={this.handleSubmit} >
					        	<div className={'formRow ' + (errors.name && this.state.touched.name ? "errorInfo" : null) }>
						          <div className={'formInput fl ' + (errors.name && this.state.touched.name ? 'mv' : null)}>
						            <label className="labelAnim" onFocus={this.focusLabel} htmlFor="name">Full Name *</label>
						              <input 
						                className={errors.name && this.state.touched.name ? "mark" : null}
						                type="text" 
						                value={this.state.fields.name} 
						                id="name" 
						                onChange={this.handleNameChange} 
						                onBlur={this.handleBlur} 
						                onFocus={this.focusLabel} />
						                {errors.name && this.state.touched.name ? <div className="errMark mobileOnly">{errors.name}</div> : null}
						          </div>
						          <div className="formInput fr">
						            <label htmlFor="company">Company</label>
						              <input 
						                type="text" 
						                onFocus={this.focusLabel}
						                value={this.state.fields.company} 
						                id="company" 
						                onChange={this.handleChange}
						                onBlur={this.blurOption} />
						          </div>
						          <div className="fClear"></div>
					              {errors.name && this.state.touched.name ? <div className="errMark nonmob">{errors.name}</div> : null}
					        	</div>

					          <div className={'formRow ' + (errors.email && this.state.touched.email ? "errorInfo" : null) }>
					          	<div className={'formInput fl ' + (errors.email && this.state.touched.email ? "mv" : null)}>
						            <label htmlFor="email">Email *</label>
						              <input 
						                type="text"
						                className={errors.email && this.state.touched.email ? "mark" : null}
						                onFocus={this.focusLabel} 
						                value={this.state.fields.email} 
						                id="email" 
						                onChange={this.handleEmailChange} 
						                onBlur={this.handleBlur} />
					            {errors.email && this.state.touched.email  ? <div className="errMark mobileOnly">{errors.email}</div> : null}
					            </div>
						          <div className="formInput fr">
						            <label htmlFor="phone">Phone</label>
						              <input 
						                type="text" 
						                onFocus={this.focusLabel}
						                onChange={this.handleChange}
						                onBlur={this.blurOption}
						                value={this.state.fields.phone} 
						                id="phone" />
						          </div>
						          <div className="fClear"></div>
						          {errors.email && this.state.touched.email  ? <div className="errMark nonmob">{errors.email}</div> : null}
					          </div>
					          <div className="formRow">
					          	<div className="formInput fl">
						            <label>Project Type</label>
						              <Select 
						                id="type"
						                name="Project Type"
						                value={this.state.fields.type}
						                options={projectOptions}
						                onChange={this.handleType}
						                onBlur={this.blurSelect}
						                placeholder=''
						                clearable={false}
						                searchable={false}
						                onFocus={this.focusSelect}
						              />
					          	</div>	
						          <div className="formInput fr">
						            <label>Budget</label>
						              <Select 
						                id="budget"
						                name="Budget"
						                value={this.state.fields.budget}
						                options={budgetOptions}
						                onChange={this.handleBudget}
						                placeholder=''
						                clearable={false}
						                searchable={false}
						                onFocus={this.focusSelect}
						                onBlur={this.blurSelect}
						              />
						          </div>
						          <div className="fClear"></div>
					          </div>
					          <div className={'descriptionRow ' + (errors.details && this.state.touched.details ? "errorInfo" : null) }>
					       		<div className="formInput">
						            <label htmlFor="projectDetails">Describe the project to us *</label>
						              <textarea 
						                className={errors.details && this.state.touched.details ? 'mark' : null }
						                name="projectDetails" 
						                id="details" 
						                value={this.state.fields.details}
						                onFocus={this.focusLabel}
						                onChange={this.handleDescriptionChange} 
						                onBlur={this.handleBlur}
						                placeholder="" />
					       		</div>
					            {errors.details && this.state.touched.details ? <div className="errMark">Short description of project is required</div> : null}
					          </div>
					            <input className="submit" type="submit" value="SEND"/>
					        </form>
						    </div>
					    </div>
					</div>
				</div>
			</div>
		)
	}
}

export default withRouter(Contact);