import React, { useEffect } from 'react'
import { toast, Flip } from 'react-toastify';

const data = require('./react.json'); 

export const MostRecentReact: React.FC = () => {

    const FetchDataFromJSON = async () => {
        try{
            const ReactContent: HTMLDivElement = document.querySelector('.React-Content')
            //making the content from the data array of objects.
            for (let i:number = 0; i < data.length; i++){
                //making container for right side
                const newContainer: HTMLDivElement = document.createElement('div')
                newContainer.classList.add(`React-Item-${i}`)
                newContainer.classList.add('React-Item')
                ReactContent.appendChild(newContainer)

                //adding element to list on left
                const newLI: HTMLLIElement = document.createElement('li')
                newLI.textContent = data[i].title
                document.querySelector('.React-Items-UL').appendChild(newLI)
 
                //making h1 inside container
                const newH1: HTMLHeadingElement = document.createElement('h1')
                newH1.textContent = data[i].title
                newContainer.appendChild(newH1)

                //making pre inside container
                const newPre: HTMLPreElement = document.createElement('pre')
                newPre.textContent = data[i].pre
                newPre.onclick = () => {
                    navigator.clipboard.writeText(`${data[i].pre}`)
                    toast.success('Copied!', {
                        position: "top-left",
                        autoClose: 1500,
                        hideProgressBar: true,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: false,
                        progress: undefined,
                        transition: Flip,
                        theme: 'colored',
                    });
                }
                newContainer.appendChild(newPre)

                //making note inside container
                const newNote: HTMLParagraphElement = document.createElement('p')
                newNote.textContent = data[i].note
                newContainer.appendChild(newNote)
            }
            
            return
        }
        catch(error){
            console.error(error)
        }
    }
    
    //generate the stuff on page load
    useEffect(() => {
        FetchDataFromJSON()
    },[])

    return(
    <>
    <div className="React-Page-Container Page-Container">
        <div className="React-List-Container List-Container">
            <div></div>
            <ul className="React-Items-UL Items-UL">

            </ul>
            <div></div>
        </div>

        <div className="React-Content Content">
        </div>

    </div>
    </>
    );
}