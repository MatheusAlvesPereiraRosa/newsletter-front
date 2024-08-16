import { Form } from "../../components/Form"
import women from "../../assets/glad-young-woman-with-curly-bushy-hair-holds-modern-mobile-phone-downloads-amazing-application-surfs-social-networks-wears-casual-blue-jumper 1 1.png"

export const App = () => {
  return (
    <main className="flex flex-row items-center pt-28 md:mt-0 mb-20">
      <section className="lg:ms-[7.5rem] lg:me-0 md:ms-[6rem] md:me-0 mx-[4.5rem]">
        <h1 className="text-[39px] text-white font-bold mb-12">Inscreva-se em nossa newsletter.</h1>

        <Form />
      </section>

      <section className="md:absolute bottom-0 right-0">
        <img className="h-[500px] hidden xl:block" src={women} />
      </section>
    </main>
  )
}
