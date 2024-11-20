import logo from "../../assets/logo.png"
import carlos from "../../assets/chagas/carlos-chagas.jpeg"
import barbeiro from "../../assets/chagas/barbeiro.jpeg"
import idk from "../../assets/chagas/idk.jpeg"
import idk2 from "../../assets/chagas/idk2.jpeg"
import wtf from "../../assets/chagas/wtf.jpeg"
import affects from "../../assets/chagas/affects.jpeg"
import trasmi from "../../assets/chagas/transmi-1.jpeg"
import ciclo from "../../assets/chagas/ciclo.jpeg"
import { Link } from "react-router-dom"
import { CaretLeft, PencilLine } from "@phosphor-icons/react"
import { QuizChagas } from "../../components/QuizChagas"
import { useState } from "react"

export function Chagas() {

    const [isQuizOpen, setIsQuizOpen] = useState(false)

    return (
        <>
            <header className="flex items-center justify-between p-10 bg-primary shadow-lg mb-5">
                <Link to="/">
                    <CaretLeft size={32} weight="bold" className="text-white"/>
                </Link>
                <div className="flex items-center gap-2">
                    <img src={logo} alt="Bionama" className="w-16 h-16" />
                    <h1 className="text-4xl font-bold text-white">Bionama</h1>
                </div>
                <div>

                </div>
            </header>
        
            <article className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-green-700 mb-4">Introdução</h1>
                    <p className="text-gray-700 text-lg">
                    A doença de Chagas é causada por um agente etiológico, denominado *Trypanossoma cruzi*, descoberto em aproximadamente 1909, por Carlos. Ela possui como vetor um invertebrado, sendo um besouro fêmea do gênero *Triatoma*, mais popularmente conhecido na região Amazônica como barbeiro, responsável por transmitir a doença de Chagas para os seres humanos e vertebrados.
                    </p>
                </header>

                <section className="mb-6">
                    {/* <h2 className="text-2xl font-semibold text-green-600 mb-3">Imagens</h2> */}
                    <div className="flex flex-wrap gap-4 items-center justify-center md:flex-nowrap">
                        <img src={carlos} alt="Carlos Chagas" className="w-[300px] max-w-[300px] h-[300px] max-h-[300px] rounded-lg shadow-md" />
                        <img src={barbeiro} alt="Barbeiro" className="w-[300px] max-w-[300px] h-[300px] max-h-[300px] rounded-lg shadow-md" />
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Ciclo da doença de Chagas no hospedeiro</h2>
                    <p className="text-gray-700 text-lg">
                    O ciclo da doença de Chagas é heteroxênico, sendo em hospedeiros vertebrados ciclos intracelulares e multiplicações e no hospedeiro invertebrado.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Contaminação pelo triatomídeo</h2>
                    <p className="text-gray-700 text-lg">
                    O ser humano, ao ser picado pela fêmea do triatomídeo infectado, é exposto ao agente etiológico *Trypanossoma cruzi*. Durante o repasto sanguíneo, o inseto libera substâncias anestésicas, tornando sua presença imperceptível. Após a alimentação, o triatomídeo excreta fezes contendo a forma tripomastigota, que entra na corrente sanguínea do hospedeiro quando o local é coçado.
                    </p>
                </section>

                <section className="mb-6">
                    {/* <h2 className="text-2xl font-semibold text-green-600 mb-3">Imagens</h2> */}
                    <div className="flex flex-wrap gap-4 items-center justify-center">
                        <img src={trasmi} alt="Transmissão" className="w-[200px] max-w-[200px] h-[200px] max-h-[200px] rounded-lg shadow-md" />
                        <img src={idk} alt="Transmissão" className="w-[200px] max-w-[200px] h-[200px] max-h-[200px] rounded-lg shadow-md" />
                        <img src={idk2} alt="Transmissão" className="w-[200px] max-w-[200px] h-[200px] max-h-[200px] rounded-lg shadow-md" />
                        <img src={wtf} alt="Transmissão" className="w-[200px] max-w-[200px] h-[200px] max-h-[200px] rounded-lg shadow-md" />
                    </div>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Ciclo no corpo humano</h2>
                    <p className="text-gray-700 text-lg">
                    Na corrente sanguínea, o agente etiológico invade macrófagos, onde ocorre diferenciação e multiplicação em formas amastigotas. Após rompimento das células hospedeiras, elas invadem outros órgãos como o coração e intestino, podendo causar complicações no funcionamento e aumento dos órgãos.
                    </p>
                </section>

                <div className="flex flex-wrap gap-4 items-center justify-center md:flex-nowrap">
                    <img src={affects} alt="ciclo" className="w-[300px] max-w-[300px] h-[300px] max-h-[300px] rounded-lg shadow-md" />
                    <img src={ciclo} alt="ciclo" className="w-[300px] max-w-[300px] h-[300px] max-h-[300px] rounded-lg shadow-md" />
                </div>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Ciclo no hospedeiro intermediário</h2>
                    <p className="text-gray-700 text-lg">
                    O ciclo no triatomídeo fêmea ocorre quando ela se alimenta de um hospedeiro infectado. Nesse processo, a forma epimastigota do *Trypanossoma cruzi* é ingerida e alojada no trato digestivo do inseto, onde permanece sem desenvolver o ciclo de vida completo.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Sintomas</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-lg">
                    <li>Dor de cabeça</li>
                    <li>Inchaço na região do rosto</li>
                    <li>Fraqueza</li>
                    <li>Manchas vermelhas</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Vias de contaminação</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-lg">
                    <li>Acidente biológico</li>
                    <li>Transfusão</li>
                    <li>Alimentação</li>
                    <li>Picada do triatomídeo</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-green-600 mb-3">Profilaxia</h2>
                    <ul className="list-disc pl-6 text-gray-700 text-lg">
                    <li>Uso de repelentes</li>
                    <li>Mosquiteiro</li>
                    <li>Roupas compridas cobrindo o corpo</li>
                    </ul>
                </section>

                {!isQuizOpen && (
                    <button className="bg-primary p-4 rounded-lg shadow-md flex text-white items-center justify-center gap-2 w-full hover:scale-105 transition" onClick={()=>setIsQuizOpen(true)}>
                        <PencilLine size={32} weight="bold"/>
                        <span className="font-bold">Realizar teste avaliativo</span>
                    </button>
                )}
            </article>

            {isQuizOpen && (
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-5">
                    <QuizChagas/>
                </div>
            )}
        </>
    )
}