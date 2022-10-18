import React from 'react'

const Header = () => {
  return (
    <header className="backdrop-blur shadow-slate-100">
        <nav className="navbar navbar-expand-lg shadow-md p-4 relative flex items-center w-full justify-between">
            <div className="px-6 w-full flex flex-wrap items-center justify-between">
                <div className="flex items-center">
                    <button
                    className="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContentY"
                    aria-controls="navbarSupportedContentY"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        className="w-5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path
                        fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                    </svg>
                    </button>
                </div>
                <div className="navbar-collapse flex collapse grow items-center" id="navbarSupportedContentY">
                    <a className="navbar-brand font-light text-2xl text-rose-700" href="/">DeNaTo Apps</a>
                    <ul className="navbar-nav ml-auto mt-1 lg:flex lg:flex-row">
                        <li className="nav-item">
                            <a className="nav-link p-3 mr-2 text-rose-600 hover:text-rose-800" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mb-1 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-3 mr-2 text-purple-500 hover:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mb-1 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                                <span>Features</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-3 mr-2 text-indigo-500 hover:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mb-1 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link p-3 mr-2 text-sky-500 hover:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline mb-1 mr-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span>About</span>
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header