import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import IKImage from "@/components/IKImage";

const CardGridWrapper = ({ className, image, blogDate, place, title, description, readUrl }) => {
  const MAX_LENGTH = 130;

  // Extract path from full ImageKit URL
  const extractPath = (url) => {
    if (!url) return '';
    const urlEndpoint = 'https://ik.imagekit.io/ge17f66b4ma';
    return url.replace(urlEndpoint, '');
  };

  return (
    <div className={className}>
      <div className="blog-agency">
        <div className="blog-contain">
          <IKImage
            src={extractPath(image)}
            alt={title}
            width={400}
            height={290}
            className="img-fluid"
            loading="lazy"
            transformation={[{
              width: 400,
              quality: 85,
              format: 'auto'
            }]}
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="img-container" style={{ paddingTop: '10px' }}>
            <div>
              <div className="blog-info">
                <div className="m-b-10">
                  <div className="center-text">
                    {blogDate && (
                      <>
                        <i aria-hidden="true" className="fa fa-clock-o m-r-10"></i>
                        <h6 className="m-r-25 font-blog">{blogDate}</h6>{" "}
                      </>
                    )}
                    {place && (
                      <>
                        <i aria-hidden="true" className="fa fa-map-marker m-r-10"></i>
                        <h6 className="font-blog">{place}</h6>{" "}
                      </>
                    )}
                  </div>
                </div>
                <h5 className="blog-head" style={{ fontWeight: 'bold', marginBottom: '15px' }}>{title}</h5>
                {description.length > MAX_LENGTH ? <p className="para2">{`${description.substring(0, MAX_LENGTH)} .....`}</p> : <p className="para2">{description}</p>}

                <div className="btn-bottom m-t-20">
                  <Link href={readUrl}>Leer más</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardGridWrapper.propTypes = {
  className: PropTypes.string.isRequired,

  image: PropTypes.string.isRequired,

  blogDate: PropTypes.string,

  place: PropTypes.string,

  title: PropTypes.string.isRequired,

  description: PropTypes.string.isRequired,

  readUrl: PropTypes.string.isRequired,
};

export default CardGridWrapper;
