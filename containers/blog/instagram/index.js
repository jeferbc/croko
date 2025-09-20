import React from 'react';
import Link from 'next/link'
import LazyImage from '../../../components/LazyImage';

const Instagram = ({}) => {

    return (
        <div>
            <h5 className="blog-title">instagram</h5>
            <div className="sidebar-container insta">
                <ul className="blog-insta">
                    <li>
                        <Link href="">
                            <a href="#javascript">
                            <LazyImage alt="Blog image 2" className="img-fluid" src="/assets/images/agency/blog/2.jpg" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                            <LazyImage alt="Blog image 3" className="img-fluid" src="/assets/images/agency/blog/3.png" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                            <LazyImage alt="Blog image 4" className="img-fluid" src="/assets/images/agency/blog/4.jpg" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                            <LazyImage alt="Blog image 6" className="img-fluid" src="/assets/images/agency/blog/6.jpg" />
                            </a>
                        </Link>
                    </li>
                </ul>
                <ul className="blog-insta">
                    <li>
                        <Link href="">
                            <a href="#javascript">
                            <LazyImage alt="Blog image 6" className="img-fluid" src="/assets/images/agency/blog/6.jpg" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                            <LazyImage alt="Blog image 4" className="img-fluid" src="/assets/images/agency/blog/4.jpg" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                            <LazyImage alt="Blog image 3" className="img-fluid" src="/assets/images/agency/blog/3.png" />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a href="#javascript">
                            <LazyImage alt="Blog image 2" className="img-fluid" src="/assets/images/agency/blog/2.jpg" />
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Instagram;
