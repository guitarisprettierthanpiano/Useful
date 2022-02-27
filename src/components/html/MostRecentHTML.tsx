import React, { useEffect } from 'react'

interface Props {

}

export const MostRecentHTML: React.FC<Props> = ({}) => {

    const FetchDataFromJSON = async () => {
        try{
            const response = await fetch('../src/components/html/html.json');
            const data = await response.json();

            const HTMLContent: HTMLDivElement = document.querySelector('.HTML-Content')
            //making the content from the data array of objects.
            for (let i:number = 0; i < data.length; i++){
                //making container for right side
                const newContainer: HTMLDivElement = document.createElement('div')
                newContainer.classList.add(`HTML-Item-${i}`)
                newContainer.classList.add('HTML-Item')
                HTMLContent.appendChild(newContainer)

                //adding element to list on left
                const newLI: HTMLLIElement = document.createElement('li')
                newLI.textContent = data[i].title
                document.querySelector('.HTML-Items-UL').appendChild(newLI)
 
                //making h1 inside container
                const newH1: HTMLHeadingElement = document.createElement('h1')
                newH1.textContent = data[i].title
                newContainer.appendChild(newH1)

                //making pre inside container
                const newPre: HTMLPreElement = document.createElement('pre')
                newPre.textContent = data[i].pre
                newContainer.appendChild(newPre)

                //making note inside container
                const newNote: HTMLParagraphElement = document.createElement('p')
                newNote.textContent = data[i].note
                newContainer.appendChild(newNote)
            }
            
            console.log(data)
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
    <div className="HTML-Page-Container Page-Container">
        <div className="HTML-List-Container List-Container">
            <div></div>
            <ul className="HTML-Items-UL Items-UL">

            </ul>
            <div></div>
        </div>

        <div className="HTML-Content Content">
        </div>

    </div>
    </>
    );
}