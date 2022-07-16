import React, { useState } from 'react'

const Joinus = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gun, setGun] = useState('');
  const [exp, setExp] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form className='joinus '>
        <div className="joinusForm">
        <label className='joinusLabel'>What is your name?</label>
        <input className='joinusInput' 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
        <label className='joinusLabel'>What is your email? </label>
        <input 
        className='joinusInput' 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <label className='joinusLabel'>What is your phone number?</label>
        <input 
        className='joinusInput' 
        type="number" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        />
        <label className='joinusLabel'>Do you have paintball gun?</label>
        <select 
        className='joinusInput'
        value={gun}
        onChange={(e) => setGun(e.target.value)}>
            <option value=""></option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
        </select>
        <label className='joinusLabel'>What is your experience?</label>
        <select 
        className='joinusInput'
        value={exp}
        onChange={(e)=>setExp(e.target.value)}
        >
            <option value=""></option>
            <option value="roockie">Rookie</option>
            <option value="medium">Medium</option>
            <option value="pro">Pro</option>
        </select>
        <label className='joinusLabel'>Do you want to add something?</label>
        <textarea 
        className='joinusTextarea' 
        type="text" 
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        />
        <button className='joinusButton'>Send</button>
        </div>

        
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{gun}</p>
        <p>{exp}</p>
        <p>{message}</p>
    </form>
  )
}

export default Joinus