

export const Form = () => {

  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[700px]">
      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="">Nome Completo</label>
        <input placeholder="Insira seu nome completo" className="px-4 py-[.65rem] bg-gray-500 bg-opacity-60 rounded-full" name="full-name" type="text" />
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="">E-mail</label>
        <input placeholder="Insira seu e-mail" className="px-4 py-[.65rem] bg-gray-500 bg-opacity-60 rounded-full" name="email" type="email" />
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="">Telefone</label>
        <input placeholder="(DDD) 9 0000-0000" className="px-4 py-[.65rem] bg-gray-500 bg-opacity-60 rounded-full" name="phone" type="text" />
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="">Empresa</label>
        <input placeholder="Insira sua empresa" className="px-4 py-[.65rem] bg-gray-500 bg-opacity-60 rounded-full" name="business" type="text" />
      </div>

      <button className="max-w-[189px] text-[18px] p-3 bg-[#E30161] rounded-md text-white font-medium">
        Realizar inscrição
      </button>
    </form>
  )
}