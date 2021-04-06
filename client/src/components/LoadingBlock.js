import React from 'react'
import ContentLoader from 'react-content-loader'
import {isMobile} from 'react-device-detect'

export default function LoadingBlock() {
  return (
    <>
      { !isMobile ?
        <ContentLoader className="ContentLoader"
          speed={2}
          width={335}
          height={480}
          viewBox="0 0 320 480"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="100" ry="100" width="320" height="350" /> 
          <rect x="89" y="103" rx="0" ry="0" width="2" height="0" /> 
          <rect x="23" y="437" rx="0" ry="0" width="0" height="1" /> 
          <rect x="0" y="360" rx="5" ry="5" width="150" height="26" /> 
          <rect x="0" y="390" rx="5" ry="5" width="320" height="50" /> 
          <rect x="0" y="453" rx="5" ry="5" width="150" height="23" /> 
          <circle cx="297" cy="462" r="12" />
        </ContentLoader> :
        <ContentLoader  className="mContentLoader"
            speed={2}
            width={160}
            height={282}
            viewBox="0 0 175 282"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="33" ry="33" width="160" height="180" /> 
            <rect x="89" y="103" rx="0" ry="0" width="2" height="0" /> 
            <rect x="23" y="437" rx="0" ry="0" width="0" height="1" /> 
            <rect x="0" y="190" rx="5" ry="5" width="140" height="18" /> 
            <rect x="0" y="211" rx="5" ry="5" width="160" height="32" /> 
            <rect x="0" y="250" rx="5" ry="5" width="114" height="24" /> 
            <circle cx="297" cy="462" r="12" /> 
            <circle cx="147" cy="260" r="16" />
          </ContentLoader>

      }
    </>
    
  )
}
