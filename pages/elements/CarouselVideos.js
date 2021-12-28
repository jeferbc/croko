import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const videos = [
  {
    videoID: 'ndnpqwOGnvo',
    videoURL: 'https://www.youtube.com/embed/ndnpqwOGnvo' 
  },
  {
    videoID: 'pWW6-524FLs',
    videoURL: 'https://www.youtube.com/embed/pWW6-524FLs' 
  },
  {
    videoID: 'A1Rs_bHqmc8',
    videoURL: 'https://www.youtube.com/embed/A1Rs_bHqmc8' 
  }
];

const YoutubeSlide = (url) => {
  const [height, setHeight] = useState();

  useEffect(() => {
    if (!height) setHeight(window.innerHeight - 260);
    window.addEventListener("resize", () => {
        setHeight(window.innerHeight - 260);
    });
  }, []);
  return<ReactPlayer width="100%" height={height + 260 > 768 ? height : '360px'} url={url.videoURL} controls={true}/>
}

const onSlide = () => {
  let iframes = document.querySelectorAll('iframe');
  Array.prototype.forEach.call(iframes, iframe => { 
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func: 'stopVideo' }), '*');
  })
}

const customRenderItem = (item, props) => {
  return(<item.type {...item.props} {...props} />);
}

const customRenderThumb = (children) =>
  children.map((item, i) => {
    return <img src={`https://img.youtube.com/vi/${item.props.videoID}/default.jpg`} key={i}/>;
  });

const CarouselVideos = () => {
  return ( 
    <Carousel renderItem={customRenderItem} renderThumbs={customRenderThumb} onChange={onSlide} showStatus={false} thumbWidth={110}>
      { videos.map((data, i) => {
        return (
          <YoutubeSlide key={`youtube-${i}`} videoURL={data.videoURL} videoID={data.videoID} />
        )
      })}
    </Carousel>
  );
};

export default CarouselVideos;