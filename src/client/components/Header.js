

const Navbar=()=>{

    return(
        <div className="header">
        <div className="wrap">
          <div className="wrap_float">
            <div className="header__top">
              <div className="tel">
                <a href="tel:0000000000">+1 1235 6789 10</a>
              </div>
              <div className="email">
                <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
              </div>
              <div className="socials">
                <a href="#" className="a facebook"></a>
                <a href="#" className="a instagram"></a>
                <a href="#" className="a pinterest"></a>
                <a href="#" className="a twitter"></a>
              </div>
            </div>
            <div className="header__bottom">
              <a href="index.html" className="logo">
                lavella
              </a>
              <div className="menu" id="js-menu">
                <div className="close"></div>
                <div className="scroll">
                  <a className="current">Home</a>
                  <div className="scroll_wrap">
                    <ul>
                      <li>
                        <a href="index.html" className="active">
                          Home
                        </a>
                      </li>
                      <li className="dropdown_li">
                        <a href="#">
                          <span>Pages</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul>
                            <li className="dropdown_li">
                              <a href="#">
                                <span>Search</span>
                              </a>
                              <div className="submenu">
                                <ul>
                                  <li>
                                    <a href="search-results.html">
                                      Search results
                                    </a>
                                  </li>
                                  <li>
                                    <a href="search-results-not-found.html">
                                      No results
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="contacts.html">Contact</a>
                            </li>
                            <li>
                              <a href="gallery.html">Gallery</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming soon</a>
                            </li>
                            <li>
                              <a href="404.html">404 Page</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown_li">
                        <a href="tour-list.html">
                          <span>Tour List</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul>
                            <li>
                              <a href="tour-list.html">Tour List</a>
                            </li>
                            <li>
                              <a href="tour-list-2.html">Tour List 2</a>
                            </li>
                            <li>
                              <a href="tour-list-3.html">Tour List 3</a>
                            </li>
                            <li>
                              <a href="tour-list-4.html">Tour List 4</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a href="destinations.html">Destinations</a>
                      </li>
                      <li className="dropdown_li">
                        <a href="single.html">
                          <span>Tour Page</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul>
                            <li>
                              <a href="single.html">Tour Page</a>
                            </li>
                            <li>
                              <a href="single-dark.html">Tour Page Dark</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="dropdown_li">
                        <a href="blog-list.html">
                          <span>Blog</span>
                        </a>
                        <div className="dropdown-menu">
                          <ul>
                            <li>
                              <a href="blog-list.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-list-2.html">Blog 2</a>
                            </li>
                            <li>
                              <a href="blog-single.html">Blog Single</a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bottom">
                    <div className="tel">
                      <a href="tel:+11235678910">+1 1235 6789 10</a>
                    </div>
                    <div className="email">
                      <a href="mailto:info@hellodigi.ru">info@hellodigi.ru</a>
                    </div>
                    <div className="socials">
                      <div className="links">
                        <a href="#" className="fb"></a>
                        <a href="#" className="instagram"></a>
                        <a href="#" className="pinterest"></a>
                        <a href="#" className="twitter"></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="search_link" id="search_link"></div>
              <div className="mobile_btn" id="mobile_btn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

    );


}

export default Navbar;