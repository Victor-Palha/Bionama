import logo from "../../assets/logo.png"
import malaria from "../../assets/malaria.jpeg"
import chagas from "../../assets/chagas.jpeg"

import { Link } from "react-router-dom";

export function Home(){
    return (
        <>
            <header className="flex items-center justify-center p-10 bg-primary shadow-lg gap-2">
                <img src={logo} alt="Bionama" className="w-16 h-16" />
                <h1 className="text-4xl font-bold text-white">Bionama</h1>
            </header>

            <main className="p-8 md:flex md:gap-10">
                <section className="mb-8">
                    <div className="relative group">
                        <img
                            src={chagas}
                            alt="Placeholder"
                            className="w-full rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-opacity duration-300 rounded-lg">
                            <Link
                                to="/chagas"
                                className="text-xl font-semibold text-white bg-green-500 px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                            >
                                Doença de Chagas
                            </Link>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="relative group">
                        <img
                            src={malaria}
                            alt="Placeholder"
                            className="w-full rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-opacity duration-300 rounded-lg">
                            <Link
                                to="/malaria"
                                className="text-xl font-semibold text-white bg-green-500 px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                            >
                                Malaria
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}