import React, { useEffect } from 'react'
import { toast, Flip } from 'react-toastify';

interface Props {

}

export const MostRecentCSS: React.FC<Props> = ({}) => {

    const FetchDataFromJSON = async () => {
        try{
            const response = await fetch('../src/components/css/css.json');
            const data = await response.json();

            const HTMLContent: HTMLDivElement = document.querySelector('.CSS-Content')
            //making the content from the data array of objects.
            for (let i:number = 0; i < data.length; i++){
                //making container for right side
                const newContainer: HTMLDivElement = document.createElement('div')
                newContainer.classList.add(`CSS-Item-${i}`)
                newContainer.classList.add('CSS-Item')
                HTMLContent.appendChild(newContainer)

                //adding element to list on left
                const newLI: HTMLLIElement = document.createElement('li')
                newLI.textContent = data[i].title
                document.querySelector('.CSS-Items-UL').appendChild(newLI)
 
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
    
    //fetch on initial
    useEffect(() => {
        FetchDataFromJSON()
    },[])

    return(
    <>
    <div className="CSS-Page-Container Page-Container">
        <div className="CSS-List-Container List-Container">
            <div></div>
            <ul className="CSS-Items-UL Items-UL">

            </ul>
            <div></div>
        </div>

        <div className="CSS-Content Content">
        </div>

    </div>
    </>
    );
}