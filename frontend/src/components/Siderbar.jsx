import TitleBar from "./TitleBar"

function Sidebar(){
    return <div className="bg-green-200 col-span-2 h-screen" >
        <TitleBar title={"Morning, Ajay"} />
        <div className="flex cursor-pointer"><Title children={"Favorite Song"}/><div ></div></div>
        <div className="flex cursor-pointer"><Title children={"Liked Songs"}/><div ></div></div>
        <div className="flex cursor-pointer"><Title children={"Saved Album"}/><div ></div></div>
        <div className="flex cursor-pointer"><Title children={"Favorite Artist"}/><div ></div></div>
        <div className="flex cursor-pointer"><Title children={"Downloads"}/><div ></div></div>
      

    </div>
}

export default Sidebar

function Title({children}){
    return <div className="text-sm font-medium px-1 py-2 ">
        {children}
    </div>
}

