import React from 'react'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {

    return(
    <>
    <div className="header">
        <Link to='/'>
            <button>
                HTML
            </button>
        </Link>

        <Link to='/css'>
            <button>
                CSS
            </button>
        </Link>

        <Link to='/js'>
            <button>
                JS
            </button>
        </Link>

        <Link to='/react'>
            <button>
                React
            </button>
        </Link>

        <Link to='/redux'>
            <button>
                Redux
            </button>
        </Link>

        <Link to='/depen'>
            <button>
                Dependencies
            </button>
        </Link>
    </div>
    </>
    );
}