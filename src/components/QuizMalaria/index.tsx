import React, { useState } from "react";

export function QuizMalaria() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    {
        id: 1,
        question: "Qual é o agente etiológico da malária?",
        options: [
            "Giardia lamblia.",
            "Plasmodium falciparum e Plasmodium vivax.",
            "Esquissomose.",
            "Dengue.",
        ],
        correctAnswer: "Plasmodium falciparum e Plasmodium vivax.",
    },
    {
        id: 2,
        question: "Quem é o vetor da malária?",
        options: [
            "Anopheles.",
            "Triatomídeo.",
            "Aedes aegypti.",
            "Besouro.",
        ],
        correctAnswer: "Anopheles.",
    },
    {
        id: 3,
        question: "Marque quais medidas de profilaxia podem ser utilizadas:",
        options: [
            "Uso de sapato fechado e higienização correta dos alimentos.",
            "Uso de repelente, processamento adequado de determinados alimentos.",
            "Utilização de máscara.",
            "Degradação de ambientes arborizados.",
        ],
        correctAnswer: "Uso de repelente, processamento adequado de determinados alimentos.",
    },
    {
        id: 4,
        question:
            "A malária é um grave problema que acomete várias áreas tropicais do mundo, incluindo o Brasil. A respeito dessa doença causada por protozoários do gênero Plasmodium, marque a alternativa *incorreta.*",
        options: [
            "Essa doença é transmitida pela picada do mosquito macho Anopheles.",
            "Essa doença pode provocar febre alta, calafrios, dores no corpo, vômito e fraqueza.",
            "Os protozoários, após infectarem uma pessoa, provocam o rompimento de suas hemácias.",
            "A gravidade está diretamente relacionada com a espécie de protozoário que provocou a doença.",
        ],
        correctAnswer:
            "Essa doença é transmitida pela picada do mosquito macho Anopheles.",
    },
    {
      id: 5,
      question: "Assinale verdadeiro V ou falso F para as afirmativas,  a seguir :\n\n( ) a fêmea do gênero Anofheles, se alimenta de seiva.\n( ) a forma de infecção pela doença de chagas é por via oral ou através da picada e contato com fezes do triatomídeo. \n( ) a infecção por malária é através da picada e contato com a saliva do mosquito Anofheles.\n( )  a doença de chagas é a malária tem como vetores invertebrados.",
      options: [
          "V, F, F, V.",
          "F, V, V, F.",
          "F, F, V, V.",
          "V, V, F, F.",
      ],
      correctAnswer: "F, F, V, V.",
    }
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
            <p className="text-lg font-semibold text-gray-700">
              {`${q.id}. `}
              {q.question.split("\n").map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
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
            <p key={q.id} className="text-lg text-gray-700 my-2">
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
