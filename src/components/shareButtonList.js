import { FacebookIcon, FacebookShareButton, HatenaIcon,  HatenaShareButton, LineIcon, LineShareButton, TwitterIcon, TwitterShareButton } from 'react-share'
import React from 'react'
import "../styles/sharebutton.css"

const ShareButtonList = ({title, url}) => {
    return (
      <div>
        <FacebookShareButton url={url} style={{height: "30px"}} className="share-button">
            <FacebookIcon round={true} size={40} />
        </FacebookShareButton>

        <LineShareButton url={url} style={{height: "30px"}} className="share-button">
            <LineIcon round={true} size={40} />
        </LineShareButton>

        <TwitterShareButton title={title} url={url} style={{height: "30px"}} className="share-button">
            <TwitterIcon round={true} size={40} />        
        </TwitterShareButton>

        <HatenaShareButton url={url} style={{height: "30px"}} className="share-button">
        <HatenaIcon round={true} size={40} />
        </HatenaShareButton>
      </div>
    )
}
  
export default ShareButtonList