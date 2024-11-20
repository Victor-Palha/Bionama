import { useState } from "react";

export function QuizChagas() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Quem é o vetor da doença de chagas?",
      options: ["Ascaris lumbricoides", "Aedes aegypti", "Triatomideo fêmea", "Aranha"],
      correctAnswer: "Triatomideo fêmea",
    },
    {
      id: 2,
      question: "Qual é o nome do agente etiológico da doença de chagas?",
      options: ["Trypanossoma cruzi", "Entamoeba coli", "Entamoeba histolytica", "Ascaris lumbricoides"],
      correctAnswer: "Trypanossoma cruzi",
    },
    {
      id: 3,
      question: "Em qual hospedeiro o agente etiológico da doença de chagas completa o seu ciclo de vida?",
      options: ["Hospedeiro definitivo", "Hospedeiro intermediário", "Hospedeiro facultativo", "Hospedeiro obrigatório"],
      correctAnswer: "Hospedeiro intermediário",
    },
    {
      id: 4,
      question:
        "A contaminação do indivíduo sadio se dá pela penetração do protozoário na mucosa e/ou em lesões da pele humana. Nessa forma de transmissão, o Trypanossoma é transmitido ao homem através de:",
      options: ["contágio direto", "água contaminada", "fezes do barbeiro", "saliva do inseto"],
      correctAnswer: "fezes do barbeiro",
    },
  ];

  const handleChange = (questionId: number, value: string) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionId] = value;
    setAnswers(updatedAnswers);
    setSubmitted(false)
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Questionário</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        {questions.map((q, index) => (
          <div key={q.id} className="mb-6">
            <p className="text-lg font-semibold text-gray-700">{`${q.id}. ${q.question}`}</p>
              <div className="space-y-2 mt-2">
                {q.options.map((option) => (
                  <label key={option} className="block">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      onChange={() => handleChange(index, option)}
                      className="mr-2"
                    />
                    {option}
                  </label>
                ))}
                </div>
          </div>
        ))}
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          Enviar Respostas
        </button>
      </form>

      {submitted && (
        <div className="mt-6 bg-white p-4 rounded shadow-md">
          <h3 className="text-xl font-bold text-green-700">Resultados:</h3>
          {questions.map((q, index) => (
            <p key={q.id} className="text-lg text-gray-700">
              {q.id}. {q.question} -{" "}
              <span
                className={
                  answers[index] === q.correctAnswer
                    ? "text-green-500"
                    : "text-red-500"
                }
              >
                {answers[index] === q.correctAnswer ? "Correto" : "Incorreto"}
              </span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
