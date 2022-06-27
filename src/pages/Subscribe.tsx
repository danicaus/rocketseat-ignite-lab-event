import { gql, useMutation } from "@apollo/client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../components/Footer";
import Logo from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name:String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`;

export default function Subscribe() {
  const navigate = useNavigate();
  const [ formField, setFormField ] = useState({
    name: '',
    email: '',
  });

  const [ createSubscriber, { loading } ] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  function handleSubscribeSubmit(event: FormEvent) {
    event.preventDefault();
    createSubscriber({
      variables: formField,
    })
      .then(() => navigate('/event'))
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setFormField({
      ...formField,
      [name]: value,
    })
  }
  
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          <form className="flex flex-col gap-2 w-full" onSubmit={handleSubscribeSubmit}>
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              name="name"
              placeholder="Seu nome completo"
              onChange={handleInput}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              onChange={handleInput}
            />
            <button 
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <div className="h-[650px] w-full bg-code bg-no-repeat bg-center" />
      <Footer />
    </div>
  )
}