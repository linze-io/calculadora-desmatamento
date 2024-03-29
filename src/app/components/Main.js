"use client"

import Head from "next/head"
import Button from "@mui/material/Button"
import { RiPlantFill } from "react-icons/ri/"

import React from "react"

export default function Home() {
  return (
    <>
      <Head>
        <title>CSF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="-mt-40">
        <div
          className="pt-32 bg-cover bg-center px-5 lg:px-0 bg-black"
          style={{ backgroundImage: `url("/images/img1.webp")` }}
        >
          <div className="flex mx-auto items-center border-b-8 border-black">
            <div className="flex flex-col lg:flex-row w-full items-center justify-between text-white pt-16 lg:pt-48 pb-10 px-4 lg:px-10 lg:pb-40 gap-10 lg:gap-0">
              <h1 className="text-2xl lg:text-4xl font-light text-left mb-0 pt-0 lg:w-1/2">
                A{" "}
                <span className="font-bold">
                  Calculadora de Impactos do Desmatamento
                </span>{" "}
                é uma ferramenta de valoração dos danos sociais e ambientais
                causados pelo desmatamento na Amazônia
              </h1>
              <div className="flex mx-auto gap-8">
                <Button
                  sx={{
                    backgroundColor: "#4ade80",
                    "&:hover": {
                      backgroundColor: "#dcfce7",
                    },
                    padding: "16px 32px",
                    color: "#052e16",
                    fontWeight: "normal",
                  }}
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/calculator"
                  target="_self"
                >
                  GUIA DE USO
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#4ade80",
                    "&:hover": {
                      backgroundColor: "#dcfce7",
                    },
                    padding: "16px 32px",
                    color: "#052e16",
                    fontWeight: "normal",
                  }}
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/calculator"
                  target="_self"
                >
                  CALCULADORA
                </Button>
              </div>
            </div>
          </div>
        </div>

        <h1 className="flex text-2xl md:text-4xl font-bold p-10 border-b-8 border-black gap-4 items-center">
          <RiPlantFill />
          Funções da Calculadora
        </h1>

        <div className="flex flex-col md:flex-row mx-0 md:mx-auto pt-0 justify-between items-center gap-10 md:gap-0">
          <div className="w-full md:w-1/2 p-10 md:border-r-8 border-black">
            <div className="mb-4 text-xl">
              <p>
                A Calculadora de Impactos do Desmatamento pode ser utilizada
                para três finalidades principais:
              </p>
              <div className="mt-4">
                <ul className="flex flex-col gap-4">
                  <li>
                    1. Estimar valores de danos ambientais para apoiar a
                    definição de compensações e indenizações;
                  </li>
                  <li>
                    2. Estimar níveis eficientes de investimentos para
                    planejamento e prevenção de impactos;
                  </li>
                  <li>
                    3. Estimar receitas potenciais que o Estado poderia ter com
                    seus ativos florestais.
                  </li>
                </ul>
              </div>

              <p className="mt-4">
                Caso não tenha informações específicas, não tem problema, serão
                incluídos automaticamente valores médios de contexto e impacto e
                resultados e suas explicações serão gerados na sequencia.
              </p>
            </div>
          </div>

          <div
            className="bg-cover bg-center w-full md:w-1/2 h-[408px] border border-black bg-black"
            //style={{ backgroundImage: `url("/images/teste2.png")` }}
          >
            video
          </div>
        </div>

        <h1 className="flex text-2xl md:text-4xl font-bold p-10 border-t-8 border-black gap-4 items-center">
          <RiPlantFill /> Entenda os impactos do desmatamento
        </h1>

        <div className="mt-0 pt-0 pb-0 px-4 lg:px-0 border-y-8 border-black">
          <div className="mx-auto p-0">
            <div className="flex flex-col lg:flex-row justify-between p-0 gap-0">
              <div className="flex flex-col justify-start bg-white border-b-4 lg:border-b-0 p-0 gap-4 shadow-none lg:w-1/2 lg:border-r-0 border-black">
                <div>
                  <img className="h-32 mx-auto pt-8" src="/images/ico1.svg" />
                  <div className="w-1/2 lg:w-2/3 mx-auto text-2xl xl:text-3xl font-bold mt-0 border-b-2 border-black px-4 py-4 text-center">
                    Restauração
                  </div>
                </div>
                <div className="text-left px-6 lg:w-2/3 mx-auto text-2xl mt-4">
                  Refere-se aos gastos necessários para implementar os métodos
                  necessários para restaurar o meio ambiente e promover o
                  bem-estar humano que foi afetado.
                </div>
              </div>

              <div className="flex flex-col justify-start bg-white border-0 p-0 gap-4 shadow-none lg:w-1/2 border-l-8 border-black">
                <div>
                  <img className="h-32 mx-auto pt-8" src="/images/ico2.svg" />
                  <div className="w-1/2 lg:w-2/3 mx-auto text-2xl xl:text-3xl font-bold mt-0 border-b-2 border-black px-4 py-4 text-center">
                    Serviços Ecossistêmicos
                  </div>
                </div>
                <div className="text-left px-6 lg:w-2/3 mx-auto text-2xl mt-4 mb-8">
                  As consequências do desmatamento incluem a perda de vários
                  benefícios, tanto econômicos quanto não econômicos. Essas
                  perdas são, primeiramente, calculadas com base nas opções
                  alternativas de uso da terra disponíveis para os
                  proprietários. O custo de oportunidade do desmatamento inclui
                  a perda de recursos madeireiros e não madeireiros da floresta
                  e , além disso, a perda de serviços culturais e recreativos,
                  que não são comercializados diretamente no mercado. A perda de
                  serviços ecossistêmicos, como sequestro de carbono, regulação
                  da água e controle da erosão, proporcionados pela floresta em
                  pé, tem um impacto significativo no bem-estar da sociedade
                  como um todo.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
