import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
    java,
    c,
    django,
    jenkins,
    powerbi,
    pandas,
    numpy,
    matplotlib,
    python,
    sql,
    tensorflow,
      playwright,
      tableau,
      selenium,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-items-center gap-10 pt-6">
        <img className="h-24 w-24 object-contain" src={html} title="HTML" alt="HTML" />
        <img className="h-24 w-24 object-contain" src={css} title="CSS" alt="CSS" />
        <img className="h-24 w-24 object-contain" src={js} title="JavaScript" alt="JavaScript" />
        <img className="h-24 w-24 object-contain" src={react} title="React" alt="React" />
        <img className="h-24 w-24 object-contain" src={java} title="Java" alt="Java" />
        <img className="h-24 w-24 object-contain" src={c} title="C" alt="C" />
        <img className="h-24 w-24 object-contain" src={django} title="Django" alt="Django" />
        <img className="h-24 w-24 object-contain" src={python} title="Python" alt="Python" />
        <img className="h-24 w-24 object-contain" src={powerbi} title="Power BI" alt="Power BI" />
        <img className="h-24 w-24 object-contain" src={pandas} title="Pandas" alt="Pandas" />
        <img className="h-24 w-24 object-contain" src={numpy} title="NumPy" alt="NumPy" />
        <img className="h-24 w-24 object-contain" src={matplotlib} title="Matplotlib" alt="Matplotlib" />
        <img className="h-24 w-24 object-contain" src={sql} title="SQL" alt="SQL" />
        <img className="h-24 w-24 object-contain" src={tensorflow} title="TensorFlow" alt="TensorFlow" />
        <img className="h-24 w-24 object-contain" src={tableau} title="Tableau" alt="Tableau" />
      </section>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 justify-items-center gap-10 pt-6">
        <img className="h-24 w-24 object-contain" src={vscode} title="Visual Studio Code" alt="Visual Studio Code" />
        <img className="h-24 w-24 object-contain" src={git} title="Git" alt="Git" />
        <img className="h-24 w-24 object-contain" src={github} title="Github" alt="Github" />
        <img className="h-24 w-24 object-contain" src={npm} title="NPM" alt="NPM" />
        <img className="h-24 w-24 object-contain" src={postman} title="Postman" alt="Postman" />
        <img className="h-24 w-24 object-contain" src={jenkins} title="Jenkins" alt="Jenkins" />
        <img className="h-24 w-24 object-contain" src={playwright} title="Playwright" alt="Playwright" />
        <img className="h-24 w-24 object-contain" src={selenium} title="Selenium" alt="Selenium" />
      </section>
    </main>
  );
}

export default Technologies;
