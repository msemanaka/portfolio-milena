
function Navbar() {
    return (
        <>
            <nav className="border-[3px] border-grape m-5 flex justify-between items-center mx-auto w-[92%] ">
                <div className="font-semibold text-5xl px-3 py-1 border-r-[3px]">
                    SEMANAKA
                </div>

                <div className="font-semibold text-2xl px-5 py-1 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center ">
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4VW] gap-8">
                        <a className="" href="#">HOME</a>
                        <a className="" href="#">SOBRE</a>
                        <a className="" href="#">PROJETOS</a>

                    </ul>
                </div>
                <div>
                    <div className="font-semibold text-2xl px-3 py-3 border-l-[3px]">
                        <a href="#">CONTATO</a>          
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar