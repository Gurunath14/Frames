import appcontent from "../Content/App_content.json"

const getcontent =(contentobject:string)=>{
    const contentdata : any = appcontent;
    if(contentdata){
        return contentobject && contentdata[contentobject];
    }
}


export {getcontent};