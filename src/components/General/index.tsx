import { BsTicketPerforated } from 'react-icons/bs'
import { MdOutlineSupportAgent } from 'react-icons/md'
import { TbHandRock } from 'react-icons/tb'

export function General() {
  return (
    <section className="w-full max-w-7xl mx-auto px-10 my-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* get ticket */}
        <div className="text-center max-w-[320px]">
          <div className="mx-auto border border-gray-200 rounded-full w-20 h-20 p-6 flex items-center justify-center mb-4">
            <BsTicketPerforated size={40} />
          </div>
          <h3 className="text-2xl font-bold mb-2">selecione seu ingresso</h3>
          <p className="text-md">
            temos uma grande variedade de ingressos para todos os estilos musicais. selecione o que você mais te
            interessa
          </p>
        </div>
        {/* contact seller */}
        <div className="text-center max-w-[320px]">
          <div className="mx-auto border border-gray-200 rounded-full w-20 h-20 p-6 flex items-center justify-center mb-4">
            <MdOutlineSupportAgent size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">fale com o vendedor</h3>
          <p className="text-md">
            aqui você compra o ingresso direto com o vendedor, diminuindo os riscos de fraudes e perda de dinheiro
          </p>
        </div>
        {/* enjoy your show */}
        <div className="text-center max-w-[320px]">
          <div className="mx-auto border border-gray-200 rounded-full w-20 h-20 p-6 flex items-center justify-center mb-4">
            <TbHandRock size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2">se divirta!</h3>
          <p className="text-md">agora é só ir pro seu show preferido e curtir o máximo que puder</p>
        </div>
      </div>
    </section>
  )
}
