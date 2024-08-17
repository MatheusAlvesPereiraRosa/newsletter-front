import { useForm } from "react-hook-form";

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-[700px]">
      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="">Nome Completo</label>
        <input
          placeholder="Insira seu nome completo"
          className="px-4 py-[.65rem] bg-gray-500 bg-opacity-60 rounded-full"
          type="text"
          {...register('fullName', { required: true })}
        />
        {errors.fullName && <span className="text-red-500">Nome Completo é obrigatório.</span>}
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="">E-mail</label>
        <input
          placeholder="Insira seu e-mail"
          className="px-4 py-[.65rem] bg-gray-500 bg-opacity-60 rounded-full"
          type="email"
          {...register('email', { required: true })}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="">Telefone</label>
        <input 
        placeholder="(DDD) 9 0000-0000" 
        className="px-4 py-[.65rem] bg-gray-500 bg-opacity-60 rounded-full"  
        type="text" 
        {...register('phone', { required: true })}
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-3 text-gray-200 font-[20px]" htmlFor="">Empresa</label>
        <input 
        placeholder="Insira sua empresa" 
        className="px-4 py-[.65rem] bg-gray-500 bg-opacity-60 rounded-full" 
        type="text" 
        {...register('business', { required: true })}
        />
      </div>

      <button type="submit" className="max-w-[189px] text-[18px] mt-2 p-3 bg-[#E30161] rounded-md text-white font-medium">
        Realizar inscrição
      </button>
    </form>
  )
}