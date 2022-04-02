import React from 'react'
import { Link } from 'react-router-dom'


export const Header: React.FC = () => {

    return(
    <>
    <div className="header">

        <Link to='useful/'>
            <button>
                HTML
            </button>
        </Link>

        <Link to='useful/css'>
            <button>
                CSS
            </button>
        </Link>

        <Link to='useful/js'>
            <button>
                JS
            </button>
        </Link>

        <Link to='useful/react'>
            <button>
                React
            </button>
        </Link>

        <Link to='useful/redux'>
            <button>
                Redux
            </button>
        </Link>

        <Link to='useful/depen'>
            <button>
                Dependencies
            </button>
        </Link>
    
    </div>
    </>
    );
}