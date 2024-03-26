import React from 'react'; // for create UI
import ReactDOM from 'react-dom/client'; // for Render
import './index.css'; // for styling


// Form Component
// Task :Create HTML
function Form() {
  return (
    <div className= 'container'>
      <form className='form'>
        <div className='form-input'>
          <label>Username</label>
          <input type='text'></input>
          <small>กรุณาระบุชื่อผู้ใช้งานอย่างน้อย 8 ตัวอักษร</small>
        </div>

        {/* 2: Email */}
        <div className='form-input'>
          <label>Email</label>
          <input type='email'></input>
          <small>รูปแบบอีเมลล์ไม่ถูกต้อง</small>
        </div>

        {/* 3 Password */}

        <div className='form-input'>
          <label>password</label>
          <input type='password'></input>
          <small>กรุณาระบุรหัสผ่านอย่างน้อย 8 ตัวอักษร</small>
        </div>

        {/* 4 Confirm Password */}
        <div className='form-input'>
          <label>confirm-password</label>
          <input type='password'></input>
          <small>รหัสผ่านไม่ตรงกัน กรุณาระบุใหม่</small>
        </div>
          <button type='submit'>Register</button>
      </form>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Form />
);

