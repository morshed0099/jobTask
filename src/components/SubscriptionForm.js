import { useState, useRef } from 'react';
import hitToast from '../helpers/hitToast';

export default function SubscriptionForm() {
  let [email, setEmail] = useState('');
  let [alertClass, setAlertClass] = useState('');
  var parentComp = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form =e.target
    // console.log(validate());
    if (!validate(email)) {
      setAlertClass('alert-validate');
      return;
    }
    // api not working than create databse and check toast for succes

    // fetch('http://103.108.146.90:5000/sendemail', {

    fetch('http://localhost:5000/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    }).then(res => res.text())
      .then(data => JSON.parse(`${data}`))
      .then(data => {
        if (data.acknowledged) {
          // console.log(data);
          hitToast(data.acknowledged ? 'success' : 'error',"Thank you for subscribe")
          form.reset();
        }
      })
      .catch(() => hitToast('error', 'Something went wrong. Please try again.'))
    setAlertClass('');
  }

  const validate = (email) => {
    const valid = (/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) || (/^([a-zA-Z\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/);
    const isValidEmail = valid.test(email);
    if (isValidEmail) {
      return true
    } else if (email === '') {
      return false;
    }

    // if (email.trim(/^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/).match() == null) {
    //   return false;
    // } else if (email.trim() === '') {
    //   return false;
    // }

    // return true;
  }

  return (
    <form className="w-full flex-w flex-c-m validate-form" onSubmit={handleSubmit}>
      <div ref={parentComp} className={"wrap-input100 validate-input where1 " + alertClass} data-validate="Valid email is required: user@email.domain where1">
        <input className="input100 placeholder0 s2-txt2" type="text" name="email" placeholder="Enter Email Address" onChange={e => setEmail(e.target.value)} />
        <span className="focus-input100"></span>
      </div>
      <button className="flex-c-m size3 s2-txt3 how-btn1 trans-04 where1">
        Subscribe
      </button>
    </form>
  );
}
