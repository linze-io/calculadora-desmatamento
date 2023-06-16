"use client"

import Head from "next/head"
import Button from "@mui/material/Button"
import { RiPlantFill } from "react-icons/ri/"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import TextField from "@mui/material/TextField"


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
          //style={{ backgroundImage: `url("/images/test1.png")` }}
        >
          <div className="flex mx-auto items-center border-b-0 border-black">
            <div className="flex flex-col md:flex-row w-full items-center justify-between text-white pt-16 md:pt-48 pb-10 px-4 md:px-10 md:pb-28 lg:pb-40 gap-10 md:gap-0">
              <h1 className=" text-2xl md:text-4xl font-light text-left mb-4 pt-0 md:w-1/2">
                The{" "}
                <span className="font-bold">
                  Deforestation Impacts Calculator
                </span>{" "}
                is a tool to assess the social and environmental damage caused
                by forest logging in the Amazon
              </h1>
              <div className="flex mx-auto gap-8">
                <Button
                  className="bg-green-400 hover:bg-green-100 py-4 px-8 text-green-900 font-bold"
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/"
                  target="_blank"
                >
                  CALCULATOR
                </Button>
                <Button
                  className="bg-green-400 hover:bg-green-100 py-4 px-8 text-green-900 font-bold"
                  variant="contained"
                  color="primary"
                  size="large"
                  href="/"
                  target="_blank"
                >
                  GUIA DE USO
                </Button>
              </div>
            </div>
          </div>
        </div>

        <h1 className="flex text-2xl md:text-4xl font-bold p-10 border-b-8 border-black gap-4 items-center">
          <RiPlantFill />
          Calculadora
        </h1>

        <div className="flex flex-col md:flex-row mx-0 md:mx-auto justify-between border-b-8 border-black items-start gap-10 md:gap-0">
          <div className="flex w-full md:w-2/3 p-0 md:border-r-8 md:h-screen border-black">
            <div className="mb-0 text-xl">
              <h3 className="p-4 font-bold">How to use</h3>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Set location</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Types of minning</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel3a-header"
                >
                  <Typography>Retort use</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel4a-header"
                >
                  <Typography>Units of measurement</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel4a-header"
                >
                  <Typography>Value hypotesis</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel5a-header"
                >
                  <Typography>Inflation</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel6a-header"
                >
                  <Typography>Uses of the calculator</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>

          <div className="flex flex-col md:w-1/3 mx-auto">
            <h3 className="pt-4 px-8 font-bold text-xl">Calculator</h3>
            <div className="flex flex-col p-8 gap-4 -my-6">
              <TextField
                className="border-b-4"
                id="standard-basic"
                label="Country"
                variant="standard"
              />
              <TextField
                id="standard-basic"
                label="General or specific impacts?"
                variant="standard"
              />
              <div className="flex grid-cols-2 gap-4">
                <TextField
                  id="standard-basic"
                  label="State"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Region"
                  variant="standard"
                />
              </div>
              <div className="flex grid-cols-2 gap-4">
                <TextField
                  id="standard-basic"
                  label="Extraction type"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Is a retort used to reduce the dispersion of mercury?"
                  variant="standard"
                />
              </div>
              <TextField
                id="standard-basic"
                label="Unit(s) of measurement"
                variant="standard"
              />
              <div className="flex grid-cols-2 gap-4">
                <TextField
                  id="standard-basic"
                  label="Hectare(s)"
                  variant="standard"
                />
                <TextField
                  id="standard-basic"
                  label="Pit depth"
                  variant="standard"
                />
              </div>
              <TextField
                id="standard-basic"
                label="Accumulated inflation since January 2022 (%)"
                variant="standard"
              />
              <TextField
                className="mb-8"
                id="standard-basic"
                label="Calculator uses"
                variant="standard"
              />
              <Button
                className="shadow-sm font-bold w-full py-4 px-4 mb-6 text-green-800 border-green-400 hover:border-green-400 bg-green-400 hover:bg-green-500"
                variant="outlined"
                color="primary"
                size="medium"
                href="/"
                target="_blank"
              >
                Calculate
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
