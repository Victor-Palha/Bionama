import ciclo from "../../assets/malaria/ciclo.jpg"
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { CaretLeft, PencilLine } from "@phosphor-icons/react"
import { useState } from "react"
import { QuizMalaria } from "../../components/QuizMalaria"
import { Footer } from "../../components/Footer"

export function Malaria() {

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
                {/* Introdução */}
                <header>
                    <h1 className="text-3xl font-bold text-green-700 mb-4">Introdução</h1>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    A malária continua sendo um dos principais problemas de saúde pública no mundo. Estima-se que a doença afete cerca de 200 milhões de pessoas nas áreas subtropicais e tropicais do planeta, resultando em aproximadamente 600 mil mortes a cada ano, na grande maioria, crianças. 
                    <br /><br />
                    No Brasil, a magnitude da malária está relacionada à elevada incidência da doença na região amazônica e à sua gravidade clínica. Causa perdas sociais e econômicas na população sob risco, principalmente naqueles que vivem em condições precárias de habitação e saneamento. A malária é uma doença febril causada por um protozoário do gênero *Plasmodium*. O vetor (transmissor) dessa doença para os humanos é o mosquito do gênero *Anopheles*, popularmente conhecido como mosquito-prego.
                    </p>
                </header>

                {/* Transmissão da Malária */}
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Transmissão da Malária</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    A malária é uma doença transmitida, principalmente, pela picada da fêmea do mosquito-prego do gênero *Anopheles* contaminada pelo parasita *Plasmodium*. Esses mosquitos geralmente são mais abundantes durante o amanhecer e o fim da tarde. 
                    <br /><br />
                    A doença pode ser adquirida de outras formas, mas são raros os casos de transmissão dessa magnitude. Isso pode ocorrer por transfusão de sangue, forma congênita, compartilhamento de seringas e acidentes de trabalho (pessoas que trabalham em hospitais e laboratórios).
                    </p>
                </section>

                {/* Ciclo de Vida do Plasmodium */}
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Ciclo de Vida do Plasmodium</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    O *Plasmodium* apresenta um ciclo de vida heteroxênico, ou seja, para completar o seu ciclo de vida precisa de dois hospedeiros diferentes:
                    </p>
                    <ul className="list-disc pl-8 mt-4 text-lg text-gray-700">
                    <li>Hospedeiro intermediário (humano)</li>
                    <li>Hospedeiro definitivo (mosquito)</li>
                    </ul>

                    <section className="mb-6 mt-6">
                    {/* <h2 className="text-2xl font-semibold text-green-600 mb-3">Imagens</h2> */}
                        <div className="flex flex-wrap gap-4 items-center justify-center md:flex-nowrap">
                            <img src={ciclo} alt="Ciclo da malaria" className="w-[350px] max-w-[350px] h-[500px] max-h-[500px] rounded-lg shadow-md" />
                        </div>
                    </section>

                    {/* Formas: Mosquito */}
                    <div className="mt-6">
                    <h3 className="text-xl font-semibold text-green-600">Formas: Mosquito</h3>
                    <p className="mt-2 text-lg text-gray-700 leading-relaxed">
                        <strong>Gametócitos:</strong> formas sexuais no intestino do mosquito.<br />
                        <strong>Oocineto:</strong> forma móvel dentro do inseto, produto da diferenciação do zigoto.<br />
                        <strong>Oocisto:</strong> forma alojada na glândula salivar do inseto que libera os esporozoítos.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        No mosquito, o parasita *Plasmodium* se desenvolve em gametas machos (macro) e fêmeas (micro), que se fertilizam e formam um zigoto. O zigoto se transforma em oocineto, que penetra na parede do intestino e forma oocistos. Os oocistos se multiplicam e produzem esporozoítos que migram para as glândulas salivares do mosquito.
                    </p>
                    </div>

                    {/* Formas: Humanos */}
                    <div className="mt-6">
                    <h3 className="text-xl font-semibold text-green-600">Formas: Humanos</h3>
                    <p className="mt-2 text-lg text-gray-700 leading-relaxed">
                        <strong>Merozoíto:</strong> formas invasivas para as hemácias provenientes de hepatócitos.<br />
                        <strong>Trofozoíto:</strong> jovem (forma de anel) → maduro (forma “ameboide”), formas replicadas intra-eritrocíticas.<br />
                        <strong>Esquizonte:</strong> forma de infecção para as hemácias provenientes de hemácias.
                    </p>
                    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                        Em humanos, os esporozoítos infectantes são inseridos no homem pelo inseto vetor. Os esporozoítos circulam na corrente sanguínea e rapidamente penetram nas células do fígado, iniciando o ciclo de esquizogonia tecidual. Ao final do ciclo, os esquizontes rompem os hepatócitos, liberando milhares de merozoítos, que invadem as hemácias e dão continuidade ao ciclo.
                    </p>
                    </div>
                </section>

                {/* Quadro Clínico */}
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Quadro Clínico da Malária</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    A malária pode ser leve, moderada ou aguda. Os sintomas gerais incluem febre, calafrios, dor de cabeça, mal-estar, dor muscular e náusea. Em casos graves, podem ocorrer convulsões, vômitos, dispneia, anemia intensa, hemorragias e hipotensão arterial.
                    </p>
                </section>

                {/* Tratamento */}
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Tratamento</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    A malária é tratada com medicamentos específicos que impedem a continuidade do ciclo do parasita. O tipo de medicamento varia conforme o quadro geral do paciente e o tipo de parasita presente.
                    </p>
                </section>

                {/* Prevenção */}
                <section className="mt-8">
                    <h2 className="text-2xl font-semibold text-green-700 mb-4">Prevenção</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                    A prevenção envolve evitar o contato com o vetor, utilizando telas de proteção em janelas, mosquiteiros, repelentes e roupas que protejam braços e pernas. Também é importante eliminar focos de reprodução, como água acumulada em pneus e vasos. Atualmente, não existem vacinas para prevenir a malária.
                    </p>
                </section>

                {!isQuizOpen && (
                    <button className="bg-primary p-4 rounded-lg shadow-md flex text-white items-center justify-center gap-2 w-full hover:scale-105 transition mt-5" onClick={()=>setIsQuizOpen(true)}>
                        <PencilLine size={32} weight="bold"/>
                        <span className="font-bold">Realizar teste avaliativo</span>
                    </button>
                )}
            </article>

            {isQuizOpen && (
                <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-5">
                    <QuizMalaria/>
                </div>
            )}
            <Footer/>
        </>
    )
}