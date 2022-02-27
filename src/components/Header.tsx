import React from 'react'
import { Link } from 'react-router-dom'

interface Props {

}

export const Header: React.FC<Props> = ({}) => {

    return(
    <>
    <div className="header">

        <Link to='/html'>
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

        <Link to='/reddux'>
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