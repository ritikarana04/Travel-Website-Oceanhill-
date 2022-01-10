import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class signup extends Component {
  render() {
  	return(
  		<div>
 	<p class='formuppertabssingin'>Sign in</p><p id='active-window' class='formuppertabssignup'>Sign up</p>
	<form name="signup" onsubmit="return validateform()">
		<section>
			<div  id="div1">
  				<label for="fname" class="compul">First Name</label>
  				<input type="text" id="fname" class="roundinputimp" name="fname" value="John" onfocus="this.value=''"/>
    		</div>

      		<div  id="div1">
  				<label for="lname">Last name</label>
  				<input type="text" id="lname"  class="roundinput" name="lname" value="Doe" onfocus="this.value=''"/>
  			</div>
  		</section>
<section>
  			<div>
  				<label for="email" class="compul">Email</label>
  				<input type="text" id="email"  class="roundinputimp" name="email" value="john123@gmail.com" onfocus="this.value=''"/>
  			</div>
  			<div >
  				<label for="contact" class="compul">Contact</label>
  				<input type="text" id="contact"  class="roundinputimp" name="contact" value="+91xxxxxxxxxxxx" onfocus="this.value=''"/>
  			</div>
		</section>
<section>
			<div>
  				<label for="address"  class="compul">Address</label>
  				<input type="text" id="address" class="roundinputimp" name="address" value="Home Address" onfocus="this.value=''"/>
    		</div>

      		<div >
  				<label for="address2">Address2</label>
  				<input type="text" id="address2"  class="roundinput" name="address2" value="Corressponding Address" onfocus="this.value=''"/>
  			</div>
  		</section>

  		<section>
			<div >
  				<label for="city" class="first-name">City</label>
  				<input type="text" id="city" class="roundinput" name="city" onfocus="this.value=''"/>
    		</div>

      		<div>
  				<label for="state">State</label>
  				<input type="text" id="state"  class="roundinput" name="state" onfocus="this.value=''"/>
  			</div>
  		</section>
  		  		<section>
			<div >
  				<label for="code" class="compul">Zip Code</label>
  				<input type="text" id="code" class="roundinputimp" name="code" onfocus="this.value=''"/>
    		</div>

      		<div>
  				<label for="country">Country</label>
  				<input type="text" id="country"  class="roundinput" name="country" onfocus="this.value=''"/>
  			</div>
  		</section>
  		<br/>
		<input type="submit" class="register" value="register" />
		</form>
		<p id="formbg"></p>
		</div>
	);
  }
}
