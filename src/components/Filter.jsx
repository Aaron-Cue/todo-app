import React from 'react'

export default function Filter({ setPriorityCategory }) {
  return (
    <div
      style={{
        marginTop: '20px',
        width: '25%',
        maxWidth: '400px',
        minWidth: '200px'
      }}
    >
      <span>
        <i style={{ fontSize: '1.1em', color: 'rgb(235, 235, 235)' }}>
          Filter by priority
        </i>
      </span>
      <select
        name="category"
        style={{
          marginTop: '5px',
          backgroundColor: 'rgba(13, 14, 24, 0.7)'
        }}
        onChange={e => setPriorityCategory(e.target.value)}
      >
        <option value="ALL">all</option>
        <option value="L">low</option>
        <option value="M">mid</option>
        <option value="H">high</option>
      </select>
    </div>
  )
}
