import React, { Component } from 'react';

export function Currency(props) {
  return <span>£{props.amount.toLocaleString()}</span>;
}
