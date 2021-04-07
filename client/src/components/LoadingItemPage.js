import React from "react"
import ContentLoader from "react-content-loader"
import { isMobile } from "react-device-detect"

export default function LoadingItemPage(){
  return (
    <>
    {
      !isMobile ?
      <>
        <ContentLoader 
          speed={2}
          width={1360}
          height={570}
          viewBox="0 0 1360 570"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="89" y="103" rx="0" ry="0" width="2" height="0" /> 
          <rect x="23" y="437" rx="0" ry="0" width="0" height="1" /> 
          <rect x="0" y="0" rx="9" ry="9" width="200" height="65" /> 
          <rect x="0" y="70" rx="9" ry="9" width="400" height="72" /> 
          <rect x="0" y="170" rx="9" ry="9" width="170" height="36" /> 
          <rect x="0" y="266" rx="29" ry="29" width="250" height="60" /> 
          <rect x="0" y="396" rx="9" ry="9" width="380" height="100" /> 
          <rect x="460" y="0" rx="0" ry="0" width="900" height="570" />
        </ContentLoader>
      </> :
      <>
          <ContentLoader 
            speed={2}
            width={1360}
            height={570}
            viewBox="0 0 1360 570"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="89" y="103" rx="0" ry="0" width="2" height="0" /> 
            <rect x="23" y="437" rx="0" ry="0" width="0" height="1" /> 
            <rect x="0" y="0" rx="9" ry="9" width="100" height="24" /> 
            <rect x="0" y="25" rx="9" ry="9" width="200" height="18" /> 
            <rect x="0" y="55" rx="9" ry="9" width="130" height="36" /> 
            <rect x="0" y="530" rx="29" ry="29" width="250" height="60" /> 
            <rect x="0" y="100" rx="0" ry="0" width="335" height="400" />
          </ContentLoader>
      </>
    }
    </>
  )
}
  
