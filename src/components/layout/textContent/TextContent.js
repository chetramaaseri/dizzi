import React from 'react'

function TextContent({data}) {
  const alignment = `col-12 pt-5 textContent gap-3 ${data.alignment}`;
  return (
    <div className={alignment}>
        <span className="highlight">{data.highlight}</span>
        <h2 className='highlightHeading' dangerouslySetInnerHTML={{ __html: data.heading }} />
        {data.text &&  <span className='col-sm-8 m-auto'>{data.text}</span>}
        {data.btnText && <button className="btn btn-trasparrent border-primary">{data.btnText}</button>}
    </div>
  )
}

export default TextContent