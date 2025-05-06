
function LoginCard(){
    return <div className="flex justify-center p-8 ">
        <div className=" text-white  bg-black w-72 h-96  justify-center border-2 rounded-xl border-green-500">
            <div className="flex justify-center py-24">Logo</div>
    
            <InputCard placeholder={"Enter username"}/>
            <InputCard placeholder={"Enter Psssword"} type={"password"}/>
            <a className="text-xs flex justify-center text-slate-800 py-2" href="#">Forget passwod! click here</a>

        </div>
    </div>
}

export default LoginCard

function InputCard({placeholder, type}){
    return <div className="flex justify-around p-1">
        <input className="bg-slate-950 rounded-xs py-1 text-slate-500 outline-none px-3" placeholder={placeholder} type={type}></input>
    </div>
}