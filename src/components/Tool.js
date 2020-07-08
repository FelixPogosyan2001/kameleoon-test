import React from 'react';
  
export function Tool({ name, sites, type, status }) {
    return (
        <div className="tool">
            <span>{name}</span>
            <span>{sites} {sites > 1 ? 'sites' : sites === 1 ? 'site' : ''}</span>
            <span>{type && type[0].toUpperCase() + type.slice(1)}</span>
            <span className={(status === 'blocked') ? 'fas fa-lock' : status}></span>
        </div>
    )
}