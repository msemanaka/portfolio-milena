
function Navbar() {
    return (
        <>
            <nav className=" border-[3px] border-grape m-5 flex justify-between items-center mx-auto w-[92%]">
                <div className="font-semibold text-5xl px-3 py-3 border-r-[3px] max-sm:text-2xl">
                    LOGO
                </div>

                <div className="font-semibold text-2xl px-5 py-1 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center ">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4VW] gap-8">
                        <a className="" href="#">home</a>
                        <a className="" href="#">sobre</a>
                        <a className="" href="#">projetos</a>

                    </ul>
                </div>
                <div>
                    <div className="font-semibold text-2xl mx-2 p-1.5 border-[3px]">
                        <a className="text-1xl max-sm:text-2xl" href="#">CONTATO</a>          
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar