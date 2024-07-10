import React from "react"

export const ACTIVEDOTSTYLE = 'ACTIVEDOTSTYLE'
export const DEACTIVEDOTSTYLE = 'DEACTIVEDOTSTYLE'

export function activateDotStyle(sectioName) {
  return {
    type : ACTIVEDOTSTYLE , 
    payload : sectioName
  }
}
export function deactivateDotStyle() {
  return {type : DEACTIVEDOTSTYLE }
}
