import React from 'react'

function WritePost() {
  return (
    <div className='writePost'>
      <img className='addPostImg'
       src=".\src\components\images\postimg.jpg" alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="addFromIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: 'none'}}/>
                <input type="text" placeholder='Title' className='writeInput' autoFocus='true'/>
            </div>
            <div className="writeFormGroup">
              <textarea placeholder='wpis na bloga' className='writeInput writeText'></textarea>
            </div>
            <button className='onSubmit'>Opublikuj</button>
        </form>
    </div>
  )
}

export default WritePost