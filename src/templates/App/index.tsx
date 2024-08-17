import { Form } from "../../components/Form"

import women from "../../assets/images/women.png"
import logo from "../../assets/images/LOGO.png"

export const App = () => {
  

  return (
    <main className="flex flex-row items-center px-6 sm:px-0 sm:my-0 my-20 md:mt-0">
      <section className="flex flex-col justify-between ms-0 lg:ms-[7.5rem] md:ms-[6rem] sm:ms-[2.5rem] md:me-0">
        <div className="relative top-[-20px] pb-10">
          <img src={logo} />
        </div>

        <h1 className="text-[39px] text-white text-center sm:text-left font-bold mb-8">Inscreva-se em nossa newsletter.</h1>

        <Form />
      </section>

      <section className="md:absolute bottom-0 right-0">
        <img className="h-[500px] hidden xl:block" src={women} />
      </section>
    </main>
  )
}
